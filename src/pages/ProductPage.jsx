import { Wrap, Box } from '@chakra-ui/react';
import AppBody from '../components/AppBody';
import ProductCard from '../components/ProductCard';
import ProductAddCard from '../components/ProductAddCard';

function ProductPage() {
	const handleAddProduct = () => {
		console.log('Add Product');
	};

	const handleDeleteProduct = () => {
		console.log('Delete Product');
	};

	const handleEditProduct = () => {
		console.log('Edit Product');
	};

	const productData = [
		{
			name: 'Boneless Bolinao',
			quantity: '12',
			price: '800.00',
			author: '',
			image: '',
		},
		{
			name: 'Katambak',
			quantity: '12',
			price: '800.00',
			author: '',
			image: '',
		},
		// Add more product data as needed
	];

	return (
		<AppBody active={'Products'}>
			<Wrap
				mt={12}
				p={1}
				ml={5}
				w={'100%'}
				backgroundColor={'#fff'}
				borderRadius={15}
				boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)">
				{productData.map((product, index) => (
					<ProductCard
						key={index}
						name={product.name}
						quantity={product.quantity}
						price={product.price}
						author={product.author}
						image={product.image}
						onClickDelete={() => handleDeleteProduct(product.name)}
						onClickEdit={() => handleEditProduct(product.name)}
					/>
				))}
				<ProductAddCard onClick={handleAddProduct} />
			</Wrap>
		</AppBody>
	);
}

export default ProductPage;
