import { Badge, HStack, Text } from "@chakra-ui/react"
import { CgCrown } from "react-icons/cg"
export default function PremiumBadge() {
  return (
    <Badge colorScheme="orange">
      <HStack>
        <CgCrown size="1.4rem" /> <Text>P R E M I U M</Text>
      </HStack>
    </Badge>
  )
}
