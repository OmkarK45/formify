import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  ModalHeader,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react"
import { AiOutlineFileAdd } from "react-icons/ai"
export default function ModalAlert({
  buttonTitle,
  buttonColorScheme,
  modalContent,
  modalTitle,
  modalStatus,
  leftIcon,
  buttonAction,
  buttonVarient,
  handleAccountDelete,
  ...props
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalFooterBg = useColorModeValue("gray.50", "gray.900")
  const iconBg = useColorModeValue("orange.100", "orange.700")
  const iconColor = useColorModeValue("orange.600", "orange.400")
  return (
    <>
      <Button
        colorScheme={buttonColorScheme}
        onClick={onOpen}
        variant={buttonVarient}
        m={0}
        {...props}
      >
        {buttonTitle}
      </Button>

      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex align="center">
              <Text fontWeight="600">{modalTitle}</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{modalContent}</Text>
          </ModalBody>

          <ModalFooter bg={modalFooterBg}>
            <Button
              type="submit"
              mr={3}
              colorScheme={modalStatus === "danger" ? "red" : "orange"}
              fontWeight="400"
              onClick={handleAccountDelete}
            >
              {buttonAction}
            </Button>
            <Button border="1px solid" borderColor="gray.300" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
