import { Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import NavBread from './NavBread';

function AppBody({ children, colorScheme, active }) {
	return (
		<Flex background="#F8F9FA">
			<Sidebar active={active} />
			<Flex w="100%" direction="column" px={20}>
				<NavBread colorScheme={colorScheme} />
				{Array.isArray(children) ? (
					children.map((child, index) => <div key={child.key || index}>{child}</div>)
				) : (
					<div key={children.key || 'single-child'}>{children}</div>
				)}
			</Flex>
		</Flex>
	);
}

export default AppBody;
