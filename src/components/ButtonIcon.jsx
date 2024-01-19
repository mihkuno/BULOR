import { Box } from '@chakra-ui/react';

function ButtonIcon({ color, background, Icon }) {
	return (
		<Box
			p={1.5}
			borderRadius={7}
			backgroundColor={background}
			boxShadow="0 3.5px 5.5px 0 rgba(0, 0, 0, 0.02)">
			<Icon color={color} width={'12px'} height={'12px'} />
		</Box>
	);
}

export default ButtonIcon;
