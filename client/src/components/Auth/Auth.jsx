import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react"

import { Login, Register } from "."
import Callout from "../Utils/Callout"

const Auth = () => {
  return (
    <Box maxW={["90%", "75%", "75%", "50%", "30%"]} margin="0 auto">
      <Box mt="0.4rem">
        <Callout />
      </Box>
      <Box
        borderRadius="10px"
        mt="0.8rem"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={useColorModeValue("base", "none")}
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px="2rem">
              <Login />
            </TabPanel>
            <TabPanel px="2rem">
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default Auth
