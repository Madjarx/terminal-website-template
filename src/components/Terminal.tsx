import { Flex, Box, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import { Title, WindowControls, ColorModeSwitcher } from '.';

import { Home, About, Links } from '../pages';


const FormatPath = (path: string) => {
  if (path === '/') return 'Home';
  return path.charAt(1).toUpperCase() + path.slice(2);
};

const TerminalContent = () => {
  const location = useLocation();
  const currentPath = FormatPath(location.pathname);

  return (
    <>

      {/* This is the Top bar */}
      <Flex justifyContent="space-between" alignItems="center" alignContent={"baseline"}>
        <WindowControls />
        <Title text={currentPath} size='small' underlined={false} />
        <ColorModeSwitcher />
      </Flex>

      {/* This is sample navigation */}
      <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/links">Links</Link>
      </nav>

      {/* Routes will render the actual content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/links" element={<Links />} />
      </Routes>

    </>
  );
};


/** The actual terminal */
const Terminal = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.900', 'gray.100');

  const boxShadowLight = "rgba(0, 0, 0, 0.36) 0px 15px 40px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;";
  const boxShadowDark = "rgba(0, 0, 0, 0.90) 0px 15px 40px 0px, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;";

  const dropShadow = useColorModeValue(boxShadowLight, boxShadowDark);

  return (
    <Router>
      <Flex justifyContent="center" alignItems="center" height="100vh" width="100vw">
        <Box
          width={{ base: "90%", md: "60%" }}
          height={{ base: "70%", md: "80%" }}
          minHeight="60vh"
          bg={bgColor}
          color={textColor}
          fontFamily="monospace"
          p="20px"
          borderRadius="sm"
          position="relative"
          borderTopRadius="13px"
          borderBottomRadius="13px"
          boxShadow={dropShadow}
        >
          <TerminalContent />
        </Box>
      </Flex>
    </Router>
  );
};

export default Terminal;