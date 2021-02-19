import { useContext } from "react"
import userContext from "./../../context/userContext"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Text,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react"
import Empty from "./../Utils/Empty"
import { FiExternalLink } from "react-icons/fi"
import TableSkeleton from "./../Utils/TableSkeleton"
import { GET } from "./../../utils/network"

const FormList = () => {
  const { user } = useContext(userContext)
  const tempdata = true
  const tableHeaderBg = useColorModeValue("gray.100", "gray.800")

  const { isLoading, error, data, isFetching } = useQuery(
    "formList",
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
  return (
    <Box
      boxShadow="base"
      borderRadius="10px"
      m="0 auto"
      mt="3rem"
      maxW={["auto", "95%", "80%"]}
      overflowX="auto"
    >
      {data ? (
        <Box>
          <Table size="md" variant="simple">
            <TableCaption>Forms created by Omkar</TableCaption>
            <Thead bg={tableHeaderBg}>
              <Tr>
                <Th>Forms</Th>
                <Th>Status</Th>
                <Th isNumeric>Submissions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.data?.user?.forms.map((form) => {
                return (
                  <Tr key={form._id}>
                    <Td>
                      <a
                        style={{ display: "flex" }}
                        href={"/dashboard/forms/" + form.formID}
                      >
                        {form.formName} &nbsp;
                        <span style={{ marginLeft: "0.3rem" }}>
                          <FiExternalLink />
                        </span>
                      </a>
                      <Text fontSize="sm" color="gray.500">
                        {form.email}
                      </Text>
                    </Td>
                    <Td>{form.disabled ? "Disabled" : "Active"}</Td>
                    <Td isNumeric>{form.submissions.length}</Td>
                  </Tr>
                )
              })}
              <Tr>
                <Td>
                  <Link style={{ display: "flex" }} to="/forms/23423/">
                    From Portfolio <FiExternalLink />
                  </Link>
                  <Text fontSize="sm" color="gray.500">
                    portfolio@example.com
                  </Text>
                </Td>
                <Td>Active</Td>
                <Td isNumeric>34</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Empty
          text="You don't have any forms you can see submissions of. Create a form by clicking the create form button above."
          status="empty"
        />
      )}
    </Box>
  )
}
export default FormList
