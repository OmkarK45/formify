import {
  Box,
  Text,
  Heading,
  Input,
  Button,
  useToast,
  Code,
  Container,
} from "@chakra-ui/react"
import { MdContentCopy } from "react-icons/md"
import { useState } from "react"
import CodeSnippet from "./CodeSnippet"

export default function Integrations({ formID }) {
  const url = "https://formify.com/forms/" + formID
  const toast = useToast()
  const [copyStatus, setCopySuccess] = useState("")
  const copyToClipboard = async (e) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(e.target[0].value)
      setCopySuccess("Copied!")
      toast({
        title: "Link Copied !",
        status: "success",
        isClosable: true,
      })
    } catch (err) {
      setCopySuccess("Failed to copy!")
      toast({
        title: "Something went wrong :(",
        status: "error",
        isClosable: true,
      })
    }
  }
  return (
    <>
      <form onSubmit={copyToClipboard}>
        <Box>
          <Text mt="1rem" fontSize="lg">
            Your form's endpoint is:
          </Text>
          <Input
            mt="1rem"
            maxW={["70%", "60%"]}
            readOnly
            variant="filled"
            value={url}
            mr="1rem"
          />
          <Button
            leftIcon={<MdContentCopy />}
            variant="outline"
            colorScheme="orange"
            type="submit"
          >
            Copy
          </Button>
          <Text textAlign="left" mt="1.3rem">
            Place this URL in the <Code fontSize="1.3rem">action</Code>{" "}
            attribute of your form. Also, make sure your form uses &nbsp;
            <Code fontSize="1.3rem"> method="POST"</Code>. Finally, ensure that
            each input has a name attribute. It is recommended to save this URL
            in an environment varible.
          </Text>
          <Box mt="1.3rem">
            <Text>Here's an example:</Text>
            <Box mt="1.3rem">
              <CodeSnippet url={url} />
            </Box>
          </Box>
        </Box>
      </form>
    </>
  )
}
