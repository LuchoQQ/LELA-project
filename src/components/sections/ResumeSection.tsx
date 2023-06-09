import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ResumeSection: React.FC = () => {
    return (
        <>
            <Flex flexDir="column" pb='4rem'>
                <Flex
                    alignItems="center"
                    py="2rem"
                    position="relative"
                    gap="5rem"
                    justifyContent="center"
                    w="100%"
                    flexDir={["column", "column", "row", "row", "row"]}
                >
                    <VStack
                        w="350px"
                        textAlign={[
                            "center",
                            "center",
                            "unset",
                            "unset",
                            "unset",
                        ]}
                        fontSize="xl"
                        fontFamily="tertiary"
                        spacing={10}
                    >
                        <Flex gap="4rem">
                            <Image
                                src="/assets/bot.png"
                                w="200px"
                                h="auto"
                                fit="contain"
                            />
                            <Text textAlign='initial'>
                                Proporciona una{" "}
                                <span style={{ fontWeight: "bold" }}>
                                    experiencia conversacional fluida
                                </span>{" "}
                                y se adapta a la forma en que las personas se
                                comunican actualmente.
                            </Text>
                        </Flex>
                        <Flex gap='2.6rem'>
                            <Image src='/assets/niñera.svg' w='70px' h='auto' fit='contain' />
                            <Text textAlign='initial'>
                                LELA{" "}
                                <span style={{ fontWeight: "bold" }}>
                                    mejora la experiencia de los padres al
                                    ofrecer apoyo confiable y personalizado{" "}
                                </span>{" "}
                                en la crianza de sus hijos.
                            </Text>
                        </Flex>
                    </VStack>

                    <Image src="/assets/mobile2.png" w="400px" />
                </Flex>
            </Flex>
        </>
    );
};

export default ResumeSection;
