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
} from "@chakra-ui/react"
import ProfileMenu from "./../Utils/ProfileMenu"
import { Link } from "react-router-dom"
import { HiMenuAlt1 } from "react-icons/hi"
import { BsMoon } from "react-icons/bs"
import { BiSun } from "react-icons/bi"
import userContext from "./../../context/userContext"

function Menu({ colorMode, toggleColorMode }) {
  const { user } = useContext(userContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
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
            {/* Todo : this needs some work */}
            <DrawerBody display="flex">
              {user && user.isAuthenticated ? (
                <ProfileMenu />
              ) : (
                <Link to="/auth">
                  <Button
                    marginRight="1rem"
                    padding="0.5rem 2rem"
                    fontFamily="body"
                  >
                    Sign Up
                  </Button>
                </Link>
              )}

              <IconButton
                icon={colorMode === "light" ? <BsMoon /> : <BiSun />}
                onClick={toggleColorMode}
              >
                Toggle {colorMode === "light" ? "Dark" : "Light"}
              </IconButton>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
export default Menu
