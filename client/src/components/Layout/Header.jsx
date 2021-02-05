import { useContext } from "react";
import userContext from "./../../context/userContext";
import {
  Box,
  Heading,
  List,
  Flex,
  Text,
  Badge,
  Button,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import ProfileMenu from "./../Utils/ProfileMenu";
import { Link } from "react-router-dom";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import Menu from "./Drawer";
const Header = () => {
  const { user } = useContext(userContext);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        position="fixed"
        width="100%"
        top="0"
        left="0"
        zIndex="10"
        boxShadow="rgb(0 0 0 / 5%) 0px 1px 2px 0px"
        style={{ backdropFilter: "saturate(180%) blur(20px)" }}
      >
        <Box
          h="6px"
          bgGradient="linear(to-l, other.gradientStart, other.gradientEnd)"
        ></Box>
        <Box>
          <Flex
            justifyContent="space-between"
            padding="0.6rem 0"
            maxW="85%"
            margin="0 auto"
            alignItems="center"
          >
            <Box textAlign="center">
              <Link to="/">
                <Heading
                  fontSize="4xl"
                  fontFamily="heading"
                  color={colorMode === "light" ? "purple.800" : "purple.50"}
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
                {user && user.isAuthenticated ? (
                  <ProfileMenu />
                ) : (
                  <Link to="/auth" style={{ margin: "0 1rem" }}>
                    <Button
                      p="0.8rem 1.3rem"
                      fontFamily="body"
                      fontWeight="700"
                      boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
                    >
                      Log In
                    </Button>
                  </Link>
                )}
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
