import {
  Box,
  Text,
  Button,
  useColorModeValue,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react"
import ModalAlert from "./../Utils/Modal"
import { AiOutlineWarning } from "react-icons/ai"
import Update from "./Update"
export default function Profile() {
  const bg = useColorModeValue("gray.100", "gray.800")
  return (
    <Box>
      <Box bg={bg} borderRadius="13px" shadow="base">
        <Box pl="1rem" pt="1rem">
          <Text fontSize="2xl" fontWeight="600">
            Profile
          </Text>
          <Text color="gray.500">
            You can view or change existing profile settings. Make sure to save
            your settings after making changes.
          </Text>
        </Box>
        <Box mt="1rem">
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
        </Box>
      </Box>
      <Box bg={bg} shadow="base" borderRadius="13px" marginTop="1rem">
        <Box pl="1rem" pt="1rem">
          <Text fontSize="2xl" fontWeight="600">
            Danger Zone
          </Text>
          <Text color="gray.500">
            Proceed only if you know what are you doing.
          </Text>
        </Box>
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
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}
