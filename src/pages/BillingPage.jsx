import { Text, Avatar, VStack, HStack } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import AppBody from '../components/AppBody';

function BillingPage() {
	return (
		<AppBody active={'Billings'}>
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
					Pending Payment
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
									AMOUNT DUE
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td fontSize={12} fontWeight={500} color={'#A0AEC0'}>
									0923
								</Td>
								<Td fontSize={12} fontWeight={500}>
									<HStack>
										<Avatar size={'xs'} />
										<Text>Joeninyo Cainday</Text>
									</HStack>
								</Td>
								<Td fontSize={12} fontWeight={500}>
									Katambak
								</Td>
								<Td fontSize={12} fontWeight={500}>
									5 KG
								</Td>
								<Td fontSize={12} fontWeight={500}>
									14-06-21
								</Td>
								<Td fontSize={12} fontWeight={500}>
									14-06-21
								</Td>
								<Td fontSize={12} fontWeight={500}>
									₱1000.00
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
					Completed Transactions
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

export default BillingPage;
