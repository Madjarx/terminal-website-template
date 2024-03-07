import './App.css'
import { Flex, useColorModeValue } from '@chakra-ui/react';
import Terminal from './components/Terminal';
import { useToken } from '@chakra-ui/react';

/**
 * This is the main component of the application
 * 
 */
const App = () => {
  const [bgGradientLight, bgGradientDark] = useToken('colors.gradients', ['light', 'dark']);

  const bgGradient = useColorModeValue(bgGradientLight, bgGradientDark);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      bgGradient={bgGradient}
    >
      <Terminal />
    </Flex>
  );
};

export default App;

