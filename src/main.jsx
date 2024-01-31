import React from 'react';
import ReactDOM from 'react-dom/client';

import { AccountProvider } from './components/AccountProvider';
import { ChakraProvider } from '@chakra-ui/react';

import './styles/global.css';
import Router from './Router';

function Root() {
	return (
		<ChakraProvider>
			<AccountProvider>
				<Router />
			</AccountProvider>
		</ChakraProvider>
	);
}

const element = document.getElementById('root');
ReactDOM.createRoot(element).render(<Root />);
