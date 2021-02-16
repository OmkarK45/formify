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
  IconButton,
} from "@chakra-ui/react"
import Logout from "../Utils/Logout"
import { Link } from "react-router-dom"
import { FaRegUser } from "react-icons/fa"

const ProfileMenu = () => {
  return (
    <Box marginRight="1rem">
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FaRegUser />}
          size="md"
          borderRadius="10px"
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
