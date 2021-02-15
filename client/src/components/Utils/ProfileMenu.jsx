import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuGroup,
  MenuDivider,
  Box,
  MenuItem,
  Avatar,
} from "@chakra-ui/react"
import Logout from "../Utils/Logout"
import { Link } from "react-router-dom"
import { faUser } from "react-icons/fa"

const ProfileMenu = () => {
  return (
    <Box marginRight="1rem">
      <Menu>
        <MenuButton
          as={Avatar}
          size="sm"
          borderRadius="10px"
          src={<faUser />}
          color="white"
          cursor="pointer"
        ></MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <Link to="/dashboard">
              <MenuItem>My Account</MenuItem>
            </Link>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>
              <Logout />
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default ProfileMenu
