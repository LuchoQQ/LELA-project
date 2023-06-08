import {Flex, Text } from "@chakra-ui/react";
import Card from '../Card'
import React from "react";

const CustomersSection: React.FC = () => {
    return (
        <>
            <Flex flexDir="column" w='100%' h='100%' pb='5rem'>
                 <Text
                    fontSize="4xl"
                    color="primary"
                    fontWeight="bold"
                    textAlign="center"
                >
                    Dirigido a
                </Text>
                
                <Flex
                    justifyContent="center"
                    fontFamily="primary"
                    alignItems="center"
                    gap="5rem"
                    h="600px"
                >
                    <Card
                        title="Padres y Madres"
                        image="/public/card1.svg"
                        text="Son los usuarios principales de
LELA. Estos individuos ocupados desean contar con una
fuente confiable de consejos,
recordatorios, apoyo y orientación sobre crianza en cualquier
momento y lugar"
                    />
                    <Card
                        title="Padres y Madres primerizos:"
                        image="/public/card2.svg"
                        text="Son los usuarios principales de
LELA. Estos individuos ocupados desean contar con una
fuente confiable de consejos,
recordatorios,  orientación sobre crianza en cualquier
momento y lugar"
                    />
                    <Card
                        title="Profesionales de la Salud"
                        image="/public/card3.svg"
                        text="Si bien LELA no pretende reemplazar a los profesionales de la salud, puede complementar sus servicios al proporcionar información básica y respuestas
a preguntas frecuentes"
                    />
                </Flex> 
            </Flex>
        </>
    );
};

export default CustomersSection;
