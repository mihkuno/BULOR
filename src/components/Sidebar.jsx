import { useContext } from 'react';
import { VStack, HStack, Text, Box, Image } from '@chakra-ui/react';
import { Home, StatsChart, Card, Person, Build, LogOut } from 'react-ionicons';
import SidebarButton from './SidebarButton';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from './AccountProvider';

function Sidebar({ active }) {
	const navigate = useNavigate();
	const { Google, setUserAccount } = useContext(AccountContext);

	function handleClick(title) {
		if (title == 'Log Out') {
			Google.logout();
			setUserAccount(null);
			navigate('/');
		} else navigate('/' + title.toLowerCase());
	}

	return (
		<Box pt={10} h={'100vh'} w={400}>
			<Box ml={10}>
				<HStack>
					<Image src="src/assets/logo.png" maxW={10} />
					<Text fontWeight={500} fontSize={18} color={'gray.900'}>
						Lory's Dried Fish
					</Text>
				</HStack>
				<Image src="src/assets/sidebar_divider.svg" zIndex={1} mt={5} mb={5} />
			</Box>
			<VStack ml={30} spacing={1} align="flex-start">
				<SidebarButton
					title={'Dashboard'}
					Icon={Home}
					active={active == 'Dashboard'}
					onClick={handleClick}
				/>
				<SidebarButton
					title={'Products'}
					Icon={StatsChart}
					active={active == 'Products'}
					onClick={handleClick}
				/>
				<SidebarButton
					title={'Billings'}
					Icon={Card}
					active={active == 'Billings'}
					onClick={handleClick}
				/>
				<Text mt={2} mb={1} ml={5} fontSize={12} fontWeight={700}>
					ACCOUNT PAGES
				</Text>
				<SidebarButton
					title={'Profile'}
					Icon={Person}
					active={active == 'Profile'}
					onClick={handleClick}
				/>
				<SidebarButton
					title={'Settings'}
					Icon={Build}
					active={active == 'Settings'}
					onClick={handleClick}
				/>
				<SidebarButton title={'Log Out'} Icon={LogOut} onClick={handleClick} />
			</VStack>
		</Box>
	);
}

export default Sidebar;
