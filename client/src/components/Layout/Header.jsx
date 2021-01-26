import {
  Box,
  Heading,
  ListItem,
  List,
  Flex,
  Text,
  Button,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import Menu from "./Drawer";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        position="fixed"
        width="100%"
        top="0"
        left="0"
        bg="white"
        zIndex="3"
        boxShadow="rgb(0 0 0 / 5%) 0px 1px 2px 0px"
      >
        {/* Gradient Strip */}
        <Box
          h="10px"
          bgGradient="linear(to-l, other.gradientStart, other.gradientEnd)"
        ></Box>
        <Box>
          <Flex
            justifyContent="space-between"
            padding="1rem 0"
            maxW="85%"
            margin="0 auto"
            alignItems="center"
          >
            <Box>
              <Link
                _hover={{ textDecoration: "none" }}
                textDecoration="none"
                to="/"
              >
                <Heading
                  fontFamily="heading"
                  color="text.heading"
                  letterSpacing="-0.5px"
                >
                  Formify
                </Heading>
              </Link>
            </Box>
            <Menu colorMode={colorMode} toggleColorMode={toggleColorMode} />
            <List
              display={["none", "none", "block"]}
              textTransform="uppercase"
              letterSpacing="0.4px"
            >
              <Flex alignItems="center">
                <ListItem margin="0 0.5rem">
                  <Link>Features</Link>
                </ListItem>
                <ListItem margin="0 0.5rem">
                  <Link>Pricing</Link>
                </ListItem>
                <ListItem margin="0 0.5rem">
                  <Link>Documentation</Link>
                </ListItem>
                <Text>|</Text>
                <Link to="/auth" style={{ margin: "0 1rem" }}>
                  <Button
                    padding="0.5rem 2rem"
                    fontFamily="body"
                    fontWeight="300"
                    boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
                  >
                    Sign Up
                  </Button>
                </Link>
                <IconButton
                  boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
                  icon={colorMode === "light" ? <BsMoon /> : <BiSun />}
                  onClick={toggleColorMode}
                >
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </IconButton>
              </Flex>
            </List>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Header;