import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react"
import features from "./featuresDb"

export default function SimpleThreeColumns() {
  return (
    <Box m="0 auto" maxW={["100%", "80%", "70%"]} p={4}>
      <Heading>Features.</Heading>
      <SimpleGrid mt="2rem" columns={{ base: 1, md: 3 }} spacing={10}>
        {features.map((feature) => (
          <Stack key={feature.id}>
            <Flex
              bg={"green.500"}
              w={10}
              h={10}
              p={2}
              borderRadius={"50%"}
              align={"center"}
              justify={"center"}
              color={"white"}
              rounded={"md"}
              mb={1}
            >
              {feature.icon}
            </Flex>
            <Text fontWeight={600}>{feature.title}</Text>
            <Text color={"gray.600"}>{feature.description}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  )
}
