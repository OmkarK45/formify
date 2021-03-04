import { Flex, Text, Divider } from "@chakra-ui/react"
import Logout from "./../Utils/Logout"
import MenuLink from "./MenuContent"

export default function DrawerMenu() {
  return (
    <>
      <Flex direction="column">
        <MenuLink title="My Forms" link="/dashboard/forms" />
        <MenuLink title="Payments" link="#" />
        <Divider />
        <MenuLink title="Settings" link="/account/settings" />
        <Divider />
        <MenuLink title="Docs" link="#" />
        <Text fontSize="lg" padding="0.6rem 0">
          <Logout />
        </Text>
      </Flex>
    </>
  )
}
