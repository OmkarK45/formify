import { useRef, useContext } from "react";
import {
  Drawer,
  useDisclosure,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  ListItem,
  IconButton,
  List,
  Heading,
} from "@chakra-ui/react";
import ProfileMenu from "./../Utils/ProfileMenu";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import userContext from "./../../context/userContext";

function Menu({ colorMode, toggleColorMode }) {
  const { user } = useContext(userContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        display={["block", "block", "none"]}
        ref={btnRef}
        paddingLeft="1rem"
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
            <DrawerBody display="flex">
              {user && user.isAuthenticated ? (
                <ProfileMenu />
              ) : (
                <Link to="/auth">
                  <Button
                    marginRight="1rem"
                    padding="0.5rem 2rem"
                    fontFamily="body"
                    fontWeight="700"
                    boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
                  >
                    Sign Up
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
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
export default Menu;
