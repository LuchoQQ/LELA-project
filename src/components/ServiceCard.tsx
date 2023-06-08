import { Flex, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { IconType } from 'react-icons'
type Props = {
    direction: string,
    icon: IconType
    title: string,
    description: string,
    last?: boolean
}
const ServiceCard: React.FC<Props> = ({ direction, icon, title, description, last }) => {
    return (
        <>
            <HStack spacing={100} ml='auto' mr='auto' >
                {direction === "left" && last !== true && (
                    <Image
                        src="/public/arrow.png"
                        w="100px"
                        transform="rotate(180deg)"
                        position='relative'
                        top='100px'

                    />
                )}
                <VStack
                    bg="#fff"
                    p="1rem"
                    shadow="lg"
                    fontFamily="primary"
                    rounded="10px"
                    border="1px dotted red"
                    w="700px"
                >
                    <Flex gap="1rem" justifyContent="start" w="100%">
                        <Icon as={icon} fontSize="4xl" />
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
                        fontFamily="primary"
                        fontWeight="regular"
                        fontSize="sm"
                        px="1rem"
                        textAlign="justify"
                    >
                        {description}
                    </Text>
                </VStack>
                {direction === "right" && last !== true && (
                    <Image
                        position='relative'
                        top='100px'
                        src="/public/arrow2.png"
                        w="100px"
                        transform="rotate(180deg)"
                    />
                )}
            </HStack>
        </>
    );
};

export default ServiceCard;
