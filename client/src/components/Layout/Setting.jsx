import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react"

export default function Setting({
  settingTitle,
  settingDescription,
  children,
  ...props
}) {
  const bg = useColorModeValue("gray.100", "gray.800")

  return (
    <Box {...props}>
      <Box px={8} py={4} bg={bg} shadow="base" borderRadius="13px">
        <Box>
          <Text fontSize="2xl" fontWeight="600">
            {settingTitle}
          </Text>
          <Text color="gray.500">{settingDescription}</Text>
          <Box>{children}</Box>
        </Box>
      </Box>
    </Box>
  )
}
