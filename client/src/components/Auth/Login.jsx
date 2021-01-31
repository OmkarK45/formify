import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { POST } from "../../utils/network";
import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";
import userContext from "./../../context/userContext";

const Login = () => {
  const { setUser } = useContext(userContext);
  const history = useHistory();
  const toast = useToast();
  const [data, setData] = useState({
    email: "",
    password: "",
    isSubmitting: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    return (
      POST(
        process.env.REACT_APP_BACKEND + "/api/auth/login",
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      )
        //@ TODO - Set user in context
        .then((res) => {
          console.log(res);
          setUser({
            isAuthenticated: true,
            userID: res.data.userID,
          });          
          history.push("/dashboard");
        })
        .catch((error) => {
          toast({
            title: "Error !",
            description: "Something went wrong while logging you in",
            status: "error",
            isClosable: true,
          });
          history.push("/auth");
        })
    );
    // @TODO - Show Toasts
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
            isRequired={true}
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
            isRequired={true}
            id="password"
          />
        </FormControl>
        <Button
          boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
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
    </>
  );
};

export default Login;
