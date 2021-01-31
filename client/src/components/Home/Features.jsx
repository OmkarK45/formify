import { Box, SimpleGrid, Grid, Heading, Text } from "@chakra-ui/react";
import features from "./featuresDb";

const Features = () => {
  return (
    <>
      <Box margin="3rem auto" maxW={["90%", "80%", "75%"]}>
        <Heading fontSize={["3xl", "4xl", "5xl"]}>Features.</Heading>
        <Text fontSize="xl" color="text.body" marginTop="0.5rem">
          Here's why formify is best!
        </Text>
      </Box>
      <Box maxW={["90%", "80%", "75%"]} margin="0 auto">
        <Grid
          templateColumns={["1", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={6}
        >
          {features.map(({ icon, title, description }) => (
            <Box w="100%" key={title}>
              <Box>
                <Box>{icon}</Box>
              </Box>
              <Heading marginTop="0.7rem" fontSize="2xl">
                {title}
              </Heading>
              <Text marginTop="0.7rem" color="text.body" maxW="80%">
                {description}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Features;
