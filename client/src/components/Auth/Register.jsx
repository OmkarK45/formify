import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";

const Register = () => {
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
            // onChange={handleUsername}
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
            // onChange={handleEmail}
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
            // onChange={handlePassword}
          />
        </FormControl>
        <Button
          colorScheme="teal"
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
