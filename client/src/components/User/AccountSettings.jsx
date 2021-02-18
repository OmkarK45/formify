import DashboardHeader from "../Dashboard/DashboardHeader"
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  useColorModeValue,
} from "@chakra-ui/react"
import Profile from "./Profile"

export default function AccountSettings() {
  const tabBg = useColorModeValue("gray.50", "gray.900")
  const bg = useColorModeValue("gray.200", "gray.800")
  return (
    <>
      <DashboardHeader title="Your Account" />
      <Box bg={bg}>
        <Tabs variant="line">
          <TabList m="0 auto" maxW={["100%", "100%", "80%"]}>
            <Tab>Account</Tab>
          </TabList>
          <TabPanels bg={tabBg}>
            <TabPanel maxW={["100%", "100%", "80%"]} m="0 auto">
              <Profile />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}
