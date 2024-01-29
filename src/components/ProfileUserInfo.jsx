import { Input, Textarea, Image, Text, VStack, HStack } from '@chakra-ui/react';
import { Check, X, Edit2 } from 'react-feather';
import ButtonIcon from './ButtonIcon';

function ProfileUserInfo() {
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
					Profile Information
				</Text>
				{/* <ButtonIcon Icon={Edit2} color={'#D2BA82'} /> */}
				<ButtonIcon Icon={Check} color={'green'} />
				<ButtonIcon Icon={X} color={'red'} />
			</HStack>

			{/* <Text fontSize={13} color={'#A0AEC0'}>
				Hi, I’m Joeniño D. Cainday, this is a chakra preset components and its pretty neat on my
				family’s inventoring system.
			</Text> */}

			<Textarea fontSize={13} />

			<Image src="src/assets/profile_divider.svg" my={2} />

			<HStack spacing={5}>
				<VStack alignItems={'flex-start'} spacing={5}>
					<Text color={'gray.500'} fontSize={13} fontWeight={700}>
						Name:
					</Text>
					<Text color={'gray.500'} fontSize={13} fontWeight={700}>
						Role:
					</Text>
					<Text color={'gray.500'} fontSize={13} fontWeight={700}>
						Mobile:
					</Text>
					<Text color={'gray.500'} fontSize={13} fontWeight={700}>
						Location:
					</Text>
				</VStack>

				<VStack alignItems={'flex-start'} spacing={5}>
					{/* <Text color={'gray.500'} fontSize={13}>
						Joeninyo Cainday
					</Text>
					<Text color={'gray.500'} fontSize={13}>
						Developer
					</Text>
					<Text color={'gray.500'} fontSize={13}>
						0998 450 6322
					</Text>
					<Text color={'gray.500'} fontSize={13}>
						Philippines
					</Text> */}

					<Input size={'xs'} placeholder="Joeninyo Cainday" />
					<Input size={'xs'} placeholder="Developer" />
					<Input size={'xs'} placeholder="0998 450 6322" />
					<Input size={'xs'} placeholder="Philippines" />
				</VStack>
			</HStack>
		</VStack>
	);
}

export default ProfileUserInfo;
