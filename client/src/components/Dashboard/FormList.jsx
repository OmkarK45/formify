import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const FormList = () => {
  return (
    <Box
      boxShadow="base"
      borderRadius="10px"
      m="0 auto"
      mt="3rem"
      maxW={["auto", "95%", "80%"]}
      overflowX="auto"
    >
      <Table size="md" variant="simple">
        {/* This is gonna be dynamic */}
        <TableCaption>Forms created by Omkar</TableCaption>
        <Thead>
          <Tr>
            <Th>Forms</Th>
            <Th>Status</Th>
            <Th isNumeric>Submissions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Link to="/forms/23423/">From Portfolio</Link>
            </Td>
            <Td>Active</Td>
            <Td isNumeric>34</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}
export default FormList
