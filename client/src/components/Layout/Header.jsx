import { useContext } from "react"
import userContext from "./../../context/userContext"
import {
  Box,
  List,
  Flex,
  Button,
  Image,
  useColorMode,
  IconButton,
  useColorModeValue,
  Text,
} from "@chakra-ui/react"
import ProfileMenu from "./../Utils/ProfileMenu"
import { Link } from "react-router-dom"
import { BsMoon } from "react-icons/bs"
import { BiSun } from "react-icons/bi"
import Menu from "./Drawer"
import logo from "./logo-orange.png"
import Banner from "../Home/Banner"

const Header = () => {
  const { user } = useContext(userContext)
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue("gray.50", "gray.900")
  return (
    <Box position="sticky" bg={bg} top="0" zIndex="99" shadow="base">
      {/* <Banner /> */}
      <Box>
        <Flex
          justifyContent="space-between"
          p="0.6rem 0"
          maxW={["90%", "80%"]}
          m="0 auto"
          alignItems="center"
        >
          <Box>
            <Link to="/">
              <Image
                height="2rem"
                src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"
              />
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
                variant="ghost"
                shadow="none"
              >
                Toggle {colorMode === "light" ? "Dark" : "Light"}
              </IconButton>
            </Flex>
          </List>
        </Flex>
      </Box>
      {/* <Box bg="orange.100" py="0.1rem" textAlign="center">
        <Text fontWeight="bold">PREVIEW BETA</Text>
      </Box> */}
    </Box>
  )
}
export default Header
