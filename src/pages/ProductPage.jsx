import { Flex } from '@chakra-ui/react';

import AppBody from '../components/AppBody';
import ProductCard from '../components/ProductCard';
import ProductAddCard from '../components/ProductAddCard';

function ProductPage() {
	return (
		<AppBody active={'Product'}>
			<Flex
				mt={12}
				p={1}
				ml={5}
				flexWrap={'wrap'}
				borderRadius={15}
				backgroundColor={'#fff'}
				boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductAddCard />
			</Flex>
		</AppBody>
	);
}

export default ProductPage;
