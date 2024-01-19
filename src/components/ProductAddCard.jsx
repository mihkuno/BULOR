import { Text, Box, VStack } from '@chakra-ui/react';
import { Plus } from 'react-feather';

function ProductAddCard() {
	return (
		<Box minW={256} p={4} pb={7}>
			<VStack
				justifyContent={'center'}
				borderRadius={12}
				border={'1px solid #E0E1E2'}
				w={'100%'}
				h={'100%'}>
				<Plus />
				<Text color={'#718096'} fontWeight={'bold'} fontSize={13}>
					Add Stock
				</Text>
			</VStack>
		</Box>
	);
}

export default ProductAddCard;
