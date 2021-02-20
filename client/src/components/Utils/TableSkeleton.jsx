import { Box, Skeleton } from "@chakra-ui/react"
import { Table, Tr, Th, Td } from "@chakra-ui/react"

export const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
  </Box>
)

const TableSkeleton = () => {
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
        <thead>
          <Tr>
            <Th>Forms</Th>
            <Th>Status</Th>
            <Th>Submissions</Th>
          </Tr>
        </thead>
        <tbody>
          <SkeletonRow width="75px" />
          <SkeletonRow width="125px" />
          <SkeletonRow width="50px" />
        </tbody>
      </Table>
    </Box>
  )
}

export default TableSkeleton
