import { useState, useEffect, useContext } from 'react';
import { Wrap, Box } from '@chakra-ui/react';
import AppBody from '../components/AppBody';
import ProductCard from '../components/ProductCard';
import ProductAddCard from '../components/ProductAddCard';

import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../components/AccountProvider';

function ProductPage() {
	const [productData, setProductData] = useState([
		{
			id: 1,
			name: 'Boneless Bolinao',
			weight: '12',
			price: '800.00',
		},
		{
			id: 2,
			name: 'Katambak',
			weight: '12',
			price: '800.00',
			author: '',
			image: '',
		},
	]);

	const handleAddProduct = () => {
		console.log('Add Product');

		// placeholder
		let id = productData.length + 1;
		// add the product in api sql, then get its id

		const newProduct = {
			id,
			name: 'New Product',
			weight: 0,
			price: 0,
			author: '',
			image: '',
		};

		setProductData([...productData, newProduct]);
	};

	const handleDeleteProduct = id => {
		productData.map(product => {
			if (product.id === id) {
				setProductData(productData.filter(product => product.id !== id));
			}
		});

		// delete the product id in api sql
	};

	const handleEditProduct = (id, name, price, weight) => {
		productData.map(product => {
			if (product.id === id) {
				product.name = name;
				product.price = price;
				product.weight = weight;
			}
		});

		// edit the product id in api sql
	};

	const { UserAccount, Loading } = useContext(AccountContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!Loading && !UserAccount) navigate('/');
	}, [UserAccount, Loading]);

	if (!UserAccount || Loading) {
		// You can render a loading spinner or some indication while waiting for the data
		return <div>Loading...</div>;
	}

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
						data={product}
						onDelete={handleDeleteProduct}
						onEdit={handleEditProduct}
					/>
				))}
				<ProductAddCard onClick={handleAddProduct} />
			</Wrap>
		</AppBody>
	);
}

export default ProductPage;
