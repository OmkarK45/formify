import { Box, Link, Button, Heading, Text } from "@chakra-ui/react";

const GetStarted = () => {
  return (
    <>
      <Box
        maxW={["100%", "100%", "80%"]}
        minH="200px"
        padding="2rem 2rem"
        margin="4rem auto"
        bgGradient="linear(to-l, other.gradientEnd, other.gradientStart)"
        color="white"
        borderRadius="15px"
        boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
      >
        <Heading>Ready to Get Started ?</Heading>
        <Text
          color="white"
          maxW={["95%", "85%", "80%"]}
          fontSize="lg"
          lineHeight="1.7"
          marginTop="0.7rem"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          quisquam quasi perspiciatis dolorem laborum voluptatum quis expedita
          fuga aspernatur deserunt?
        </Text>
      </Box>
    </>
  );
};

export default GetStarted;
