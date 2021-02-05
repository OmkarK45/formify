import {
  Text,
  Box,
  Container,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import AddNewCard from "../Layout/AddNewCard";
import Card from "./../Layout/Card";
const Dashboard = () => {
  return (
    <Box maxW="100%">
      <Box
        marginTop={["6rem", "6rem", "6.5rem", "4.5rem"]}
        minH="140px"
        width="100%"
        pt="2rem"
        backgroundImage="url('./download.png')"
      >
        <Container maxW="80%">
          <Box>
            <Heading color="white" letterSpacing="-0.5px">
              Your Forms
            </Heading>
          </Box>
        </Container>
      </Box>
      <Container
        paddingX={["0.3rem", "1rem"]}
        boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
        padding="2rem 0"
        bg="white"
        borderRadius="10px"
        marginTop="-2rem"
        maxW={["98%", "90%", "80%"]}
      >
        <AddNewCard />
        <SimpleGrid minChildWidth="250px" spacing="30px"></SimpleGrid>
      </Container>
    </Box>
  );
};

export default Dashboard;
