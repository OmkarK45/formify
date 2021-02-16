import {
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  useColorMode,
} from "@chakra-ui/react"
import { Register } from "./index"
import Login from "./Login"
import Footer from "./../Layout/Footer"

const Auth = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Box
        borderRadius="10px"
        maxW={["90%", "75%", "75%", "50%","30%"]}
        margin="0 auto"
        marginTop="3rem"
        bg={colorMode === "dark" ? "gray.800" : "white"}
        boxShadow={colorMode === "dark" ? "none" : "base"}
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
    </>
  )
}

export default Auth
