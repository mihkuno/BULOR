import { useState } from 'react';
import { Text, Box, VStack } from '@chakra-ui/react';
import { Plus } from 'react-feather';

function ProductAddCard({ onClick }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseOver = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<Box
			minW={256}
			p={4}
			as={'button'}
			onClick={onClick}
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}>
			<VStack
				justifyContent={'center'}
				borderRadius={12}
				border={'1px solid #E0E1E2'}
				backgroundColor={isHovered ? '#F7FAFC' : '#fff'}
				w={'100%'}
				h={'225px'}>
				<Plus />
				<Text color={'#718096'} fontWeight={'bold'} fontSize={13}>
					Add Stock
				</Text>
			</VStack>
		</Box>
	);
}

export default ProductAddCard;
