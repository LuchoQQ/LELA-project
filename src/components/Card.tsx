import { Box, Divider, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {
    title: string,
    image: string,
    text: string
}
const Card: React.FC<Props> = ({ title, image, text }) => {
    return (
        <VStack w="250px"  px='1rem' py='1rem' boxShadow='0px 0px 10px 10px #dedede' bg='#fff' rounded='10px'>
            <Box  w="150px" h="150px">
                <Image src={image} w='150px' h='150px'/>
            </Box>
            <Divider />
            <Text fontSize="2xl" textAlign="center" color="primary" h='80px' alignSelf='center' fontFamily='primary'>
                {title}
            </Text>
            <Text fontSize="sm" color="secondary" fontFamily='tertiary' fontWeight='bold'>
                {text}
            </Text>
        </VStack>
    );
};

export default Card;
