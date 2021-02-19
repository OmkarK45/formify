import { Box, Flex, Heading, useColorModeValue, Text } from "@chakra-ui/react"

export default function DashboardHeader({
  title,
  submissions,
  createdAt,
  children,
}) {
  const bg = useColorModeValue("gray.200", "gray.800")

  return (
    <>
      <Box bg={bg}>
        <Flex
          maxW={["90%", "80%"]}
          m="0 auto"
          p="2rem 0 2rem 0"
          align="center"
          justify="space-between"
          wrap="wrap"
        >
          <Flex direction="column">
            <Heading>{title}</Heading>
          </Flex>
          <Box>{children}</Box>
        </Flex>
      </Box>
    </>
  )
}
