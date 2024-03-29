import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  useColorModeValue,
} from "@chakra-ui/react"

export default function VerificationEmailSent() {
  return (
    <Box
      rounded="10px"
      maxW={["90%", "75%", "75%", "50%", "30%"]}
      mx="auto"
      mt="3rem"
      bg={useColorModeValue("white", "gray.800")}
      shadow={useColorModeValue("base", "none")}
    >
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Verification Email Sent!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          In order to continue using application, we need to verify your email.
          A verification link has been sent to you. Please click it verify your
          account
        </AlertDescription>
      </Alert>
    </Box>
  )
}
