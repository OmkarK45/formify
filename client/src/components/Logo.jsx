import { Image, Text, Flex } from "@chakra-ui/react"
import logo from "./Layout/logo-orange.png"

export default function Logo({ title }) {
  return (
    <>
      {title ? (
        <Flex alignItems="center">
          <Image src={logo} w={6} />
          <Text fontSize="xl" fontWeight="600" m="0 1rem">
            Formify, LLP
          </Text>
        </Flex>
      ) : (
        <Image src={logo} />
      )}
    </>
  )
}
