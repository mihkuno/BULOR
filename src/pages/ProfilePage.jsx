import { HStack } from '@chakra-ui/react';
import AppBody from '../components/AppBody';
import ProfileHeader from '../components/ProfileHeader';
import ProfileUserInfo from '../components/ProfileUserInfo';
import ProfileBillingInfo from '../components/ProfileBillingInfo';

function ProfilePage() {
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
