import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
type Props = {
    direction: string,
    path: string,
    title: string,
    description: string,
    last?: boolean
}
const ServiceCard: React.FC<Props> = ({ direction, path, title, description, last }) => {
    return (
        <>
            <HStack spacing={[0, 0, 0, 10, 10]} ml='auto' mr='auto' >
                {direction === "left" && last !== true && (
                    <Image
                        src="/assets/arrow.png"
                        w="60px"
                        transform="rotate(180deg)"
                        position='relative'
                        top='40px'

                    />
                )}
                <VStack
                    bg="#fff"
                    p="1rem"
                    shadow="lg"
                    fontFamily="primary"
                    rounded="10px"
                    border="1px dotted red"
                    w={['300px', '350px', '350px', '700px']}
                >
                    <Flex gap="1rem" justifyContent="start" w="100%">
                        <Image src={path} fontSize="4xl" />
                        <Text
                            fontFamily="primary"
                            fontWeight="bold"
                            alignSelf="center"
                            fontSize="xl"
                            position='relative'
                        >
                            {title}
                        </Text>
                    </Flex>
                    <Text
                        fontFamily="tertiary"
                        fontWeight='bold'
                        fontSize="sm"
                        px="1rem"
                        textAlign="justify"
                    >
                        {description}
                    </Text>
                </VStack>
                {direction === "right" && last !== true && (
                    <Image
                        src="/assets/arrow2.png"
                        w="60px"
                        transform="rotate(180deg)"
                        position='relative'
                        top='40px'

                    />
                )}
            </HStack>
        </>
    );
};

export default ServiceCard;
