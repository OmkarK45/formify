import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  useColorModeValue,
} from "@chakra-ui/react"
const FormDetails = () => {
  const tabBg = useColorModeValue("gray.50", "gray.900")

  return (
    <>
      <Box bg={bg}>
        <Tabs variant="line">
          <TabList m="0 auto" maxW="80%">
            <Tab>Your Forms</Tab>
            <Tab>Form Settings</Tab>
          </TabList>
          <TabPanels bg={tabBg}>
            <TabPanel maxW="80%" m="0 auto">
              {/* Component here */}
              One
            </TabPanel>
            <TabPanel maxW="80%" m="0 auto">
              Two
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}
export default FormDetails
