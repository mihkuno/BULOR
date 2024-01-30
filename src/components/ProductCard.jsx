import { Text, Box, HStack, VStack, Avatar } from '@chakra-ui/react';
import { Trash, Edit, Check, X } from 'react-feather';
import ButtonIcon from './ButtonIcon';

function ProductCard({ name, quantity, price, author, image, onClickEdit, onClickDelete }) {
	return (
		<VStack minW={256} p={4} pb={7}>
			<Box w={'100%'} h={125} borderRadius={12} backgroundColor={'gray.200'} />
			<VStack alignItems={'flex-start'} px={2} w={'100%'} spacing={1} mt={1}>
				<Text fontWeight={'bold'} fontSize={14}>
					{name}
				</Text>
				<HStack justifyContent={'space-between'} w={'100%'}>
					<Text fontSize={12}>{quantity} KG</Text>
					<Text fontSize={12}>₱{price}</Text>
				</HStack>

				<HStack justifyContent={'space-between'} w={'100%'} mt={3}>
					<HStack>
						{/* <ButtonIcon
							onClick={() => onClickDelete()}
							Icon={Trash}
							color={'white'}
							background={'red.400'}
						/>
						<ButtonIcon
							onClick={() => onClickEdit()}
							Icon={Edit}
							color={'white'}
							background={'gray.500'}
						/> */}
						<ButtonIcon Icon={Check} color={'white'} background={'green.400'} />
						<ButtonIcon Icon={X} color={'white'} background={'red.400'} />
					</HStack>
					<Avatar size={'xs'} />
				</HStack>
			</VStack>
		</VStack>
	);
}

export default ProductCard;
