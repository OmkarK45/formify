import { Text, Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import AddNewCard from "../Layout/AddNewCard";
import Card from "./../Layout/Card";
// @TODO - Create nice heading on top
const Dashboard = () => {
  return (
    <Box maxW="100%">
      <Box width="100%">
        <Container maxW="80%">
          <Box
            // border="2px solid black"
            marginTop={["6rem", "6rem", "6.5rem", "6.5rem"]}
          >
            <Text fontSize="2xl">Your Forms</Text>
            {/* Main Container for cards */}
          </Box>
        </Container>
      </Box>
      <Container paddingX={["0.3rem", "1rem"]} marginTop="2rem" maxW="80%">
        <AddNewCard />
        <SimpleGrid minChildWidth="250px" spacing="30px"></SimpleGrid>
      </Container>
    </Box>
  );
};

export default Dashboard;
