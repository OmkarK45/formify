import { useState } from "react"
import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Button,
  InputGroup,
  useColorModeValue,
  Text,
} from "@chakra-ui/react"
import { POST } from "../../utils/network"

export default function ForgotPassword() {
  const [disabled, setDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [
    info,
    setInfo,
  ] = useState(`Please enter the email you used for this account. We will send a
  password reset link to this email.`)

  const [email, setEmail] = useState("")
  const handleInputChange = (event) => {
    setEmail(event.target.value)
  }
  const handleSubmit = (event) => {
    setIsLoading(true)
    event.preventDefault()
    return POST(process.env.REACT_APP_BACKEND + "/api/auth/forgotpassword", {
      email: email,
    })
      .then((res) => {
        setDisabled(true)
        setInfo(
          "An email with password reset instructions has been sent to you."
        )
        setIsLoading(false)
      })
      .catch((error) => {
        setInfo("An error has occured while sending email. Please try again.")
        setIsLoading(false)
      })
  }
  setTimeout(() => {
    setDisabled(false)
  }, 45000)
  return (
    <Box
      borderRadius="10px"
      maxW={["90%", "75%", "75%", "50%", "30%"]}
      margin="0 auto"
      marginTop="3rem"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={useColorModeValue("base", "none")}
    >
      <Box px="2rem" py="2rem">
        <Box>
          <Heading>Reset Password.</Heading>
          <Text marginTop="1rem">{info}</Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <FormControl marginTop="1rem">
            <FormLabel htmlFor="email">Email address</FormLabel>
            <InputGroup>
              <Input
                type="email"
                name="email"
                shadow="base"
                value={email}
                isRequired={true}
                onChange={handleInputChange}
                aria-describedby="email-helper-text"
                placeholder="you@example.com"
                id="resetPasswordEmail"
              />
            </InputGroup>
          </FormControl>
          <Button
            marginTop="1rem"
            width="100%"
            type="submit"
            isLoading={isLoading}
            loadingText="Submitting"
            colorScheme="orange"
            disabled={disabled}
          >
            Send Reset Link
          </Button>
        </form>
      </Box>
    </Box>
  )
}
