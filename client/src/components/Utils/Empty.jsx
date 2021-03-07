import { Text, Flex, Icon, Heading } from "@chakra-ui/react"
export default function Empty({ text, code, icon }) {
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
          as={icon}
          zIndex="0"
          fontSize={["6rem", "7rem"]}
          color="gray.400"
        />
        <Heading color="gray.500">{code}</Heading>
        <Text mt="1rem" zIndex="0" color="gray.500">
          {text}
        </Text>
      </Flex>
    </>
  )
}
