import { useState } from 'react';
import { Text, Avatar, VStack } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import AppBody from '../components/AppBody';
import SettingRecord from '../components/SettingRecord';

function SettingPage() {
	const [accounts, setAccounts] = useState([
		{
			id: 1,
			name: 'John Doe',
			email: 'caindayjoeon@gmail.com',
			role: 'somethign',
			assigned_role: 'Admin',
			status: 'Offline',
			joined: 'Dec 10, 2020',
		},
		{
			id: 2,
			name: 'Jane Doe',
			email: 'caindayjoeon@gmail.com',
			role: 'developer',
			assigned_role: 'Admin',
			status: 'Offline',
			joined: 'Dec 10, 2020',
		},
		{
			id: 3,
			name: 'Noobx',
			email: 'caindayjoeon@gmail.com',
			role: 'sensei',
			assigned_role: 'Supplier',
			status: 'Offline',
			joined: 'Dec 10, 2020',
		},
	]);

	const handleAccountEdit = (id, assigned_role) => {
		setAccounts(prevAccounts =>
			prevAccounts.map(account => (account.id === id ? { ...account, assigned_role } : account))
		);
		// Perform edit logic with the updated state in the API
	};

	const handleAccountDelete = id => {
		setAccounts(prevAccounts => prevAccounts.filter(account => account.id !== id));
		// Perform delete logic in the API
	};

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
								<Th />
							</Tr>
						</Thead>
						<Tbody>
							{accounts.map(account => {
								if (account.assigned_role === 'Admin') {
									return (
										<SettingRecord
											key={account.id}
											data={account}
											onEdit={handleAccountEdit}
											onDelete={handleAccountDelete}
										/>
									);
								}
							})}
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
					Suppliers
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
								<Th />
							</Tr>
						</Thead>
						<Tbody>
							{accounts.map(account => {
								if (account.assigned_role === 'Supplier') {
									return (
										<SettingRecord
											key={account.id}
											data={account}
											onEdit={handleAccountEdit}
											onDelete={handleAccountDelete}
										/>
									);
								}
							})}
						</Tbody>
					</Table>
				</TableContainer>
			</VStack>
		</AppBody>
	);
}

export default SettingPage;
