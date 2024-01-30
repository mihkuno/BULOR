import { Text, Avatar, VStack, HStack, Flex } from '@chakra-ui/react';
import { Tr, Td } from '@chakra-ui/react';
import { Trash, Edit } from 'react-feather';
import ButtonIcon from '../components/ButtonIcon';

function SettingRecord({ data }) {
	return (
		<Tr>
			<Td fontSize={12}>
				<HStack spacing={3}>
					<Avatar size={'sm'} />
					<VStack alignItems={'flex-start'} spacing={-1}>
						<Text fontWeight={'bold'}>{data.name}</Text>
						<Text>{data.email}</Text>
					</VStack>
				</HStack>
			</Td>
			<Td fontSize={12} fontWeight={500}>
				<VStack alignItems={'flex-start'} spacing={-1}>
					{/* <Text fontWeight={'bold'}>Programmer</Text> */}
					<Text>{data.role}</Text>
				</VStack>
			</Td>
			<Td fontSize={12} fontWeight={500}>
				<Flex
					p={1.5}
					color={'white'}
					borderRadius={8}
					backgroundColor={'gray.400'}
					justifyContent={'center'}>
					{data.status}
				</Flex>
			</Td>
			<Td fontSize={12} fontWeight={500}>
				{data.joined}
			</Td>
			<Td>
				<HStack>
					<ButtonIcon Icon={Trash} color={'white'} background={'red.400'} />
					<ButtonIcon Icon={Edit} color={'white'} background={'gray.500'} />
				</HStack>
			</Td>
		</Tr>
	);
}

export default SettingRecord;
