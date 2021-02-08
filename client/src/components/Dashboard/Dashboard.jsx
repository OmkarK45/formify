import { useContext } from "react"
import {
  Text,
  Box,
  Container,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react"
import userContext from "./../../context/userContext"

const Dashboard = () => {
  const { user } = useContext(userContext)
  return (
    <Box maxW="100%">
      <Box
        marginTop={["6rem", "6rem", "6.5rem", "4.5rem"]}
        minH="150px"
        width="100%"
        pt="2rem"
      >
        <Box textAlign={["center", "left"]} margin="0.5rem auto" maxW="80%">
          <Box>
            <Heading color="white" letterSpacing="-0.5px">
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
