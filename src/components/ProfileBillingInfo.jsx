import { useState, useEffect } from 'react';
import { Input, Text, VStack, HStack, Flex } from '@chakra-ui/react';
import { Check, X, Edit2 } from 'react-feather';
import ButtonIcon from './ButtonIcon';

import axios from 'axios';
import { useContext } from 'react';
import { AccountContext } from './AccountProvider';

function ProfileBillingInfo() {
	const [isEdit, setIsEdit] = useState(false);
	const { Google } = useContext(AccountContext);

	const [bank, setBank] = useState('');
	const [number, setNumber] = useState('');

	const [editState, setEditState] = useState({
		bank,
		number,
	});

	useEffect(() => {
		const token = Google.getToken();
		axios
			.get('http://localhost:5000/api/get_profile_bill', {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
			.then(response => {
				setBank(response.data.get_profile_bill.name);
				setNumber(response.data.get_profile_bill.number);
			})
			.catch(error => {
				console.error('Error:', error.response ? error.response.data : error.message);
			});
	}, []);

	const handleUpdate = () => {
		const token = Google.getToken();
		axios
			.put(
				'http://localhost:5000/api/put_profile_bill',
				{
					name: editState.bank,
					number: editState.number,
				},
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			)
			.then(response => {
				console.log('Profile billing updated successfully:', response.data);
			})
			.catch(error => {
				console.error('Error:', error.response ? error.response.data : error.message);
			})
			.finally(() => {
				setIsEdit(false);
			});

		// Perform update logic with the new state
		setBank(editState.bank);
		setNumber(editState.number);
	};

	const handleCancel = () => {
		// Reset the edit state to the current values
		setEditState({
			bank,
			number,
		});

		setIsEdit(false);
	};

	return (
		<VStack
			alignItems={'flex-start'}
			spacing={4}
			p={10}
			maxW={450}
			backgroundColor={'#FFF'}
			borderRadius={15}
			boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)">
			<HStack alignItems={'flex-start'} spacing={2}>
				<Text fontSize={18} fontWeight={700} mb={2}>
					Billing Information
				</Text>
				{isEdit ? (
					<>
						<ButtonIcon
							Icon={Check}
							color={'white'}
							background={'green.400'}
							onClick={handleUpdate}
						/>
						<ButtonIcon
							Icon={X}
							color={'white'}
							background={'red.400'}
							onClick={handleCancel}
						/>
					</>
				) : (
					<ButtonIcon
						Icon={Edit2}
						color={'#D2BA82'}
						onClick={() => {
							setIsEdit(true);
						}}
					/>
				)}
			</HStack>

			<Flex alignItems="center">
				<VStack alignItems="flex-start" spacing={5}>
					<Text color={'gray.500'} fontSize={13} fontWeight={700}>
						Bank:
					</Text>
					<Text color={'gray.500'} fontSize={13} fontWeight={700}>
						Number:
					</Text>
				</VStack>

				<VStack spacing={5} h={61} pl={5}>
					{isEdit ? (
						<>
							<Input
								size={'xs'}
								value={editState.bank}
								onChange={e => setEditState({ ...editState, bank: e.target.value })}
							/>
							<Input
								size={'xs'}
								value={editState.number}
								onChange={e => setEditState({ ...editState, number: e.target.value })}
							/>
						</>
					) : (
						<>
							<Text color={'gray.500'} fontSize={13}>
								{bank && `    ${bank}`}
							</Text>
							<Text color={'gray.500'} fontSize={13}>
								{number && `    ${number}`}
							</Text>
						</>
					)}
				</VStack>
			</Flex>
		</VStack>
	);
}

export default ProfileBillingInfo;
