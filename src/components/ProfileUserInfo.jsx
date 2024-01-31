import { Input, Textarea, Image, Text, VStack, HStack } from '@chakra-ui/react';
import { Check, X, Edit2 } from 'react-feather';
import ButtonIcon from './ButtonIcon';

import axios from 'axios';
import { useState, useContext } from 'react';
import { AccountContext } from './AccountProvider';

function ProfileUserInfo() {
	const [isEdit, setIsEdit] = useState(false);
	const { UserAccount, Google } = useContext(AccountContext);

	const [name, setName] = useState(UserAccount.user_name);
	const [role, setRole] = useState(UserAccount.self_role);
	const [mobile, setMobile] = useState(UserAccount.phone_number);
	const [location, setLocation] = useState(UserAccount.location);
	const [about, setAbout] = useState(UserAccount.self_info);

	const [editState, setEditState] = useState({
		name,
		role,
		mobile,
		location,
		about,
	});

	const handleUpdate = () => {
		const token = Google.getToken();
		axios
			.put(
				'http://localhost:5000/api/put_profile_info',
				{
					user_name: editState.name,
					self_role: editState.role,
					phone_number: editState.mobile,
					location: editState.location,
					self_info: editState.about,
				},
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			)
			.then(response => {
				console.log('Profile information updated successfully:', response.data);
			})
			.catch(error => {
				console.error('Error:', error.response ? error.response.data : error.message);
			})
			.finally(() => {
				setIsEdit(false);
			});

		// Perform update logic with the new state
		setName(editState.name);
		setRole(editState.role);
		setMobile(editState.mobile);
		setLocation(editState.location);
		setAbout(editState.about);
	};

	const handleCancel = () => {
		// Reset the edit state to the current values
		setEditState({
			name,
			role,
			mobile,
			location,
			about,
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
					Profile Information
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
							setEditState({
								name,
								role,
								mobile,
								location,
								about,
							});
							setIsEdit(true);
						}}
					/>
				)}
			</HStack>

			{isEdit ? (
				<Textarea
					fontSize={13}
					placeholder={about}
					onChange={e => setEditState({ ...editState, about: e.target.value })}
				/>
			) : (
				<Text fontSize={13} color={'#A0AEC0'}>
					{editState.about}
				</Text>
			)}

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
					{isEdit ? (
						<>
							<Input
								size={'xs'}
								placeholder={name}
								onChange={e => setEditState({ ...editState, name: e.target.value })}
							/>
							<Input
								size={'xs'}
								placeholder={role}
								onChange={e => setEditState({ ...editState, role: e.target.value })}
							/>
							<Input
								size={'xs'}
								placeholder={mobile}
								onChange={e => setEditState({ ...editState, mobile: e.target.value })}
							/>
							<Input
								size={'xs'}
								placeholder={location}
								onChange={e => setEditState({ ...editState, location: e.target.value })}
							/>
						</>
					) : (
						<>
							<Text color={'gray.500'} fontSize={13}>
								{editState.name}
							</Text>
							<Text color={'gray.500'} fontSize={13}>
								{editState.role}
							</Text>
							<Text color={'gray.500'} fontSize={13}>
								(+63) {editState.mobile}
							</Text>
							<Text color={'gray.500'} fontSize={13}>
								{editState.location}
							</Text>
						</>
					)}
				</VStack>
			</HStack>
		</VStack>
	);
}

export default ProfileUserInfo;
