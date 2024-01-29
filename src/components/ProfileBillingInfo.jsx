import { Image, Text, Flex, VStack, HStack } from '@chakra-ui/react';
import { Check, X, Edit2 } from 'react-feather';
import ButtonIcon from './ButtonIcon';

function ProfileBillingInfo() {
	return (
		<VStack
			alignItems={'flex-start'}
			spacing={4}
			p={10}
			maxW={450}
			backgroundColor={'#FFF'}
			borderRadius={15}
			boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)">
			<HStack alignItems={'flex-start'} spacing={3}>
				<Text fontSize={18} fontWeight={700} mb={2}>
					Billing Information
				</Text>
				{/* <ButtonIcon Icon={Edit2} color={'#D2BA82'} /> */}
				<ButtonIcon Icon={Check} color={'green'} />
				<ButtonIcon Icon={X} color={'red'} />
			</HStack>

			<HStack spacing={5}>
				<VStack alignItems={'flex-start'} spacing={5}>
					<Text color={'gray.500'} fontSize={13} fontWeight={700}>
						Bank:
					</Text>
					<Text color={'gray.500'} fontSize={13} fontWeight={700}>
						Number:
					</Text>
				</VStack>

				<VStack alignItems={'flex-start'} spacing={5}>
					<Text color={'gray.500'} fontSize={13}>
						Metrobank
					</Text>
					<Text color={'gray.500'} fontSize={13}>
						7812 2139 0823 XXXX
					</Text>
				</VStack>
			</HStack>
		</VStack>
	);
}

export default ProfileBillingInfo;
