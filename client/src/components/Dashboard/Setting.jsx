import { Box, Text, useColorModeValue } from "@chakra-ui/react"

export default function Setting({
  settingTitle,
  settingDescription,
  children,
}) {
  const bg = useColorModeValue("gray.100", "gray.800")

  return (
    <Box>
      <Box bg={bg} shadow="base" borderRadius="13px" marginTop="1rem" pb={8}>
        <Box pl="1.2rem" pt="1rem">
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
