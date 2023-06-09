import { Flex, Text } from "@chakra-ui/react";
import Card from "../Card";
import React from "react";

const CustomersSection: React.FC = () => {
    return (
        <>
            <Flex flexDir="column" w="100%" h="100%" py="5rem">
                <Text
                    fontSize="4xl"
                    color="primary"
                    fontWeight="bold"
                    textAlign="center"
                    mb="3rem"
                >
                    Dirigido a
                </Text>

                <Flex
                    justifyContent="center"
                    fontFamily="primary"
                    alignItems="center"
                    gap="5rem"
                    wrap="wrap"
                >
                    <Card
                        title="Padres y Madres"
                        image="/assets/card1.svg"
                        text="Son los usuarios principales de
LELA. Estos individuos ocupados desean contar con una
fuente confiable de consejos,
recordatorios, apoyo y orientación sobre crianza en cualquier
momento y lugar"
                    />
                    <Card
                        title="Padres y Madres primerizos:"
                        image="/assets/card2.svg"
                        text="LELA brinda información y consejos personalizados para ayudar a un grupo que enfrenta desafíos únicos y se siente inseguro al tomar decisiones sobre crianza."
                    />
                    <Card
                        title="Profesionales de la Salud"
                        image="/assets/card3.svg"
                        text="Si bien LELA no pretende reemplazar a los profesionales de la salud, puede complementar sus servicios al proporcionar información básica y respuestas
a preguntas frecuentes"
                    />
                    <Card
                        title="Niñeras y Cuidadores"
                        image="/assets/niñera.svg"
                        text="Este segmento incluye a las personas que cuidan y tienen la responsabilidad de atender a niños y niñas. LELA puede brindarles información y apoyo en su rol de cuidadores"
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default CustomersSection;
