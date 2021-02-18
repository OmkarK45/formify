import { useEffect, useState } from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Stack,
  Box,
  Spinner,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react"
import db from "../../sampleDB"
import Empty from "./../Utils/Empty"
export default function Submissions() {
  const [isLoaded, setIsLoaded] = useState(false)
  const data = true
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
  }, [])
  return (
    <>
      <Box
        boxShadow="base"
        borderRadius="10px"
        m="0 auto"
        mt="3rem"
        minW="100%"
        overflowX="auto"
      >
        {isLoaded ? (
          <Box>
            {data ? (
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
            ) : (
              <Empty text="You don't have any submissions on this form." />
            )}
          </Box>
        ) : (
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        )}
      </Box>
    </>
  )
}
