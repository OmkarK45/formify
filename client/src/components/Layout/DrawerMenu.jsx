import { Box, Flex, Text, Divider } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Logout from "./../Utils/Logout"
// @TODO -> this needs some work. Make Text to links
export default function DrawerMenu() {
  return (
    <>
      <Flex direction="column">
        <Text fontSize="lg" padding="0.6rem 0" fontWeight="600">
          Profile
        </Text>
        <Link to="/dashboard">
          <Text fontSize="lg" padding="0.6rem 0">
            My Forms
          </Text>
        </Link>
        <Text fontSize="lg" padding="0.6rem 0">
          Payments
        </Text>
        <Divider />
        <Text fontSize="lg" padding="0.6rem 0" fontWeight="600">
          Account
        </Text>
        <Link to="/account/settings">
          <Text fontSize="lg" padding="0.6rem 0">
            Settings
          </Text>
        </Link>
        <Divider />
        <Text fontSize="lg" padding="0.6rem 0" fontWeight="600">
          Help
        </Text>
        <Text fontSize="lg" padding="0.6rem 0">
          Docs
        </Text>
        <Text fontSize="lg" padding="0.6rem 0">
          FAQ
        </Text>
        <Text fontSize="lg" padding="0.6rem 0">
          <Logout />
        </Text>
      </Flex>
    </>
  )
}
