import { useState } from "react"
import { useParams, useHistory } from "react-router-dom"
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
  useToast,
} from "@chakra-ui/react"
import { PUT } from "../../utils/network"

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  const [password, setPassword] = useState("")
  const { resetToken } = useParams()
  console.log(resetToken)
  const toast = useToast()
  const handleSubmit = (event) => {
    setIsLoading(true)
    event.preventDefault()
    return PUT(
      process.env.REACT_APP_BACKEND + "/api/auth/resetpassword/" + resetToken,
      {
        password,
      }
    )
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: "Password Reset Successfully !",
            description: "Please login to continue",
            status: "success`",
            isClosable: true,
          })
          history.push("/auth")
        } else {
          throw new Error("Invalid token")
        }
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        toast({
          title: "Error !",
          description: "Token has been expired or is invalid",
          status: "error",
          isClosable: true,
        })
      })
  }
  const handleInputChange = (event) => {
    setPassword(event.target.value)
  }
  return (
    <Box
      rounded="10px"
      maxW={["90%", "75%", "75%", "50%", "30%"]}
      mx="auto"
      mt="3rem"
      bg={useColorModeValue("white", "gray.800")}
      shadow={useColorModeValue("base", "none")}
    >
      <Box p={2}>
        <Box>
          <Heading>Set New Password.</Heading>
          <Text mt="1rem">Please enter your new password.</Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <FormControl mt="1.5rem">
            <FormLabel htmlFor="newPassword">New Password</FormLabel>
            <InputGroup>
              <Input
                type="password"
                id="newPassword"
                shadow="base"
                name="password"
                isRequired
                value={password}
                onChange={handleInputChange}
                placeholder="Password"
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
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  )
}
