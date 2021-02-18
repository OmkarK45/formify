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
  useColorModeValue,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Empty from "./../Utils/Empty"
import { FiExternalLink } from "react-icons/fi"
const FormList = () => {
  const data = true
  const tableHeaderBg = useColorModeValue("gray.100", "gray.700")
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
              <Tr>
                <Td>
                  <Link style={{ display: "flex" }} to="/forms/23423/">
                    From Contacts <FiExternalLink />
                  </Link>
                  <Text fontSize="sm" color="gray.500">
                    portfolio@example.com
                  </Text>
                </Td>
                <Td>Active</Td>
                <Td isNumeric>10</Td>
              </Tr>
              <Tr>
                <Td>
                  <Link style={{ display: "flex" }} to="/forms/23423/">
                    Twitter Survey <FiExternalLink />
                  </Link>
                  <Text fontSize="sm" color="gray.500">
                    portfolio@example.com
                  </Text>
                </Td>
                <Td>Active</Td>
                <Td isNumeric>12</Td>
              </Tr>
              <Tr>
                <Td>
                  <Link style={{ display: "flex" }} to="/forms/23423/">
                    Email Marketing Survey <FiExternalLink />
                  </Link>
                  <Text fontSize="sm" color="gray.500">
                    portfolio@example.com
                  </Text>
                </Td>
                <Td>Disabled</Td>
                <Td isNumeric>23</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Empty text="You don't have any forms you can see submissions of. Create a form by clicking the create form button above." />
      )}
    </Box>
  )
}
export default FormList
