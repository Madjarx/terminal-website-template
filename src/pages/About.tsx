import { Title } from "../components";
import { Box } from "@chakra-ui/react";

const About = () => {
    return (
        <div>
            <Box padding={5}>
                <Title text="About" size="large" underlined={true} />
            </Box>
            <p>
                Sample About page
            </p>
        </div>
    );
}

export default About;