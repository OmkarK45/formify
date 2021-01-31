import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuGroup,
  MenuDivider,
  Box,
  MenuItem,
} from "@chakra-ui/react";
import Logout from "../Utils/Logout";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <Box marginRight="1rem">
      <Menu>
        <MenuButton
          as={Button}
          size="md"
          boxShadow="0 2px 4px 0 rgba(0,0,0,0.17)"
          bgColor="#D22D4F"
          color="white"
          _active={{ bgColor: "#B52643" }}
          _hover={{ bgColor: "#B52643" }}
        >
          My Profile
        </MenuButton>
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
            <MenuItem as={Box}>
              <Logout />
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
