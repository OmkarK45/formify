import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { POST } from "../../utils/network"
import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Button,
  useToast,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react"
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi"
import userContext from "./../../context/userContext"

const Login = () => {
  const { setUser } = useContext(userContext)
  const history = useHistory()
  const toast = useToast()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (event) => {
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
        console.log(res)
        setUser({
          isAuthenticated: true,
          userID: res.data.userID,
          username: res?.data.username,
          email: res?.data.email,
        })
        history.push("/dashboard")
      })
      .catch((error) => {
        console.log(error)
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
        <Heading fontStyle="italic">Login.</Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <InputGroup>
            <InputLeftElement children={<Icon as={HiOutlineMail} />} />
            <Input
              type="email"
              name="email"
              shadow="base"
              value={data.email}
              isRequired={true}
              onChange={handleInputChange}
              aria-describedby="email-helper-text"
              id="email"
            />
          </InputGroup>
        </FormControl>

        <FormControl marginTop="2rem">
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <InputLeftElement children={<Icon as={HiOutlineLockClosed} />} />
            <Input
              type="password"
              shadow="base"
              name="password"
              value={data.password}
              onChange={handleInputChange}
              isRequired={true}
              id="password"
            />
          </InputGroup>
        </FormControl>
        <Button
          marginTop="2.5rem"
          width="100%"
          color="white"
          marginBottom="1rem"
          bgColor="#D22D4F"
          _hover={{ bgColor: "#B52643" }}
          type="submit"
        >
          Login
        </Button>
      </form>
    </Box>
  )
}

export default Login
