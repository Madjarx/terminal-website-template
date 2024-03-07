// Title.tsx
import { Text, useColorModeValue } from '@chakra-ui/react';

interface TitleProps {
  text: string;
  underlined: boolean
  size: 'small' | 'medium' | 'large';
}

const Title: React.FC<TitleProps> = ({ text, size, underlined }) => {
  const textColor = useColorModeValue('gray.800', 'gray.200');

  const fontSize = {
    small: 'xl',
    medium: '2xl',
    large: '3xl',
  }[size];

  return (
    <Text
      fontSize={fontSize}
      fontWeight="bold"
      color={textColor}
      textAlign="center"
      // mb={4}
      textDecoration={underlined ? 'underline' : 'none'}
    >
      {text}
    </Text>
  );
};

export default Title;
