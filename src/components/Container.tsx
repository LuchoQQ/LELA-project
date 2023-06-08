import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
    children: React.ReactNode; //👈 children prop typr
  };
const Container: React.FC<Props> = ({children}) => {
    const screenY = window.screen.height;

    return (
        <>
            <Flex
                position="relative"
                justifyContent="center"
                gap="18rem"
                maxW="1600px"
            >
                {children}
            </Flex>
        </>
    );
};

export default Container;
