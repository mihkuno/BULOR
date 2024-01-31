import { HStack } from '@chakra-ui/react';
import AppBody from '../components/AppBody';
import ProfileHeader from '../components/ProfileHeader';
import ProfileUserInfo from '../components/ProfileUserInfo';
import ProfileBillingInfo from '../components/ProfileBillingInfo';

import { AccountContext } from '../components/AccountProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';

function ProfilePage() {
	const { UserAccount, Loading } = useContext(AccountContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!Loading && !UserAccount) navigate('/');
	}, [UserAccount, Loading]);

	if (!UserAccount || Loading) {
		// You can render a loading spinner or some indication while waiting for the data
		return <div>Loading...</div>;
	}

	return (
		<AppBody active={'Profile'} colorScheme={'light'}>
			<ProfileHeader />
			<HStack spacing={6} alignItems={'flex-start'}>
				<ProfileUserInfo />
				<ProfileBillingInfo />
			</HStack>
		</AppBody>
	);
}

export default ProfilePage;
