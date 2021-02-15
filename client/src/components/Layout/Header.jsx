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
  console.log(colorMode)
  return (
    <Box shadow="base">
      <Box>
        <Flex
          justifyContent="space-between"
          p="0.6rem 0"
          maxW="80%"
          m="0 auto"
          alignItems="center"
        >
          <Box>
            <Link to="/">
              <Image src="./assets/logo-orange.png" />
            </Link>
          </Box>

          <Menu colorMode={colorMode} toggleColorMode={toggleColorMode} />
          <List display={["none", "none", "block"]} letterSpacing="0.4px">
            <Flex alignItems="center">
              {user && user.isAuthenticated ? (
                <ProfileMenu />
              ) : (
                <Link to="/auth">
                  <Button colorScheme="orange" mr="1rem">
                    LOGIN
                  </Button>
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
  )
}
export default Header
