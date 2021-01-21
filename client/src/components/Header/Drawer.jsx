import { useRef } from "react";
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
  Link,
  Heading,
} from "@chakra-ui/react";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

function Menu({ colorMode, toggleColorMode }) {
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
            <DrawerHeader>
              <Heading
                fontFamily="heading"
                color="text.heading"
                letterSpacing="-0.5px"
              >
                Formify
              </Heading>
            </DrawerHeader>

            <DrawerBody>
              <List textTransform="uppercase" listStyleType="none">
                <ListItem margin="1rem 0.5rem">
                  <Link>Features</Link>
                </ListItem>
                <ListItem margin="1rem 0.5rem">
                  <Link>Pricing</Link>
                </ListItem>
                <ListItem margin="1rem 0.5rem">
                  <Link>Documentation</Link>
                </ListItem>
              </List>
              <Link>
                <Button
                  marginRight="1rem"
                  padding="0.5rem 2rem"
                  fontFamily="body"
                  fontWeight="300"
                >
                  Sign Up
                </Button>
              </Link>
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
  );
}
export default Menu;
