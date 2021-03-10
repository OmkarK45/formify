import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import {
  AiOutlineBook,
  AiOutlineFileText,
  AiOutlineQuestionCircle,
  AiOutlineSetting,
} from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"
import { FiLifeBuoy } from "react-icons/fi"
import { Link } from "react-router-dom"

import Logout from "../Utils/Logout"

const ProfileMenu = () => {
  return (
    <Box marginRight="1rem">
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FaRegUser />}
          size="md"
          borderRadius="10px"
          shadow="none"
        ></MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <Link to="/dashboard/forms">
              <MenuItem icon={<AiOutlineFileText />}>My Forms</MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Account">
            <Link to="/account/settings">
              <MenuItem icon={<AiOutlineSetting />}>Settings</MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem icon={<AiOutlineBook />}>Docs</MenuItem>
            <MenuItem icon={<AiOutlineQuestionCircle />}>FAQ</MenuItem>
            <MenuItem icon={<FiLifeBuoy />}>Support</MenuItem>
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
