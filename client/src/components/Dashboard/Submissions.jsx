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
  Button,
  Box,
} from "@chakra-ui/react"
import Pagination from "@choc-ui/paginator"
import Empty from "./../Utils/Empty"
import { SkeletonRow } from "./../Utils/TableSkeleton"

export default function Submissions({ fields, submissions }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(1)
  const pageSize = 8
  const offset = (current - 1) * pageSize
  const posts = submissions.slice(offset, offset + pageSize)

  const Prev = (props) => <Button {...props}>Prev </Button>
  const Next = (props) => <Button {...props}> Next </Button>

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
  }, [])

  const itemRender = (_, type) => {
    if (type === "prev") {
      return Prev
    }
    if (type === "next") {
      return Next
    }
  }

  return (
    <>
      <Box
        shadow="base"
        rounded="10px"
        m="0 auto"
        mt="3rem"
        minW="100%"
        overflowX="auto"
      >
        {isLoaded ? (
          <Box position="relative">
            {submissions.length > 0 ? (
              <Table size="md" variant="simple">
                <TableCaption>
                  <TableCaption>
                    {/* Special thanks to @anubra26 on discord :) */}
                    <Pagination
                      current={current}
                      onChange={(page) => setCurrent(page)}
                      pageSize={pageSize}
                      total={submissions.length}
                      colorScheme="yellow"
                      rounded="full"
                      itemRender={itemRender}
                      paginationProps={{
                        display: "flex",
                        pos: "absolute",
                        left: "50%",
                        bottom: "10px",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </TableCaption>
                </TableCaption>
                <Thead>
                  <Tr>
                    {/* @TODO-> Create a date column here */}
                    <Th>Submitted At</Th>

                    {fields.map((s, i) => {
                      return <Th key={i}>{s}</Th>
                    })}
                  </Tr>
                </Thead>
                <Tbody>
                  {posts.map((s, i) => {
                    return (
                      <Tr key={i}>
                        <Td>{new Date(s["submittedAt"]).toDateString()}</Td>
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
