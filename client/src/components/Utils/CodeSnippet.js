import { Box } from "@chakra-ui/react"

import { BasicCode } from "../CodeSnippet/"

const CodeSnippet = ({ url }) => {
  return (
    <Box borderRadius="13px" p="0.7rem " backgroundColor="#011627" maxW="65ch">
      <BasicCode url={url} />
    </Box>
  )
}

export default CodeSnippet
