import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { useContext, useRef } from "react"
import { BiSun } from "react-icons/bi"
import { BsMoon } from "react-icons/bs"
import { FaBolt, FaBook } from "react-icons/fa"
import { HiMenuAlt1 } from "react-icons/hi"
import { Link } from "react-router-dom"

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
        onClick={onOpen}
        variant="ghost"
        shadow="none"
        fontSize="1.4rem"
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
