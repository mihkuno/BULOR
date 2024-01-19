import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
// import { AccountProvider } from './components/AccountProvider';

import './styles/global.css';
import Router from './Router';

function Root() {
	return (
		<ChakraProvider>
			{/* <AccountProvider> */}
			<Router />
			{/* </AccountProvider> */}
		</ChakraProvider>
	);
}

const element = document.getElementById('root');
ReactDOM.createRoot(element).render(<Root />);
