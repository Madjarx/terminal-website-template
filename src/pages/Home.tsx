import { Title } from "../components";
import { Box } from "@chakra-ui/react";

const Home = () => {
    return (
        <div>
            <Box padding={5}>
                <Title text="Home" size="large" underlined={true} />
            </Box>
            <p>
                Welcome to the Home Page
            </p>
        </div>
    );
}

export default Home;