import { Text, Flex, Icon } from "@chakra-ui/react"
import { ImDrawer2 } from "react-icons/im"

export default function Empty({ text }) {
  return (
    <>
      <Flex
        margin="0 auto"
        paddingY={["3rem", "4rem", "5rem"]}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Icon
          as={ImDrawer2}
          zIndex="-44"
          fontSize={["6rem", "7rem"]}
          color="gray.400"
        />
        <Text mt="1rem" zIndex="-44" color="gray.500">
          {text}
        </Text>
      </Flex>
    </>
  )
}
