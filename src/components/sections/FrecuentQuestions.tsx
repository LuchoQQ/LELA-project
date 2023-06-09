import React from "react";
import ServiceCard from "../ServiceCard";
import { Flex } from "@chakra-ui/react";

const FrecuentQuestions: React.FC = () => {
    const width = window.screen.width;

    return (
        <>
            <Flex
                w={width - 100}
                h="100%"
                flexDir="column"
                alignContent={["center"]}
                gap="4rem"
                pb="5rem"
                pt='2rem'
                bg="#fff"
            >
                <ServiceCard
                    direction="left"
                    title="Respuestas a Preguntas Frecuentes"
                    path="/icons/faq.png"
                    description="La mayoría de los nuevos padres tienen preguntas comunes sobre el cuidado
del recién nacido: cuánto debe dormir, qué significan diferentes tipos de llantos,
cómo cambiar pañales, entre otras. Un chatbot puede proporcionar respuestas
instantáneas a estas preguntas en cualquier momento del día o de la noche."
                />
                <ServiceCard
                    direction="right"
                    title="Programación y Recordatorios:"
                    path="/icons/alarm.png"
                    description="Los nuevos padres tienen que recordar una gran cantidad de información,
                    como los horarios de alimentación, cuándo el bebé necesita ser cambiado,
                    etc. Un chatbot puede ayudar a llevar un registro de todo esto y enviar recordatorios cuando sea necesario."
                />
                <ServiceCard
                    direction="left"
                    title="Apoyo Emocional:"
                    path="/icons/trust.png"
                    description="Ser padre por primera vez puede ser emocionalmente desafiante. Un
                    chatbot puede proporcionar mensajes de apoyo y aliento, así como sugerir técnicas de relajación y manejo del estrés."
                />
                <ServiceCard
                    direction="right"
                    title="Conexión con Expertos: "
                    path="/icons/doctor.png"
                    description="La mayoría de los nuevos padres tienen preguntas
                        comunes sobre el cuidado del recién nacido: cuánto debe
                        dormir, qué significan diferentes tipos de llantos, cómo
                        cambiar pañales, entre otras. Un chatbot puede
                        proporcionar respuestas instantáneas a estas preguntas
                        en cualquier momento del día o de la noche."
                />
                <ServiceCard
                    direction="left"
                    title="Educación"
                    path="/icons/education.png"
                    description="El chatbot puede proporcionar información diaria o semanal sobre el desarrollo del
                    bebé y qué esperar en las próximas etapas."
                />
                <ServiceCard
                    direction="right"
                    title="Recomendaciones Personalizadas:"
                    path="/icons/like.png"
                    description="Basado en las interacciones pasadas y la información que los padres proporcionan sobre su bebé, el chatbot puede proporcionar recomendaciones personalizadas para resolver problemas específicos"
                />
                <ServiceCard
                    direction="left"
                    last={true}
                    title="Reserva de servicios: "
                    path="/icons/calendar.png"
                    description="Para facilitar aún más las tareas, el chatbot podría asistir en la reserva de servicios relacionados con el cuidado del niño, como citas con pediatras, contratación de cuidadores, etc. "
                />
            </Flex>
        </>
    );
};

export default FrecuentQuestions;
