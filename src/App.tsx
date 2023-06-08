import {
    Flex,
    Text,
} from "@chakra-ui/react";
import IndexSection from "./components/sections/IndexSection";
import CustomersSection from "./components/sections/CustomersSection";
import Container from "./components/Container";
import ServiceCard from "./components/ServiceCard";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
function App() {
    const width = window.screen.width;
    return (
        <>
            <Flex flexDir="column" bg="#f9f9f9" alignItems="center">
                <Container>
                    <IndexSection />
                </Container>
                <Container>
                    <CustomersSection />
                </Container>
                    <Text fontSize='4xl' fontWeight='bold' fontFamily='primary'  color='primary' >Funcionalidades</Text>
                <Container>
                    <Flex
                        w={width - 100}
                        h="100%"
                        flexDir="column"
                        alignContent="center"
                        gap='8rem'
                        pt='5rem'
                    >
                        <ServiceCard
                            direction="left"
                            title="Respuestas a Preguntas Frecuentes"
                            icon={IoChatboxEllipsesOutline}
                            description='"La mayoría de los nuevos padres tienen preguntas
                        comunes sobre el cuidado del recién nacido: cuánto debe
                        dormir, qué significan diferentes tipos de llantos, cómo
                        cambiar pañales, entre otras. Un chatbot puede
                        proporcionar respuestas instantáneas a estas preguntas
                        en cualquier momento del día o de la noche."'
                        />
                        <ServiceCard
                            direction="right"
                            title="Respuestas a Preguntas Frecuentes"
                            icon={IoChatboxEllipsesOutline}
                            description='"La mayoría de los nuevos padres tienen preguntas
                        comunes sobre el cuidado del recién nacido: cuánto debe
                        dormir, qué significan diferentes tipos de llantos, cómo
                        cambiar pañales, entre otras. Un chatbot puede
                        proporcionar respuestas instantáneas a estas preguntas
                        en cualquier momento del día o de la noche."'
                        />
                        <ServiceCard
                            direction="left"
                            title="Respuestas a Preguntas Frecuentes"
                            icon={IoChatboxEllipsesOutline}
                            description='"La mayoría de los nuevos padres tienen preguntas
                        comunes sobre el cuidado del recién nacido: cuánto debe
                        dormir, qué significan diferentes tipos de llantos, cómo
                        cambiar pañales, entre otras. Un chatbot puede
                        proporcionar respuestas instantáneas a estas preguntas
                        en cualquier momento del día o de la noche."'
                        />
                        <ServiceCard
                            direction="right"
                            last={true}
                            title="Respuestas a Preguntas Frecuentes"
                            icon={IoChatboxEllipsesOutline}
                            description='"La mayoría de los nuevos padres tienen preguntas
                        comunes sobre el cuidado del recién nacido: cuánto debe
                        dormir, qué significan diferentes tipos de llantos, cómo
                        cambiar pañales, entre otras. Un chatbot puede
                        proporcionar respuestas instantáneas a estas preguntas
                        en cualquier momento del día o de la noche."'
                        />
                    </Flex>
                </Container>
                <Container>
                    <Flex h='100vh'></Flex>
                </Container>
            </Flex>
        </>
    );
}

export default App;
