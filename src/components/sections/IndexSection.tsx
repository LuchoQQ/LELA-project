import {
    Flex,
    HStack,
    Icon,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { IoLogoWhatsapp } from "react-icons/io";
import React from "react";

const IndexSection: React.FC = () => {
    return (
        <>
            <Flex
                flexDir={["column", "column", "column", "row", "row"]}
                gap="5rem"
                justifyItems="center"
                py='2rem'
            >
                <VStack my="auto" spacing={10}>
                    <Flex
                        w="100%"
                        fontFamily="secondary"
                        color="primary"
                        mr="auto"
                        justifyContent={["center", "center", "unset", "unset"]}
                    >
                        <Text fontSize="8xl">Lela</Text>
                        <Text fontSize="4xl">®</Text>
                    </Flex>
                    <Flex
                        flexDir="column"
                        w="100%"
                        fontFamily="primary"
                        fontWeight="bold"
                        color="primary"
                        fontSize="3xl"
                        position="relative"
                        textAlign={["center", "center", "unset", "unset"]}
                    >
                        <Text
                            whiteSpace={[
                                "nowrap",
                                "nowrap",
                                "normal",
                                "normal",
                            ]}
                        >
                            Tu abuela virtual siempre
                        </Text>
                        <Text whiteSpace="nowrap">para ayudarte</Text>
                    </Flex>
                    <Text
                        color="secondary"
                        fontFamily="tertiary"
                        fontWeight="bold"
                        mr="auto"
                        maxW="500px"
                        px="1rem"
                        textAlign={["center", "center", 'unset', 'unset']}
                    >
                        LELA es un chatbot de IA que proporciona apoyo a los
                        padres a través de WhatsApp. LELA ofrece consejos
                        prácticos y está disponible en todo momento para ayudar
                        a los padres en su viaje de crianza.
                    </Text>

                    <HStack mr="auto">
                        <Flex
                            px="2rem"
                            py=".5rem"
                            rounded="30px"
                            border={`1px solid green`}
                            color="#fff"
                            gap=".5rem"
                            transition="all .2s ease"
                            role="group"
                            _hover={{ bg: "green" }}
                        >
                            <Icon
                                as={IoLogoWhatsapp}
                                alignSelf="center"
                                fill="green"
                                fontSize="3xl"
                                _groupHover={{ fill: "#fff" }}
                            />
                            <Text
                                fontFamily="tertiary"
                                fontWeight="bold"
                                color="secondary"
                                alignSelf="center"
                                _groupHover={{ color: "#fff" }}
                            >
                                Ir al whatsapp
                            </Text>
                        </Flex>
                    </HStack>
                </VStack>
                <Image src="/assets/vieja.png" alignSelf="center" w="350px" />
            </Flex>
        </>
    );
};

export default IndexSection;
