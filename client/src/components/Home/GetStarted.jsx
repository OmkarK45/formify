import { FaBolt } from "react-icons/fa"
import {
  Flex,
  Box,
  Text,
  Link,
  Button,
  Heading,
  Container,
} from "@chakra-ui/react"

const GetStarted = () => {
  return (
    <Flex>
      <Flex
        direction="column"
        maxW={["100%", "85%", "70%"]}
        margin="4rem auto"
        padding="2rem"
        color="white"
        bg="green.500"
        borderRadius={["0", "10px"]}
        boxShadow="base"
      >
        <Box color="white" fontSize="lg" padding="0" lineHeight="1.7">
          <Heading>Ready to Get Started ?</Heading>
          <Flex mt="1rem">
            <Text maxW={["100%", "90%", "60%"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quisquam quasi perspiciatis dolorem laborum voluptatum
              quis expedita fuga aspernatur deserunt?
            </Text>
          </Flex>
          <Button
            _hover={{ bg: "green.800" }}
            size="lg"
            mt="1rem"
            bg="green.700"
          >
            Get Started &nbsp; <FaBolt />
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default GetStarted
