import { Title } from "../components";
import { Box } from "@chakra-ui/react";

const Links = () => {
    return (
        <div>
            <Box padding={5}>
                <Title text="Links" size="large" underlined={true} />
            </Box>
            <p>
                Welcome to the Links Page
            </p>
        </div>
    );
}

export default Links;