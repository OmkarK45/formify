import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react"

export default function Callout() {
  return (
    <Alert mb="0.3rem" status="warning" borderRadius="10px">
      <AlertIcon />
      <Box flex="1">
        <AlertTitle>Preview Beta Warning</AlertTitle>
        <AlertDescription display="block">
          This site is only for demonstration purpose. All data created will be
          lost.
        </AlertDescription>
      </Box>
    </Alert>
  )
}
