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
const FormList = () => {
  return (
    <Box boxShadow="base" borderRadius="10px" m="0 auto" mt="3rem" maxW="80%">
      <Table size="md" variant="simple">
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
            <Td>From Portfolio</Td>
            <Td>Active</Td>
            <Td isNumeric>34</Td>
          </Tr>
          <Tr>
            <Td>From Marketing Page</Td>
            <Td>Disabled</Td>
            <Td isNumeric>12</Td>
          </Tr>
          <Tr>
            <Td>From School Survey</Td>
            <Td>Active</Td>
            <Td isNumeric>99</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}
export default FormList
