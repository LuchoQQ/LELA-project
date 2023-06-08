import { Box, Flex, Grid, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { IoLogoWhatsapp } from "react-icons/io";
import React from "react";

const IndexSection: React.FC = () => {
    return (
        <>
            <Flex flexDir="column" justifyContent="center" gap="2rem" w="350px" h='700px'>
                <Text fontSize="3xl" fontFamily="primary" color="primary">
                    LELA®
                </Text>
                <Box
                    fontFamily="primary"
                    fontSize="5xl"
                    fontWeight="bold"
                    color="primary"
                    position="relative"
                >
                    <Text whiteSpace="nowrap">Tu abuela virtual siempre</Text>
                    <Text whiteSpace="nowrap">para ayudarte</Text>
                </Box>
                <Box w="500px" fontFamily="primary" fontSize="md">
                    <Text textAlign="justify" color="secondary">
                        LELA es un chatbot de IA que proporciona apoyo a los
                        padres a través de WhatsApp. LELA ofrece consejos
                        prácticos y está disponible en todo momento para ayudar
                        a los padres en su viaje de crianza.
                    </Text>
                </Box>
                
                    <HStack>
                        <Flex
                            px="2rem"
                            py=".5rem"
                            rounded="30px"
                            border={`1px solid green`}
                            color="#fff"
                            gap=".5rem"
                        >
                            <Icon
                                as={IoLogoWhatsapp}
                                alignSelf="center"
                                fill="green"
                            />
                            <Text fontFamily="primary" color="secondary">
                                Ir al whatsapp
                            </Text>
                        </Flex>
                    </HStack>
            </Flex>
            <Grid w="400px" h="100%">
                <Image src="public/vieja.png" alignSelf="center" />
            </Grid>
        </>
    );
};

export default IndexSection;
