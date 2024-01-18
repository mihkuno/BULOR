import { HStack, Button } from '@chakra-ui/react';

export default function NavBar() {
	return (
		<HStack spacing={10} position={'absolute'} right={200} top={90}>
			<Button variant="link" colorScheme="black" fontSize={14} fontWeight={500}>
				Home
			</Button>
			<Button variant="link" colorScheme="black" fontSize={14} fontWeight={500}>
				About
			</Button>
			<Button variant="outline" colorScheme="blue" fontSize={14} fontWeight={500}>
				Contact Us
			</Button>
		</HStack>
	);
}
