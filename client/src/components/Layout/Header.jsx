import { useContext } from "react"
import userContext from "./../../context/userContext"
import {
  Box,
  List,
  Flex,
  Button,
  LinkBox,
  LinkOverlay,
  Image,
  useColorMode,
  IconButton,
} from "@chakra-ui/react"
import ProfileMenu from "./../Utils/ProfileMenu"
import { Link } from "react-router-dom"
import { BsMoon } from "react-icons/bs"
import { BiSun } from "react-icons/bi"
import Menu from "./Drawer"
import logo from "./logo.svg"

const Header = () => {
  const { user } = useContext(userContext)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box
        position="fixed"
        width="100%"
        top="0"
        left="0"
        zIndex="10"
        style={{ backdropFilter: "blur(20px)" }}
        shadow="base"
      >
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
                <Image src="./assets/logo.png" />
              </Link>
            </Box>

            <Menu colorMode={colorMode} toggleColorMode={toggleColorMode} />
            <List display={["none", "none", "block"]} letterSpacing="0.4px">
              <Flex alignItems="center">
                {user && user.isAuthenticated ? (
                  <ProfileMenu />
                ) : (
                  <Link to="/auth">
                    <Button mr='1rem'>Log In</Button>
                  </Link>
                )}
                <IconButton
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
  )
}
export default Header
