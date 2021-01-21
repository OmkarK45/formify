import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Safari from "./Safari";

const Hero = () => {
  return (
    <>
      <Box>
        {/* Headings Holder */}
        <Box
          maxW={["90%", "75%", "80%"]}
          textAlign="center"
          lineHeight={["1.13", "1.15"]}
          margin="0 auto"
          marginTop="2.5rem"
        >
          <Heading
            fontSize={["3rem", "4rem", "5rem"]}
            letterSpacing="-0.2rem"
            fontWeight="700"
          >
            All your
          </Heading>
          <Text
            bgGradient="linear(to-r, #663399,#bc027f,#f67300)"
            bgClip="text"
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
          <Link marginRight={["0", "2rem"]} marginBottom={["1rem", "0"]}>
            <Button
              width="100%"
              padding="1.6rem 1.8rem"
              color="white"
              colorScheme="teal"
              fontSize="lg"
              boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
            >
              Get Started &nbsp; <AiOutlineArrowRight />
            </Button>
          </Link>
          <Link>
            <Button
              boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
              width="100%"
              fontSize="lg"
              padding="1.6rem 1.8rem"
            >
              Documentation
            </Button>
          </Link>
        </Flex>
      </Box>
      <Box>
        <Safari />
      </Box>
    </>
  );
};

export default Hero;
