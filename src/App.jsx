import { Image, Text, VStack, HStack, Button, Center } from '@chakra-ui/react';

function App() {
	return (
		<>
			<Image src="src/assets/polygon.svg" alt="Polygon" pos="absolute" zIndex={-1} right={0} />
			<Center minH="100vh">
				<HStack>
					<VStack align="flex-start" maxW={'lg'} spacing={5}>
						<Text fontWeight={'bold'} fontSize={70} lineHeight={1} color={'gray.800'}>
							Lory's Dried Fish
						</Text>
						<Text>
							Offering a diverse selection of repacked dried fish sourced from the rich
							fisheries of the Visayas and Mindanao, setting the standard for{' '}
							<b>hygienic and high-quality seafood products.</b>
						</Text>
						<Button colorScheme="blue" fontSize={14} mt={5}>
							Log in with Google
						</Button>
					</VStack>
					<Image src="src/assets/logo.png" alt="Logo" maxW={450} />
				</HStack>
			</Center>
		</>
	);
}

export default App;
