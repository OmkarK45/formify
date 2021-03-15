import {
  Box,
  Flex,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { useContext } from "react"
import { IoFileTrayFullOutline } from "react-icons/io5"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

import userContext from "../../context/userContext"
import { GET } from "../../utils/network"
import { DashboardHeader, Integrations, Submissions } from "../Dashboard"
import TableSkeleton from "../Utils/TableSkeleton"
import NotFound from "./../Utils/NotFound"
import FormSettings from "./FormSettings"

const FormDetails = ({ location: { state } }) => {
  const tabBg = useColorModeValue("gray.50", "gray.900")
  const bg = useColorModeValue("gray.200", "gray.800")
  const { user } = useContext(userContext)
  let { formID } = useParams()
  const tabStyle = {
    maxW: ["100%", "100%", "80%"],
    m: "0 auto",
  }
  const { isLoading, error, data: form } = useQuery("formList", async () => {
    const data = await GET(
      `${process.env.REACT_APP_BACKEND}/api/forms/${formID}`,
      {
        withCredentials: true,
      }
    )
    return data.data.requestedForm
  })

  if (isLoading) return <TableSkeleton />

  if (error) {
    return <NotFound />
  }

  return (
    <Box>
      <Box>
        <DashboardHeader title={form.formName}>
          <Text>Submissions : {form.submissions.length}</Text>
          <Flex>
            <Text fontWeight="600">Date Created : </Text>
            <Text>
              &nbsp;
              {new Date(form.createdAt).toDateString()}
            </Text>
          </Flex>
        </DashboardHeader>

        <Box bg={bg}>
          <Tabs defaultIndex={1} variant="line" isLazy>
            <TabList m="0 auto" maxW={["100%", "100%", "80%"]}>
              <Tab>Integration</Tab>
              <Tab>Submissions</Tab>
              <Tab>Settings</Tab>
            </TabList>
            <TabPanels bg={tabBg}>
              <TabPanel {...tabStyle}>
                <Integrations formID={formID} name={form.formName} />
              </TabPanel>
              <TabPanel {...tabStyle}>
                <Submissions form={form} />
              </TabPanel>
              <TabPanel {...tabStyle}>
                <FormSettings form={form} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  )
}
export default FormDetails
