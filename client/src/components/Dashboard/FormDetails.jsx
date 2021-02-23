import {
  Box,
  Tabs,
  TabList,
  Text,
  Tab,
  TabPanel,
  TabPanels,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import DashboardHeader from "./DashboardHeader"
import Integrations from "./Integrations"
import Submissions from "./Submissions"
import { GET } from "./../../utils/network"
import { useQuery } from "react-query"
import { useContext } from "react"
import userContext from "./../../context/userContext"
import TableSkeleton from "./../Utils/TableSkeleton"
import Empty from "./../Utils/Empty"
import { db } from "../../utils/MOCK_DATA"

const FormDetails = ({ location: { state } }) => {
  const tabBg = useColorModeValue("gray.50", "gray.900")
  const bg = useColorModeValue("gray.200", "gray.800")
  const { user } = useContext(userContext)
  let { formID } = useParams()
  const tabStyle = {
    maxW: ["100%", "100%", "80%"],
    m: "0 auto",
  }
  const { isLoading, error, data, isFetching } = useQuery(
    "formList",
    async () =>
      await GET(
        process.env.REACT_APP_BACKEND +
          "/api/forms/" +
          user.email +
          "/" +
          formID,
        {
          withCredentials: true,
        }
      )
  )

  if (isLoading) return <TableSkeleton />

  if (error) return <Empty text={error.message} status="error" />
  console.log(data)
  return (
    <>
      <DashboardHeader title={data?.data?.requestedForm.formName}>
        <Text>{data?.data?.requestedForm.submissions.length} Submissions</Text>
        <Flex>
          <Text fontWeight="600">Date Created : </Text>
          <Text>
            &nbsp;{new Date(data?.data?.requestedForm.createdAt).toDateString()}
          </Text>
        </Flex>
      </DashboardHeader>
      <Box bg={bg}>
        <Tabs defaultIndex={1} variant="line">
          <TabList m="0 auto" maxW={["100%", "100%", "80%"]}>
            <Tab>Integration</Tab>
            <Tab>Submissions</Tab>
            <Tab>Settings</Tab>
            <Tab isDisabled>Plugins (Coming Soon)</Tab>
          </TabList>
          <TabPanels bg={tabBg}>
            <TabPanel {...tabStyle}>
              <Integrations formID={formID} />
            </TabPanel>
            <TabPanel {...tabStyle}>
              <Submissions
                submissions={db}
                fields={data?.data?.requestedForm.fields}
              />
            </TabPanel>
            <TabPanel {...tabStyle}>Settings</TabPanel>
            <TabPanel {...tabStyle}>Plugins</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}
export default FormDetails
