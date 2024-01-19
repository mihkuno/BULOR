import { HStack, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

function SidebarButton({ title, Icon, isActive }) {
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<Box
			as="button"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			pl={5}
			py={3}
			borderRadius={20}
			backgroundColor={isActive ? '#fff' : isHovered && 'rgba(0, 0, 0, 0.02)'}
			boxShadow={isActive && '0 3.5px 5.5px 0 rgba(0, 0, 0, 0.02)'}>
			<HStack spacing={4} w={220}>
				<Box
					p={2}
					borderRadius={10}
					backgroundColor={isActive ? '#D2BA82' : '#ffffff'}
					boxShadow="0 3.5px 5.5px 0 rgba(0, 0, 0, 0.02)">
					<Icon color={isActive ? '#ffffff' : '#D2BA82'} width={'17px'} height={'17px'} />
				</Box>
				<Text fontSize={12} color={isActive ? '#2D3748' : '#A0AEC0'} fontWeight={'bold'}>
					{title}
				</Text>
			</HStack>
		</Box>
	);
}

export default SidebarButton;
