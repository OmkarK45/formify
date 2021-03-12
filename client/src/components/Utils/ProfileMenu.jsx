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
import { FiLifeBuoy, FiLogOut } from "react-icons/fi"
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
              <MenuItem icon={<AiOutlineFileText fontSize="1.2rem" />}>
                My Forms
              </MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Account">
            <Link to="/account/settings">
              <MenuItem icon={<AiOutlineSetting fontSize="1.2rem" />}>
                Settings
              </MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem icon={<AiOutlineBook fontSize="1.2rem" />}>Docs</MenuItem>
            <MenuItem icon={<AiOutlineQuestionCircle fontSize="1.2rem" />}>
              FAQ
            </MenuItem>
            <MenuItem icon={<FiLifeBuoy fontSize="1.2rem" />}>Support</MenuItem>
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
