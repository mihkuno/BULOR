import { useState } from 'react';
import { Input, Textarea, Image, Text, VStack, HStack } from '@chakra-ui/react';
import { Check, X, Edit2 } from 'react-feather';
import ButtonIcon from './ButtonIcon';

function ProfileUserInfo() {
	const [isEdit, setIsEdit] = useState(false);

	const [name, setName] = useState('Joeninyo Cainday');
	const [role, setRole] = useState('Developer');
	const [mobile, setMobile] = useState('998 450 6322');
	const [location, setLocation] = useState('Philippines');
	const [about, setAbout] = useState(
		"Hi, I'm Joeniño D. Cainday, this is a chakra preset components and its pretty neat on my family's inventoring system."
	);

	const [editState, setEditState] = useState({
		name,
		role,
		mobile,
		location,
		about,
	});

	const handleUpdate = () => {
		// Perform update logic with the new state
		setName(editState.name);
		setRole(editState.role);
		setMobile(editState.mobile);
		setLocation(editState.location);
		setAbout(editState.about);

		setIsEdit(false);
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
