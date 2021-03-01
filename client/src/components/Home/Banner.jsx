import { useState } from "react"
import {
  Box,
  Flex,
  Button,
  Container,
  Text,
  CloseButton,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import { AiOutlineWarning } from "react-icons/ai"

export default function Banner() {
  const [visible, setVisible] = useState(true)
  const bg = useColorModeValue("orange.100", "orange.700")
  function closeClick() {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <Container bg={bg} maxW="full" py={2} overflow="hidden" shadow="base">
      <Flex
        align="center"
        justify="space-evenly"
        direction={{ base: "column", sm: "row" }}
      >
        <Text mr={{ base: 0, sm: 6 }} mb={{ base: 6, sm: 0 }} fontSize="md">
          <Icon as={AiOutlineWarning} mr={4} /> This application is in preview
          beta. All data will be deleted.
        </Text>
        <Flex align="center">
          <Button colorScheme="orange" size="sm" onClick={closeClick} mr={6}>
            OK
          </Button>
          <CloseButton onClick={closeClick} size="sm" />
        </Flex>
      </Flex>
    </Container>
  )
}
