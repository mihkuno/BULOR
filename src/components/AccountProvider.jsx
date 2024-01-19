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
const CLIENT_ID = '89255587017-7rk09mkvbs1630in8u0n8jlsip4q5l6k.apps.googleusercontent.com';

// context allows for the state to be accessed anywhere in the application
const AccountContext = createContext();

// provider is a wrapper for the entire application
const AccountProvider = ({ children }) => {
	// set the state of the account being used in the application
	const [UserAccount, setUserAccount] = useState(null);

	function initUserToken() {
		// set token if its already in local storage
		const token = localStorage.getItem('token');

		// check if account has "student" data
		// if not, redirect to setup page
		axios
			.get(
				'http://localhost:5000/api/student/get_self_data',
				// set the token in the header for axios requests
				{
					headers: {
						Authentication: `Bearer ${token}`,
					},
				}
			)
			.then(res => {
				setUserAccount(res.data.account);
			})
			.catch(err => {
				// if token is valid but account has no user data
				if (err.response.data.authenticated == true) {
					// set the user account and token
					// redirect to setup page
					setUserAccount(err.response.data.account);
				}
				// if token is invalid or expired, then prompt login
				else if (localStorage.getItem('token')) {
					setUserAccount(null);
					// auto login google prompt
					window.google.accounts.id.prompt();
					// proceed to login handler callback
					// see initLoginHandler()
					// this will run initUserToken() again
				}
				// if token is not in local storage
				else {
					// redirect to login page
					setUserAccount(null);
				}
			});
	}

	function initLoginHandler() {
		// load and initialize the user_account from the Google Cloud Console
		window.google.accounts.id.initialize({
			auto_select: false,
			client_id: CLIENT_ID,

			// login handler callback
			callback: res => {
				// set the token in local storage
				localStorage.setItem('token', res.credential);
				initUserToken();
			},
		});
	}

	useEffect(() => {
		initLoginHandler();
		initUserToken();
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
		<AccountContext.Provider value={{ UserAccount, Google, initUserToken }}>
			{children}
		</AccountContext.Provider>
	);
};

export { AccountProvider, AccountContext };
