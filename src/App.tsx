import { Flex, Text } from "@chakra-ui/react";
import IndexSection from "./components/sections/IndexSection";
import CustomersSection from "./components/sections/CustomersSection";
import Container from "./components/Container";
import FrecuentQuestions from "./components/sections/FrecuentQuestions";
import ResumeSection from "./components/sections/ResumeSection";
function App() {
    return (
        <>
            <Flex flexDir="column" bg="#fff" alignItems="center">
                <Container>
                    <IndexSection />
                </Container>
                <Container>
                    <CustomersSection />
                </Container>
                <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    fontFamily="primary"
                    color="primary"
                >
                    Funcionalidades
                </Text>
                <Container>
                    <FrecuentQuestions />
                </Container>
                <Container>
                    <ResumeSection />
                </Container>
                <Flex>
                    {/* <Image src="/perfil.png" w="250px" />
                        <HStack mr="auto" fontSize="4xl" spacing={10}>
                            <Icon as={BsLinkedin} fill="#2B0ADD" cursor='pointer' />
                            <Icon as={AiOutlineGlobal} fill="#2B0ADD" cursor='pointer' />
                            <Icon as={AiOutlineMail} fill="#2B0ADD" cursor='pointer' />
                        </HStack> */}
                </Flex>
            </Flex>
        </>
    );
}

export default App;
