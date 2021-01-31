import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";

const Register = () => {
  const [data, setData] = useState({});
  //@TODO -> complete this registration
  
  return (
    <>
      <Box>
        <Heading>Register.</Heading>
      </Box>
      <form>
        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            type="text"
            id="username"
            isRequired={true}
            name="username"
            // value={username}
            // onChange={handleInputChange}
          />
        </FormControl>

        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="registerEmail">Email address</FormLabel>
          <Input
            type="email"
            id="registerEmail"
            isRequired={true}
            name="email"
            // value={email}
            // onChange={handleInputChange}
          />
        </FormControl>

        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="registerPassword">Password</FormLabel>
          <Input
            type="password"
            id="registerPassword"
            name="password"
            isRequired={true}
            // value={password}
            // onChange={handleInputChange}
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
