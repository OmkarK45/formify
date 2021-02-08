import { useContext } from "react"
import userContext from "./../../context/userContext"
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react"
import { FaBolt, FaBook } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Safari, Features, GetStarted } from "./index"
import { Footer } from "../Layout"
import "../../index.css"

const Hero = () => {
  const { user } = useContext(userContext)
  return (
    <>
      <Box paddingTop="8rem">
        <Box
          maxW={["99%", "75%", "80%"]}
          textAlign="center"
          lineHeight={["1.13", "1.15"]}
          margin="0 auto"
        >
          <Heading
            fontSize={["3rem", "4rem", "5rem"]}
            letterSpacing="-0.2rem"
            fontWeight="700"
          >
            All your
          </Heading>
          <Text
            fontSize={["3rem", "4rem", "5rem"]}
            fontWeight="700"
            letterSpacing="-0.2rem"
            className="animate"
          >
            form submissions
          </Text>
          <Heading
            fontSize={["3rem", "4rem", "5rem"]}
            letterSpacing="-0.2rem"
            fontWeight="700"
          >
            in one single place.
          </Heading>
          <Text
            textAlign="center"
            maxW={["90%", "85%", "75%"]}
            lineHeight="1.7"
            margin="0 auto"
            color="text.body"
            fontSize={["1.1rem", "1.2rem", "1.3rem", "1.4rem"]}
            marginTop={["1rem", "1.4rem"]}
          >
            Formify is a ready-to integrate form submission solution for static
            sites. Reduce hassle and let us handle your form submissions! No
            database configuration required.
          </Text>
        </Box>
        {/* Buttons Holder */}
        <Flex
          direction={["column", "row"]}
          justifyContent="center"
          maxW={["90%", "85%", "50%"]}
          margin="2rem auto"
        >
          <Link to={user && user.isAuthenticated ? "/dashboard" : "/auth"}>
            <Button
              width={["100%", "auto"]}
              padding="1.6rem 1.5rem"
              color="white"
              bgColor="red.600"
              _hover={{ bgColor: "red.700" }}
              fontSize="lg"
              marginRight={["0", "2rem"]}
              marginBottom={["1rem", "0"]}
              shadow="base"
            >
              Get Started &nbsp; <FaBolt />
            </Button>
          </Link>
          <Link to="/">
            <Button
              width="100%"
              fontSize="lg"
              bg="white"
              padding="1.6rem 1.8rem"
              shadow="base"
            >
              Documentation &nbsp; <FaBook />
            </Button>
          </Link>
        </Flex>
      </Box>
      <Box>
        <Safari />
      </Box>
      <Features />
      <GetStarted />
      <Footer />
    </>
  )
}

export default Hero
