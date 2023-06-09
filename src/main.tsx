import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "@fontsource/inter"
import "@fontsource/asap/800.css";
import "@fontsource/roboto/700.css"
const theme = extendTheme({
    colors: {
        primary: '#9A2903',
        secondary: '#5D5D5C'
    },
    fonts: {
        primary: 'Roboto',
        secondary: "Asap",
        tertiary: 'Inter'
    }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
