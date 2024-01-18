import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';

// Application Entry Point
import './styles/global.css';
import App from './App.jsx';

// Render the application
function Root() {
	return (
		<ChakraProvider>
			<App />
		</ChakraProvider>
	);
}

const element = document.getElementById('root');
ReactDOM.createRoot(element).render(<Root />);
