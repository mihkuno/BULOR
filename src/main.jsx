import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
// import { AccountProvider } from './components/AccountProvider';

// Application Entry Point
import './styles/global.css';
import App from './pages/ProductPage';

// Render the application
function Root() {
	return (
		<ChakraProvider>
			{/* <AccountProvider> */}
			<App />
			{/* </AccountProvider> */}
		</ChakraProvider>
	);
}

const element = document.getElementById('root');
ReactDOM.createRoot(element).render(<Root />);
