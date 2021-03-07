import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react"

import { Login, Register } from "."

const Auth = () => {
  return (
    <>
      <Box
        borderRadius="10px"
        maxW={["90%", "75%", "75%", "50%", "30%"]}
        margin="0 auto"
        marginTop="3rem"
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
    </>
  )
}

export default Auth
