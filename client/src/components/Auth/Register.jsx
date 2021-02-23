import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  useToast,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react"
import { POST } from "../../utils/network"
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi"
import userContext from "./../../context/userContext"

const Register = () => {
  const { setUser } = useContext(userContext)
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (e) => {
    if (data.confirmPassword !== data.password) {
      e.preventDefault()
      return toast({
        title: "Please make sure passwords match.",
        status: "info",
        isClosable: true,
      })
    }
    setIsLoading(true)

    e.preventDefault()
    return POST(
      process.env.REACT_APP_BACKEND + "/api/auth/register",
      { username: data.username, email: data.email, password: data.password },
      {
        withCredentials: true,
      }
    )
      .then((res) => {
        setIsLoading(false)
        setUser({
          isAuthenticated: true,
          userID: res.data.userID,
        })
        // @TODO -> instead of redirecting here, redirect to email verification flow
        history.push("/dashboard/forms")
      })
      .catch((error) => {
        setIsLoading(false)
        if (error.response.status === 400) {
          toast({
            title: "Error !",
            description: "User with email or username already exists",
            status: "error",
            isClosable: true,
          })
        } else {
          toast({
            title: "Error !",
            description: "Something went wrong while registering you.",
            status: "error",
            isClosable: true,
          })
        }
        history.push("/auth")
      })
  }
  return (
    <Box pb="1rem">
      <Box>
        <Heading>Register.</Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="username">Username</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<Icon as={HiOutlineUser} color="gray.500" />}
            />
            <Input
              type="text"
              id="username"
              isRequired={true}
              name="username"
              shadow="base"
              value={data.username}
              onChange={handleInputChange}
              placeholder="Username"
            />
          </InputGroup>
        </FormControl>

        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="registerEmail">Email address</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<Icon as={HiOutlineMail} color="gray.500" />}
            />
            <Input
              shadow="base"
              type="email"
              id="registerEmail"
              isRequired={true}
              name="email"
              value={data.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
            />
          </InputGroup>
        </FormControl>

        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="registerPassword">Password</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={
                <Icon size="2" as={HiOutlineLockClosed} color="gray.500" />
              }
            />
            <Input
              type="password"
              id="registerPassword"
              shadow="base"
              name="password"
              isRequired={true}
              value={data.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </InputGroup>
        </FormControl>

        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={
                <Icon size="2" as={HiOutlineLockClosed} color="gray.500" />
              }
            />
            <Input
              type="password"
              id="confirmPassword"
              shadow="base"
              name="confirmPassword"
              isRequired={true}
              value={data.confirmPassword}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </InputGroup>
        </FormControl>

        <Button
          isLoading={isLoading}
          loadingText="Registering you"
          colorScheme="purple"
          type="submit"
          w="100%"
          mt="1.5rem"
        >
          Register
        </Button>
      </form>
    </Box>
  )
}

export default Register
