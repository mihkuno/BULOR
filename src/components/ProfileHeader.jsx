import { Box, Image, Text, Flex, VStack, HStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { AccountContext } from './AccountProvider';

function ProfileHeader() {
	const { UserAccount } = useContext(AccountContext);

	return (
		<Flex w={'97%'} direction={'column'} mt={-20} alignItems={'center'}>
			<Box
				w={'100%'}
				h={'200px'}
				borderRadius={15}
				backgroundColor={'#D2BA82'}
				backgroundImage={'src/assets/profile_cover.svg'}
			/>

			<Flex
				p={5}
				w={'97%'}
				pos={'relative'}
				mt={-10}
				mb={5}
				background="linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)"
				border="1.5px solid #FFFFFF"
				boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
				backdropFilter="blur(10.5px)"
				borderRadius="15px">
				<HStack spacing={6}>
					<Image
						src="src/assets/profile_placeholder.png"
						w={'70px'}
						h={'70px'}
						borderRadius={10}
					/>

					<VStack alignItems={'flex-start'} spacing={-2}>
						<Text
							fontSize={17}
							fontWeight={'bold'}
							color={'#2D3748'}
							textTransform={'capitalize'}>
							{UserAccount.email_name}
						</Text>
						<Text fontSize={14} color={'#718096'}>
							{UserAccount.email_address}
						</Text>
					</VStack>
				</HStack>
			</Flex>
		</Flex>
	);
}

export default ProfileHeader;
