import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "@fontsource/inter/900.css"
import "@fontsource/asap/800.css";
import "@fontsource/roboto"
const theme = extendTheme({
    colors: {
        primary: '#9A2903',
        secondary: '#5D5D5C'
    },
    fonts: {
        primary: 'Inter',
        secondary: "Asap",
        tertiary: 'Roboto'
    }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
