import { HStack, Box, useToken } from '@chakra-ui/react';

/**
 * @returns MacOS style window controls (red, yellow, green dots)
 * 
 */
const WindowControls = () => {

    /** Use the colors from the theme.ts */
    const [red, yellow, green] = useToken('colors', ['red.medium', 'yellow.medium', 'green.medium']);


    const Dot = ({ color }: { color: string }) => (
        <Box
            width={{ base: "12px", md: "15px" }}
            height={{ base: "12px", md: "15px" }}
            bgColor={color}
            borderRadius="full"
            marginEnd="2"
        />
    );

    
    return (
        <HStack spacing={1} padding="2">
            <Dot color={red} />
            <Dot color={yellow} />
            <Dot color={green} />
        </HStack>
    );
};

export default WindowControls;