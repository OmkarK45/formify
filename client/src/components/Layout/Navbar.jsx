import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { useContext } from "react"
import { AiOutlineClose, AiOutlineDown, AiOutlineMenu } from "react-icons/ai"
import { BiSun } from "react-icons/bi"
import { BsMoon } from "react-icons/bs"
import { Link as RouterLink } from "react-router-dom"

import userContext from "../../context/userContext"
import { ProfileMenu } from "../Utils/"

export default function Nav() {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const { user } = useContext(userContext)
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            shadow="none"
            onClick={onToggle}
            icon={
              isOpen ? (
                <AiOutlineClose w={3} h={3} />
              ) : (
                <AiOutlineMenu w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1.2 }}
          justify={{ base: "center", md: "space-between" }}
        >
          <Flex align="center" justify="center">
            <Link as={RouterLink} to="/">
              <Image
                height="2rem"
                src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"
              />
            </Link>
          </Flex>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={2}
          >
            {user && user.isAuthenticated ? (
              <ProfileMenu />
            ) : (
              <Button
                as={RouterLink}
                to="/auth"
                fontSize={"sm"}
                fontWeight={600}
                colorScheme="orange"
              >
                LOGIN
              </Button>
            )}
            <IconButton
              display={{ base: "none", md: "inline-flex" }}
              icon={colorMode === "light" ? <BsMoon /> : <BiSun />}
              onClick={toggleColorMode}
              variant="ghost"
              shadow="none"
            >
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </IconButton>
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("gray.800", "white")
  return (
    <Stack direction="row" spacing={4} align="center" justify="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: { linkHoverColor },
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={AiOutlineDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
    </Stack>
  )
}

const NAV_ITEMS = [
  {
    label: "Concept",
  },
  {
    label: "Pricing",
  },
  {
    label: "FAQ",
    href: "#",
  },
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Support",
    href: "#",
  },
]
