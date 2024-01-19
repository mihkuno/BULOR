import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<LandingPage />} />
				<Route path="/product" element={<ProductPage />} />
				<Route path="/profile" element={<ProfilePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
