import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Button,
  FormHelperText,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Box>
        <Heading>Login.</Heading>
      </Box>
      <form>
        <FormControl marginTop="1.5rem">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            //   value={email}
            //   onChange={handleEmail}
            aria-describedby="email-helper-text"
          />
          <FormHelperText id="email-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl marginTop="2rem">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            name="password"
            //   value={password}
            //   onChange={handlePassword}
            aria-describedby="email-helper-text"
          />
        </FormControl>
        <Button
          boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
          marginTop="2.5rem"
          width="100%"
          color="white"
          marginBottom="1rem"
          colorScheme="teal"
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
