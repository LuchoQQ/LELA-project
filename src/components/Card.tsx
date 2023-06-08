import { Box, Divider, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {
    title: string,
    image: string,
    text: string
}
const Card: React.FC<Props> = ({ title, image, text }) => {
    return (
        <VStack w="300px" maxH='4500px' p='2rem' shadow='lg' bg='#fff' rounded='10px'>
            <Box  w="200px" h="200px">
                <Image src={image} w='200px' h='200px'/>
            </Box>
            <Divider />
            <Text fontSize="2xl" textAlign="center" color="primary" h='80px' alignSelf='center'>
                {title}
            </Text>
            <Text mt="1rem" fontSize="sm" color="secondary" >
                {text}
            </Text>
        </VStack>
    );
};

export default Card;
