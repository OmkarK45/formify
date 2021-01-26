import { useState } from "react";
import { POST } from "../../utils/network";
import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
// @TODO - Importing react query, sending data to server, storing token in cookie or LS and settings context
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    isSubmitting: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    return POST(process.env.REACT_APP_BACKEND + "/api/auth/login", {
      email: data.email,
      password: data.password,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Box>
        <Heading>Login.</Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            aria-describedby="email-helper-text"
            id="email"
          />
        </FormControl>

        <FormControl marginTop="2rem">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
            id="password"
          />
        </FormControl>
        <Button
          boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
          marginTop="2.5rem"
          width="100%"
          color="white"
          marginBottom="1rem"
          colorScheme="teal"
          type="submit"
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
