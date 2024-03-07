import { extendTheme, ThemeConfig } from "@chakra-ui/react";

/** Custom colors */
const colors = {
    red: {
        medium: "#eb4034",
    },
    green: {
        medium: "#268703"
    },
    yellow: {
        medium: "#deb602"
    },
    gradients: {
        /** You can customize these */
        light: "radial-gradient(circle at 1rem 1rem, #b59a00 0%, #edd968 50%, #e89f20 100%)", // yellowish
        dark: "radial-gradient(circle at 1rem 1rem, #2f224d 0%, #0f134d 50%, #432685 100%)", // purpleish
      },
};


const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};


export const terminalTheme = extendTheme({ colors, config })