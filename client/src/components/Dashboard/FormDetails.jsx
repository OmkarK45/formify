import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react"
import DashboardHeader from "./DashboardHeader"
import Integrations from "./Integrations"
import Submissions from "./Submissions"

const FormDetails = () => {
  const tabBg = useColorModeValue("gray.50", "gray.900")
  const bg = useColorModeValue("gray.200", "gray.800")

  return (
    <>
      <DashboardHeader title="Form Name" />
      <Box bg={bg}>
        <Tabs variant="line">
          <TabList m="0 auto" maxW={["100%", "80%"]}>
            <Tab>Integration</Tab>
            <Tab>Submissions</Tab>
            <Tab>Settings</Tab>
            <Tab isDisabled>Plugins (Coming Soon)</Tab>
          </TabList>
          <TabPanels bg={tabBg}>
            <TabPanel maxW={["100%", "90%", "80%"]} m="0 auto">
              {/* Component here */}
              <Integrations />
            </TabPanel>
            <TabPanel maxW={["100%", "90%", "80%"]} m="0 auto">
              <Submissions />
            </TabPanel>
            <TabPanel maxW={["100%", "90%", "80%"]} m="0 auto">
              Settings
            </TabPanel>
            <TabPanel maxW={["100%", "90%", "80%"]} m="0 auto">
              Plugins
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}
export default FormDetails
