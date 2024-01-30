import { useState } from 'react';
import { Input, Text, VStack, HStack } from '@chakra-ui/react';
import { Check, X, Edit2 } from 'react-feather';
import ButtonIcon from './ButtonIcon';

function ProfileBillingInfo() {
	const [isEdit, setIsEdit] = useState(false);

	const [bank, setBank] = useState('Metrobank');
	const [number, setNumber] = useState('7812 2139 0823 XXXX');

	const [editState, setEditState] = useState({
		bank,
		number,
	});

	const handleUpdate = () => {
		// Perform update logic with the new state
		setBank(editState.bank);
		setNumber(editState.number);

		setIsEdit(false);
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
					{isEdit ? (
						<>
							<Input
								size={'xs'}
								placeholder={bank}
								onChange={e => setEditState({ ...editState, bank: e.target.value })}
							/>
							<Input
								size={'xs'}
								placeholder={number}
								onChange={e => setEditState({ ...editState, number: e.target.value })}
							/>
						</>
					) : (
						<>
							<Text color={'gray.500'} fontSize={13}>
								{bank}
							</Text>
							<Text color={'gray.500'} fontSize={13}>
								{number}
							</Text>
						</>
					)}
				</VStack>
			</HStack>
		</VStack>
	);
}

export default ProfileBillingInfo;
