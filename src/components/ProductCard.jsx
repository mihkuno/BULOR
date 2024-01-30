import { useState } from 'react';
import { Text, Input, Box, HStack, VStack, Avatar } from '@chakra-ui/react';
import { Trash, Edit, Check, X } from 'react-feather';
import ButtonIcon from './ButtonIcon';

function ProductCard({ data, onEdit, onDelete }) {
	const [isEdit, setIsEdit] = useState(false);

	const [editState, setEditState] = useState({
		name: data.name,
		weight: data.weight,
		price: data.price,
	});

	const handleUpdate = () => {
		// Perform update logic with the new state
		onEdit(data.id, editState.name, editState.price, editState.weight);
		setIsEdit(false);
	};

	const handleCancel = () => {
		// Reset the edit state to the current values
		setEditState({
			name: data.name,
			weight: data.weight,
			price: data.price,
		});

		setIsEdit(false);
	};

	return (
		<VStack minW={256} p={4} pb={7}>
			<Box w={'100%'} h={125} borderRadius={12} backgroundColor={'gray.200'} />
			<VStack alignItems={'flex-start'} px={2} w={'100%'} spacing={1} mt={1}>
				{isEdit ? (
					<Input
						size={'xs'}
						placeholder={data.name}
						onChange={e => setEditState({ ...editState, name: e.target.value })}
					/>
				) : (
					<Text fontWeight={'bold'} fontSize={14}>
						{data.name}
					</Text>
				)}
				<HStack justifyContent={'space-between'} w={'100%'}>
					{isEdit ? (
						<>
							<Input
								size={'xs'}
								placeholder={data.weight}
								maxW={90}
								onChange={e => setEditState({ ...editState, weight: e.target.value })}
							/>
							<Input
								size={'xs'}
								placeholder={data.price}
								maxW={90}
								onChange={e => setEditState({ ...editState, price: e.target.value })}
							/>
						</>
					) : (
						<>
							<Text fontSize={12}>{data.weight} KG</Text>
							<Text fontSize={12}>₱{data.price}</Text>
						</>
					)}
				</HStack>

				<HStack justifyContent={'space-between'} w={'100%'} mt={3}>
					<HStack>
						{isEdit ? (
							<>
								<ButtonIcon
									Icon={Check}
									color={'white'}
									background={'green.400'}
									onClick={() => handleUpdate()}
								/>
								<ButtonIcon
									Icon={X}
									color={'white'}
									background={'red.400'}
									onClick={() => handleCancel()}
								/>
							</>
						) : (
							<>
								<ButtonIcon
									onClick={() => onDelete(data.id)}
									Icon={Trash}
									color={'white'}
									background={'red.400'}
								/>
								<ButtonIcon
									onClick={() => setIsEdit(true)}
									Icon={Edit}
									color={'white'}
									background={'gray.500'}
								/>
							</>
						)}
					</HStack>
					<Avatar size={'xs'} />
				</HStack>
			</VStack>
		</VStack>
	);
}

export default ProductCard;
