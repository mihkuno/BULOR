import { Text, Avatar, VStack, HStack, Box, Flex } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { Trash, Edit } from 'react-feather';
import ButtonIcon from '../components/ButtonIcon';
import AppBody from '../components/AppBody';

function SettingPage() {
	return (
		<AppBody active={'Settings'}>
			<VStack
				mt={10}
				ml={5}
				backgroundColor={'white'}
				px={5}
				py={10}
				alignItems={'flex-start'}
				spacing={5}
				borderRadius={12}>
				<Text fontSize={18} fontWeight={'bold'}>
					Admins
				</Text>
				<TableContainer w={'100%'}>
					<Table variant="simple" size={'md'}>
						<Thead>
							<Tr>
								<Th color={'#A0AEC0'} fontSize={10}>
									AUTHOR
								</Th>
								<Th color={'#A0AEC0'} fontSize={10}>
									FUNCTION
								</Th>
								<Th color={'#A0AEC0'} fontSize={10}>
									STATUS
								</Th>
								<Th color={'#A0AEC0'} fontSize={10}>
									JOINED
								</Th>
								<Th /> {/* Delete and Edit Button */}
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td fontSize={12}>
									<HStack spacing={3}>
										<Avatar size={'sm'} />
										<VStack alignItems={'flex-start'} spacing={-1}>
											<Text fontWeight={'bold'}>Joeninyo Cainday</Text>
											<Text>caindayjoeninyo@gmail.com</Text>
										</VStack>
									</HStack>
								</Td>
								<Td fontSize={12} fontWeight={500}>
									<VStack alignItems={'flex-start'} spacing={-1}>
										<Text fontWeight={'bold'}>Programmer</Text>
										<Text>Developer</Text>
									</VStack>
								</Td>
								<Td fontSize={12} fontWeight={500}>
									<Flex
										p={1.5}
										color={'white'}
										borderRadius={8}
										backgroundColor={'green.400'}
										justifyContent={'center'}>
										Online
									</Flex>
								</Td>
								<Td fontSize={12} fontWeight={500}>
									14-06-21
								</Td>
								<Td>
									<HStack>
										<ButtonIcon Icon={Trash} color={'white'} background={'red.400'} />
										<ButtonIcon Icon={Edit} color={'white'} background={'gray.500'} />
									</HStack>
								</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			</VStack>
			<VStack
				mt={5}
				ml={5}
				backgroundColor={'white'}
				px={5}
				py={10}
				alignItems={'flex-start'}
				spacing={5}
				borderRadius={12}>
				<Text fontSize={18} fontWeight={'bold'}>
					Users
				</Text>
				<TableContainer w={'100%'}>
					<Table variant="simple" size={'md'}>
						<Thead>
							<Tr>
								<Th color={'#A0AEC0'} fontSize={10}>
									ORDER ID
								</Th>
								<Th color={'#A0AEC0'} fontSize={10}>
									AUTHOR
								</Th>
								<Th color={'#A0AEC0'} fontSize={10}>
									PRODUCT
								</Th>
								<Th color={'#A0AEC0'} fontSize={10}>
									QUANTITY
								</Th>
								<Th color={'#A0AEC0'} fontSize={10}>
									ARRIVAL DATE
								</Th>
								<Th color={'#A0AEC0'} fontSize={10}>
									DUE DATE
								</Th>
								<Th color={'#A0AEC0'} fontSize={10}>
									PAID ON
								</Th>
								<Th color={'#A0AEC0'} fontSize={10}>
									AMOUNT DUE
								</Th>
							</Tr>
						</Thead>
						<Tbody></Tbody>
					</Table>
				</TableContainer>
			</VStack>
		</AppBody>
	);
}

export default SettingPage;
