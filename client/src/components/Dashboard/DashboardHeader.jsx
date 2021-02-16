import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react"

export default function DashboardHeader({ title, children }) {
  const bg = useColorModeValue("gray.200", "gray.800")

  return (
    <>
      <Box bg={bg}>
        <Flex
          maxW="80%"
          m="0 auto"
          p="2rem 0 2rem"
          align="center"
          justify="space-between"
          // justify={["center", "center", "space-between"]}
          // direction={["column", "column", "row"]}
        >
          <Heading>{title}</Heading>
          <Box>{children}</Box>
        </Flex>
      </Box>
    </>
  )
}
