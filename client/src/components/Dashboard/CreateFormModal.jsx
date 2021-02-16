import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Heading,
  Box,
  Flex,
  ModalFooter,
  useColorModeValue,
} from "@chakra-ui/react"
import { AiOutlineFileAdd } from "react-icons/ai"
import CreateFormForm from "./CreateFormForm"

export default function CreateFormModal({ isOpen, onOpen, onClose }) {
  const modalFooterBg = useColorModeValue("gray.50", "gray.900")
  const iconBg = useColorModeValue("orange.100", "orange.700")
  const iconColor = useColorModeValue("orange.600", "orange.400")
  return (
    <>
      <Modal borderRadius="0.5rem" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="400">
            <Flex align="center">
              <Flex
                align="center"
                justify="center"
                h={10}
                mr="2"
                borderRadius="50%"
                w={10}
                bg={iconBg}
                color={iconColor}
              >
                <AiOutlineFileAdd fontSize="1.3rem" />
              </Flex>
              <Text fontWeight="600">Create New Form</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateFormForm />
          </ModalBody>

          <ModalFooter bg={modalFooterBg}>
            <Button type="submit" mr={3} colorScheme="orange" fontWeight="400">
              Create
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
