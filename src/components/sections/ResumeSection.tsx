import { Flex, Image, Text, HStack, VStack } from "@chakra-ui/react";
import React from "react";

const ResumeSection: React.FC = () => {
    return (
        <>
            <Flex flexDir="column" >
                <Flex
                    alignItems="center"
                    py="2rem"
                    position="relative"
                    gap="5rem"
                    justifyContent="center"
                    w="100%"
                    flexDir={['column', 'column', 'row', 'row', 'row']}
                >
                    <VStack
                        w="350px"
                        textAlign={['center', 'center', 'unset', 'unset', 'unset']}
                        fontSize="xl"
                        fontFamily="tertiary"
                        spacing={10}
                    >
                        <Text>
                            Proporciona una{" "}
                            <span style={{ fontWeight: "bold" }}>
                                experiencia conversacional fluida
                            </span>{" "}
                            y se adapta a la forma en que las personas se
                            comunican actualmente.
                        </Text>
                        <Text>
                            LELA{" "}
                            <span style={{ fontWeight: "bold" }}>
                                mejora la experiencia de los padres al ofrecer
                                apoyo confiable y personalizado{" "}
                            </span>{" "}
                            en la crianza de sus hijos.
                        </Text>
                    </VStack>
                    <Image src="/public/mobile2.png" w="400px" />
                </Flex>
            </Flex>
        </>
    );
};

export default ResumeSection;
