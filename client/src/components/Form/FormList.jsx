import {
  Box,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react"
import format from "date-fns/format"
import { useContext } from "react"
import { FiExternalLink } from "react-icons/fi"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

import userContext from "../../context/userContext"
import { GET } from "../../utils/network"
import Empty from "../Utils/Empty"
import TableSkeleton from "../Utils/TableSkeleton"
import { ImDrawer2 } from "react-icons/im"

const FormList = () => {
  const { user } = useContext(userContext)
  const tableHeaderBg = useColorModeValue("gray.100", "gray.800")

  const { isLoading, error, data, isFetching } = useQuery(
    "getList",
    async () =>
      await GET(
        process.env.REACT_APP_BACKEND + "/api/forms/" + user.email + "/all",
        {
          withCredentials: true,
        }
      )
  )

  if (isLoading) return <TableSkeleton />

  if (error) return <Empty text={error.message} status="error" />
  function getCreatedAtDate(date) {
    return format(new Date(date), "MMM dd, KK:mm aaa")
  }
  function getUpdatedAtDate(date) {
    return format(new Date(date), "MMM dd, KK:mm aaa")
  }
  console.log(data?.data?.user?.forms)
  return (
    <Box
      boxShadow="base"
      borderRadius="10px"
      m="0 auto"
      mt="3rem"
      maxW={["auto", "95%", "80%"]}
      overflowX="auto"
    >
      <Box>
        {data?.data?.user?.forms.length > 0 ? (
          <Table size="md" variant="simple">
            <TableCaption>Forms created by {user?.username}</TableCaption>
            <Thead bg={tableHeaderBg}>
              <Tr>
                <Th>Forms</Th>
                <Th>Date Created</Th>
                <Th>Last Submission</Th>
                <Th>Status</Th>
                <Th isNumeric>Submissions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.data?.user?.forms.map((form) => {
                return (
                  <Tr key={form._id}>
                    <Td>
                      <Link to={"/dashboard/forms/" + form.formID}>
                        {form.formName} &nbsp;
                        <Box d="inline-flex">
                          <FiExternalLink />
                        </Box>
                      </Link>
                      <Text fontSize="sm" color="gray.500">
                        {form.email}
                      </Text>
                    </Td>
                    <Td>{getCreatedAtDate(form.createdAt)}</Td>
                    <Td>{getUpdatedAtDate(form.updatedAt)}</Td>
                    <Td>{form.disabled ? "Disabled" : "Active"}</Td>
                    <Td isNumeric>{form.submissions.length}</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        ) : (
          <Empty
            text="You don't have any forms you can see submissions of. Create a form by clicking the create form button above."
            icon={ImDrawer2}
          />
        )}
      </Box>
    </Box>
  )
}
export default FormList
