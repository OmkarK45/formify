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
  })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (e) => {
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
        console.log(res)
        setIsLoading(false)

        setUser({
          isAuthenticated: true,
          userID: res.data.userID,
        })
        history.push("/dashboard")
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)

        toast({
          title: "Error !",
          description: "Something went wrong while registering you.",
          status: "error",
          isClosable: true,
        })
        history.push("/auth")
      })
  }
  return (
    <Box pb="1rem">
      <Box>
        <Heading fontStyle="italic">Register.</Heading>
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
