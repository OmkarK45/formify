import {
  Box,
  Text,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  VStack,
} from "@chakra-ui/react"
import ModalAlert from "./../Utils/Modal"
import { AiOutlineWarning } from "react-icons/ai"
import Update from "./Update"
import Setting from "./../Dashboard/Setting"
export default function Profile() {
  const handleAccountDelete = () => {}
  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Box h="40px" bg="yellow.200">
          1
        </Box>
        <Box h="40px" bg="tomato">
          2
        </Box>
        <Box h="40px" bg="pink.100">
          3
        </Box>
      </VStack>
      <Setting
        settingTitle="Profile"
        settingDescription="You can view or change existing profile settings. Make sure to save your settings after making changes."
      >
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td color="gray.500">Username</Td>
              <Td fontWeight="500">Omkar</Td>
              <Td>
                <Update
                  updateTitle="Update Username"
                  colorScheme="orange"
                  variant="outline"
                />
              </Td>
            </Tr>
            <Tr>
              <Td color="gray.500">Password</Td>
              <Td fontWeight="500">•••••</Td>
              <Td>
                <Update
                  updateTitle="Update Password"
                  colorScheme="orange"
                  variant="outline"
                />
              </Td>
            </Tr>
            <Tr>
              <Td color="gray.500">Email</Td>
              <Td fontWeight="500">example@example.com</Td>
              <Td>
                <Update
                  updateTitle="Update Email"
                  colorScheme="orange"
                  variant="outline"
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Setting>
      <Setting
        settingTitle="Danger Zone"
        settingDescription="Proceed only if you know what are you doing."
      >
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>
                <ModalAlert
                  leftIcon={<AiOutlineWarning />}
                  buttonTitle="Deactivate Account"
                  buttonColorScheme="red"
                  modalTitle="Deactivate account"
                  modalContent="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
                  modalStatus="danger"
                  buttonAction="Delete"
                  handleAccountDelete={handleAccountDelete}
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Setting>
    </Box>
  )
}
