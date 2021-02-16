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
import { SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import db from "../../sampleDB"
import Sample from "./sample"

export default function Submissions() {
  const { form } = db
  return (
    <>
      <Box
        boxShadow="base"
        borderRadius="10px"
        m="0 auto"
        mt="3rem"
        maxW="100%"
      >
        {/* <Sample /> */}
        <Table size="md" variant="simple">
          <TableCaption>Forms created by Omkar</TableCaption>

          <Thead>
            <Tr>
              {db.schema.map((s, i) => {
                return <Th key={i}>{s}</Th>
              })}
            </Tr>
          </Thead>
          <Tbody>
            {db.submissions.map((s, i) => {
              return (
                <Tr key={i}>
                  {db.schema.map((header, index) => {
                    return <Td key={index}>{s[header]}</Td>
                  })}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Box>
    </>
  )
}
