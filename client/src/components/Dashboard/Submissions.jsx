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
} from "@chakra-ui/react"
import Empty from "./../Utils/Empty"
import { SkeletonRow } from "./../Utils/TableSkeleton"

export default function Submissions({ fields, submissions }) {
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
            {submissions.length > 0 ? (
              <Table size="md" variant="simple">
                <TableCaption>Forms created by Omkar</TableCaption>
                <Thead>
                  <Tr>
                    {fields.map((s, i) => {
                      return <Th key={i}>{s}</Th>
                    })}
                  </Tr>
                </Thead>
                <Tbody>
                  {submissions.map((s, i) => {
                    return (
                      <Tr key={i}>
                        {fields.map((header, index) => {
                          return <Td key={index}>{s[header]}</Td>
                        })}
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            ) : (
              <Empty
                status="empty"
                text="You don't have any submissions on this form."
              />
            )}
          </Box>
        ) : (
          <Table>
            <thead>
              <SkeletonRow width="100px" />
            </thead>
            <tbody>
              <SkeletonRow width="75px" />
              <SkeletonRow width="75px" />
              <SkeletonRow width="75px" />
            </tbody>
          </Table>
        )}
      </Box>
    </>
  )
}
