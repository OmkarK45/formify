import { Box, Heading, Text, Input, Button } from "@chakra-ui/react"
import ModalAlert from "./../Utils/Modal"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import { AiOutlineWarning } from "react-icons/ai"
export default function Profile() {
  return (
    <>
      <Box>
        <Text fontSize="2xl" fontWeight="600">
          Profile
        </Text>
        <Text color="gray.500">
          You can view or change existing profile settings. Make sure to save
          your settings after making changes.
        </Text>
      </Box>
      <Box mt="2rem">
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td color="gray.500">Username</Td>
              <Td fontWeight="500">Omkar</Td>
              <Td>
                <Button colorScheme="orange" variant="outline">
                  Update
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td color="gray.500">Password</Td>
              <Td fontWeight="500">•••••</Td>
              <Td>
                <Button colorScheme="orange" variant="outline">
                  Update
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td color="gray.500">Email</Td>
              <Td fontWeight="500">example@example.com</Td>
              <Td>
                <Button colorScheme="orange" variant="outline">
                  Update
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <ModalAlert
                  leftIcon={<AiOutlineWarning />}
                  buttonTitle="Deactivate Account"
                  buttonColorScheme="red"
                  modalTitle="Deactivate account"
                  modalContent="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
                  modalStatus="danger"
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  )
}
