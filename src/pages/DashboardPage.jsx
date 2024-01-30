import { Text, VStack, HStack, Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Wallet } from 'react-ionicons';
import AppBody from '../components/AppBody';

function WalletCard({ Icon, title, subtitle, amount }) {
	return (
		<VStack
			justifyContent={'center'}
			w={200}
			h={240}
			spacing={1}
			backgroundColor={'#fff'}
			borderRadius={15}
			boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)">
			<Box background={'#4FD1C5'} padding={4} borderRadius={12} mb={3}>
				<Icon color={'white'} width={'20px'} height={'20px'} />
			</Box>
			<Text fontWeight={'bold'} fontSize={15} color={'#2D3748'}>
				{title}
			</Text>
			<Text fontWeight={'bold'} fontSize={12} color={'#A0AEC0'}>
				{subtitle}
			</Text>
			<Image src="../src/assets/dashboard_card_divider.svg" zIndex={1} mt={3} mb={3} />
			<Text fontWeight={'bold'} fontSize={15} color={'#2D3748'}>
				₱{amount}
			</Text>
		</VStack>
	);
}

function DashboardPage() {
	return (
		<AppBody active={'Dashboard'}>
			<HStack spacing={4} ml={5} mt={12}>
				<WalletCard
					title={'Balance'}
					subtitle={'Metrobank'}
					amount={'10,000.00'}
					Icon={Wallet}
				/>
				<WalletCard
					title={'Total Due'}
					subtitle={'Dec 12, 2025'}
					amount={'10,000.00'}
					Icon={Wallet}
				/>
			</HStack>
		</AppBody>
	);
}

export default DashboardPage;
