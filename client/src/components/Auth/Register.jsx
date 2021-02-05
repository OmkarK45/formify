import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { POST } from "../../utils/network";
import userContext from "./../../context/userContext";

const Register = () => {
  const { setUser } = useContext(userContext);
  const history = useHistory();
  const toast = useToast();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return POST(
      process.env.REACT_APP_BACKEND + "/api/auth/register",
      { username: data.username, email: data.email, password: data.password },
      {
        withCredentials: true,
      }
    )
      .then((res) => {
        console.log(res);
        setUser({
          isAuthenticated: true,
          userID: res.data.userID,
        });
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Error !",
          description: "Something went wrong while registering you.",
          status: "error",
          isClosable: true,
        });
        history.push("/auth");
      });
  };
  return (
    <>
      <Box>
        <Heading>Register.</Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            type="text"
            id="username"
            isRequired={true}
            name="username"
            value={data.username}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="registerEmail">Email address</FormLabel>
          <Input
            type="email"
            id="registerEmail"
            isRequired={true}
            name="email"
            value={data.email}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="registerPassword">Password</FormLabel>
          <Input
            type="password"
            id="registerPassword"
            name="password"
            isRequired={true}
            value={data.password}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
          color="white"
          type="submit"
          w="100%"
          marginTop="1.5rem"
        >
          Register
        </Button>
      </form>
    </>
  );
};

export default Register;
