import { useState } from 'react';
import { Box } from '@chakra-ui/react';

function ButtonIcon({ color, background, Icon, onClick }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseOver = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<Box
			p={1.5}
			as={'button'}
			borderRadius={7}
			backgroundColor={background}
			opacity={isHovered ? 0.8 : 1}
			onClick={onClick}
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}
			boxShadow="0 3.5px 5.5px 0 rgba(0, 0, 0, 0.04)">
			<Icon color={color} width={'12px'} height={'12px'} />
		</Box>
	);
}

export default ButtonIcon;
