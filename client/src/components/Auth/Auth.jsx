import {
  Box,
  Heading,
  Text,
  Input,
  Label,
  Form,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  return (
    <>
      <Box
        border="1px solid #eee"
        borderRadius="10px"
        maxW={["90%", "75%", "65%", "30%"]}
        margin="0 auto"
        marginTop="10rem"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Auth;
