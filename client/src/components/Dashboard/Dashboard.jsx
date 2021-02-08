import { useContext } from "react"
import { Text, Box, Image, Flex, SimpleGrid, Heading } from "@chakra-ui/react"
import userContext from "./../../context/userContext"
import { Footer } from "./../Layout"
import bg from "./bg.svg"

const Dashboard = () => {
  const { user } = useContext(userContext)
  return (
    <Box maxW="100%">
      <Box
        style={{ backgroundImage: "url('./assets/bg.svg')" }}
        height="308px"
        bg="rgba(30, 58, 138)"
      >
        <Box pt="6rem" maxW="80%" m="0 auto">
          <Heading color="white">Hi There</Heading>
          <Box
            mt="2rem"
            borderRadius="10px"
            boxShadow="base"
            bg="white"
            minH="500px"
          ></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
