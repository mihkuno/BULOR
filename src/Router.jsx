import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import BillingPage from './pages/BillingPage';
import SettingPage from './pages/SettingPage';
import DashboardPage from './pages/DashboardPage';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<LandingPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/products" element={<ProductPage />} />
				<Route path="/billings" element={<BillingPage />} />
				<Route path="/settings" element={<SettingPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
