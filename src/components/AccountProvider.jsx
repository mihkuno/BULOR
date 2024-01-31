/**
 *
 * context and providers are used for global state management
 * (eg. access a variable from here to any component in the hierarchy)
 *
 */

import { createContext, useEffect, useState } from 'react';
import { GooglePopup } from './GooglePopup';
import axios from 'axios';

// google console user_account client id
const CLIENT_ID = '974635431441-cd85begc9v1f1udu3gkn8dkbhqice87v.apps.googleusercontent.com';

// context allows for the state to be accessed anywhere in the application
const AccountContext = createContext();

// provider is a wrapper for the entire application
const AccountProvider = ({ children }) => {
	// set the state of the account being used in the application
	const [UserAccount, setUserAccount] = useState(null);
	const [Loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			const token = localStorage.getItem('token');

			if (token) {
				const response = await axios.get('http://localhost:5000/api/get_profile', {
					headers: {
						authorization: `Bearer ${token}`,
					},
				});

				setUserAccount(response.data.get_profile);
			}
		} catch (error) {
			console.error('Error:', error.response ? error.response.data : error.message);
		} finally {
			setLoading(false); // This will be executed whether there's an error or not
		}
	};

	function initLoginHandler() {
		// load and initialize the user_account from the Google Cloud Console
		window.google.accounts.id.initialize({
			auto_select: false,
			client_id: CLIENT_ID,

			// login handler callback
			callback: res => {
				// res.credential is the token
				// set the token in local storage
				localStorage.setItem('token', res.credential);
				fetchData();
			},
		});
	}

	useEffect(() => {
		initLoginHandler();
		fetchData();
	}, []);

	const Google = {
		login: () => GooglePopup(),
		logout: () => {
			window.google.accounts.id.disableAutoSelect();
			localStorage.clear();
			setUserAccount(null);
		},
	};

	return (
		<AccountContext.Provider value={{ UserAccount, setUserAccount, Google, fetchData, Loading }}>
			{children}
		</AccountContext.Provider>
	);
};

export { AccountProvider, AccountContext };
