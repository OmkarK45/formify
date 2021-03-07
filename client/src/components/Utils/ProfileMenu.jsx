import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuDivider,
  Box,
  MenuItem,
  IconButton,
} from "@chakra-ui/react"
import Logout from "../Utils/Logout"
import { Link } from "react-router-dom"
import { FaRegUser } from "react-icons/fa"
import { FiLifeBuoy, FiLogOut } from "react-icons/fi"
import {
  AiOutlineFileText,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineBook,
} from "react-icons/ai"

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
