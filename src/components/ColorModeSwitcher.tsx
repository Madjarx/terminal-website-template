import { Button, useColorMode } from '@chakra-ui/react';

/**
 * This is a "Dark/Light mode" switcher 
 * 
 */ 
const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Switch to {colorMode === "light" ? "dark" : "light"} mode
    </Button>
  );
};

export default ColorModeSwitcher;