import { VStack, HStack, Text, Box, Image } from '@chakra-ui/react';
import { Home, StatsChart, Card, Person, Build, LogOut } from 'react-ionicons';
import SidebarButton from './SidebarButton';

function Sidebar({ active }) {
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
				<SidebarButton title={'Dashboard'} Icon={Home} isActive={active == 'Dashboard'} />
				<SidebarButton title={'Product'} Icon={StatsChart} isActive={active == 'Product'} />
				<SidebarButton title={'Billing'} Icon={Card} isActive={active == 'Billing'} />
				<Text mt={2} mb={1} ml={5} fontSize={12} fontWeight={700}>
					ACCOUNT PAGES
				</Text>
				<SidebarButton title={'Profile'} Icon={Person} isActive={active == 'Profile'} />
				<SidebarButton title={'Settings'} Icon={Build} isActive={active == 'Settings'} />
				<SidebarButton title={'Log Out'} Icon={LogOut} />
			</VStack>
		</Box>
	);
}

export default Sidebar;
