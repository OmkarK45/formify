import { useRef, useContext } from "react"
import {
  Drawer,
  useDisclosure,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
  DrawerHeader,
  Heading,
  Flex,
  Divider,
  useColorModeValue,
  Box,
} from "@chakra-ui/react"
import { FaBolt, FaBook } from "react-icons/fa"
import ProfileMenu from "./../Utils/ProfileMenu"
import { Link } from "react-router-dom"
import { HiMenuAlt1 } from "react-icons/hi"
import { BsMoon } from "react-icons/bs"
import { BiSun } from "react-icons/bi"
import userContext from "./../../context/userContext"
import Logo from "./../Logo"
import DrawerMenu from "./DrawerMenu"

function Menu({ colorMode, toggleColorMode }) {
  const { user } = useContext(userContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const textColor = useColorModeValue("orange.700", "orange.300")
  return (
    <>
      {/* TODO - This needs some works */}
      <Button
        display={["block", "block", "none"]}
        ref={btnRef}
        paddingLeft="1rem"
        color="inherit"
        onClick={onOpen}
      >
        <HiMenuAlt1 />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Flex align="center">
                <Logo />
                <Heading ml={2} color={textColor}>
                  Formify
                </Heading>
              </Flex>
            </DrawerHeader>
            <Divider />

            <DrawerBody>
              {user && user.isAuthenticated ? (
                // This could be better
                // <ProfileMenu />
                <DrawerMenu />
              ) : (
                <Box>
                  <Link to="/auth">
                    <Button
                      width="100%"
                      colorScheme="orange"
                      size="lg"
                      shadow="base"
                      margin="0.6rem 0"
                    >
                      Get Started &nbsp; <FaBolt />
                    </Button>
                  </Link>
                  <Button width="100%" size="lg" shadow="base">
                    Documentation &nbsp; <FaBook />
                  </Button>
                </Box>
              )}
              <Divider />

              <Button
                margin="0.6rem 0"
                leftIcon={colorMode === "light" ? <BsMoon /> : <BiSun />}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? "Dark" : "Light"}
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
export default Menu
