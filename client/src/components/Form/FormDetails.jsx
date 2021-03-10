import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { useContext } from "react"
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
  console.log(formID)
  const { isLoading, error, data } = useQuery(
    "formList",
    async () =>
      await GET(`${process.env.REACT_APP_BACKEND}/api/forms/${formID}`, {
        withCredentials: true,
      })
  )

  if (isLoading) return <TableSkeleton />

  if (error) {
    return <NotFound />
  }

  return (
    <Box>
      <Box>
        <DashboardHeader title={data.data.requestedForm.formName}>
          <Text>{data.data.requestedForm.submissions.length} Submissions</Text>
          <Flex>
            <Text fontWeight="600">Date Created : </Text>
            <Text>
              &nbsp;
              {new Date(data.data.requestedForm.createdAt).toDateString()}
            </Text>
          </Flex>
        </DashboardHeader>

        <Box bg={bg}>
          <Tabs defaultIndex={1} variant="line">
            <TabList m="0 auto" maxW={["100%", "100%", "80%"]}>
              <Tab>Integration</Tab>
              <Tab>Submissions</Tab>
              <Tab>Settings</Tab>
            </TabList>
            <TabPanels bg={tabBg}>
              <TabPanel {...tabStyle}>
                <Integrations formID={formID} />
              </TabPanel>
              <TabPanel {...tabStyle}>
                <Submissions
                  submissions={data.data.requestedForm.submissions}
                  fields={data.data.requestedForm.fields}
                />
              </TabPanel>
              <TabPanel {...tabStyle}>
                <FormSettings form={data.data.requestedForm} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  )
}
export default FormDetails
