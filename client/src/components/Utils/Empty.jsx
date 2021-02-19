import { Text, Flex, Icon } from "@chakra-ui/react"
import { ImDrawer2 } from "react-icons/im"
import { BiError } from "react-icons/bi"
export default function Empty({ text, status }) {
  return (
    <>
      <Flex
        margin="0 auto"
        paddingY={["3rem", "4rem", "5rem"]}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {status === "empty" ? (
          <Icon
            as={ImDrawer2}
            zIndex="0"
            fontSize={["6rem", "7rem"]}
            color="gray.400"
          />
        ) : status === "error" ? (
          <Icon
            as={BiError}
            zIndex="0"
            fontSize={["6rem", "7rem"]}
            color="gray.400"
          />
        ) : (
          ""
        )}

        <Text mt="1rem" zIndex="0" color="gray.500">
          {text}
        </Text>
      </Flex>
    </>
  )
}
