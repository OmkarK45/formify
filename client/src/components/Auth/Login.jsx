import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  useToast,
} from "@chakra-ui/react"
import { useContext, useState } from "react"
import {
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineLockClosed,
  HiOutlineMail,
} from "react-icons/hi"
import { Link as ReactRouterLink, useHistory } from "react-router-dom"

import { POST } from "../../utils/network"
import userContext from "./../../context/userContext"

const Login = () => {
  const { setUser } = useContext(userContext)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()
  const toast = useToast()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (event) => {
    setIsLoading(true)
    event.preventDefault()
    return POST(
      process.env.REACT_APP_BACKEND + "/api/auth/login",
      {
        email: data.email,
        password: data.password,
      },
      {
        withCredentials: true,
      }
    )
      .then((res) => {
        setIsLoading(false)
        setUser({
          isAuthenticated: true,
          userID: res.data.userID,
          username: res?.data.username,
          email: res?.data.email,
        })
        history.push("/dashboard/forms")
      })
      .catch((error) => {
        setIsLoading(false)
        toast({
          title: "Error !",
          description: "Invalid Credentials. Please check again.",
          status: "error",
          isClosable: true,
        })
        history.push("/auth")
      })
  }

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Box>
      <Box>
        <Heading>Login.</Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired marginTop="1.5rem">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<Icon as={HiOutlineMail} color="gray.500" />}
            />
            <Input
              type="email"
              name="email"
              shadow="base"
              value={data.email}
              isRequired={true}
              onChange={handleInputChange}
              aria-describedby="email-helper-text"
              placeholder="you@example.com"
              id="email"
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired marginTop="2rem">
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<Icon as={HiOutlineLockClosed} color="gray.500" />}
            />
            <Input
              type={showPassword ? "text" : "password"}
              shadow="base"
              name="password"
              value={data.password}
              onChange={handleInputChange}
              isRequired={true}
              id="password"
              placeholder="Password"
            />
            <InputRightElement width="4.5rem">
              <IconButton
                icon={showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                h="1.75rem"
                shadow="none"
                bg="inherit"
                size="sm"
                title="Show Password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </IconButton>
            </InputRightElement>
          </InputGroup>
          <Link
            as={ReactRouterLink}
            to="/auth/forgotPassword"
            d="block"
            mt="0.8rem"
          >
            Forgot Password ?
          </Link>
        </FormControl>
        <Button
          marginTop="2rem"
          width="100%"
          marginBottom="1rem"
          type="submit"
          isLoading={isLoading}
          loadingText="Signing you in..."
          colorScheme="orange"
        >
          Login
        </Button>
      </form>
    </Box>
  )
}

export default Login
