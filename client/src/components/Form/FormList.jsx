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
import { formatDistance } from "date-fns/esm"
import format from "date-fns/format"
import { useContext } from "react"
import { FiExternalLink } from "react-icons/fi"
import { ImDrawer2 } from "react-icons/im"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

import userContext from "../../context/userContext"
import { GET } from "../../utils/network"
import Empty from "../Utils/Empty"
import TableSkeleton from "../Utils/TableSkeleton"

const FormList = () => {
  const { user } = useContext(userContext)
  const bg = useColorModeValue("gray.100", "gray.800")
  const { isLoading, error, data } = useQuery(
    "getList",
    async () =>
      await GET(
        process.env.REACT_APP_BACKEND + "/api/forms/" + user.username + "/all",
        {
          withCredentials: true,
        }
      )
  )

  if (isLoading) return <TableSkeleton />

  if (error) return <Empty text={error.message} status="error" />

  function getFormattedDate(date) {
    return format(new Date(date), "MMM dd, KK:mm aaa")
  }
  function getDuration(date) {
    return formatDistance(new Date(date), Date.now(), {
      includeSeconds: true,
      addSuffix: true,
    })
  }
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
            <Thead bg={bg}>
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
                    <Td>{getFormattedDate(form.createdAt)}</Td>
                    <Td>{getDuration(form.updatedAt)}</Td>
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
