import { useContext } from "react"
import userContext from "./../../context/userContext"
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react"
import { FaBolt, FaBook } from "react-icons/fa"
import { Link } from "react-router-dom"
import { HeroImage, Features, GetStarted } from "./index"
import { Footer } from "../Layout"
import "../../index.css"

const Hero = () => {
  const { user } = useContext(userContext)
  return (
    <>
      <Box paddingTop="3rem">
        <Box
          maxW={["99%", "75%", "80%"]}
          textAlign="center"
          lineHeight={["1.13", "1.15"]}
          margin="0 auto"
        >
          <Heading
            fontSize={["3rem", "3.5rem", "4rem", "5rem"]}
            fontWeight="700"
            letterSpacing="-0.2rem"
          >
            All your
          </Heading>
          <Text
            fontSize={["3rem", "3.5rem", "4rem", "5rem"]}
            fontWeight="700"
            className="animate"
            letterSpacing="-0.2rem"
          >
            form submissions
          </Text>
          <Heading
            fontSize={["3rem", "3.5rem", "4rem", "5rem"]}
            fontWeight="700"
            letterSpacing="-0.2rem"
          >
            in one single place.
          </Heading>
          <Text
            textAlign="center"
            maxW={["95%", "95%", "85%", "75%"]}
            lineHeight="1.7"
            margin="0 auto"
            fontSize="lg"
            marginTop={["1rem", "1.4rem"]}
          >
            Formify is a ready-to integrate form submission solution for static
            sites. Reduce hassle and let us handle your form submissions! No
            database configuration required. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit.
          </Text>
        </Box>
        {/* Buttons Holder */}
        <Flex
          direction={["column", "row"]}
          justifyContent="center"
          maxW={["90%", "85%", "50%"]}
          margin="2rem auto"
        >
          <Link
            to={user && user.isAuthenticated ? "/dashboard/forms" : "/auth"}
          >
            <Button
              width={["100%", "auto"]}
              colorScheme="orange"
              marginRight={["0", "2rem"]}
              size="lg"
              marginBottom={["1rem", "0"]}
              shadow="base"
            >
              Get Started &nbsp; <FaBolt />
            </Button>
          </Link>
          <Link to="/">
            <Button width="100%" size="lg" shadow="base">
              Documentation &nbsp; <FaBook />
            </Button>
          </Link>
        </Flex>
      </Box>
      <Box>
        <HeroImage />
      </Box>
      <Features />
      <GetStarted />
    </>
  )
}

export default Hero
