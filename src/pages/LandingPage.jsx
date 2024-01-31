import { useState, useContext, useEffect } from 'react';
import { Image, Text, VStack, HStack, Button, Center } from '@chakra-ui/react';
import { AccountContext } from '../components/AccountProvider';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function LandingPage() {
	const { UserAccount, Loading, Google } = useContext(AccountContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (UserAccount) navigate('/profile');
	}, [UserAccount]);

	if ((!UserAccount && Loading) || UserAccount) {
		// You can render a loading spinner or some indication while waiting for the data
		return <div>Loading...</div>;
	}

	return (
		<>
			{/* background polygon */}
			<Image src="src/assets/polygon.svg" pos="absolute" zIndex={-1} right={0} />

			{/* navigation bar */}
			<NavBar />

			<Center minH="100vh">
				<HStack>
					<VStack align="flex-start" maxW={'lg'} spacing={5}>
						{/* headline */}
						<Text fontWeight={'bold'} fontSize={70} lineHeight={1} color={'gray.800'}>
							Lory's Dried Fish
						</Text>

						{/* description */}
						<Text>
							Offering a diverse selection of repacked dried fish sourced from the rich
							fisheries of the Visayas and Mindanao, setting the standard for{' '}
							<b>hygienic and high-quality seafood products.</b>
						</Text>

						{/* login button */}
						<Button colorScheme="blue" fontSize={14} mt={5} onClick={Google.login}>
							Sign in with Google
						</Button>
					</VStack>
					{/* logo image */}
					<Image src="src/assets/logo.png" maxW={450} />
				</HStack>
			</Center>
		</>
	);
}

export default LandingPage;
