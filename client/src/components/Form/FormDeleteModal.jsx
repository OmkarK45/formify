import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { useHistory } from "react-router-dom"

import { POST } from "../../utils/network"

export default function FormDeletModal({ formID }) {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const [buttonLoading, setButtonLoading] = useState(false)
  const toast = useToast()
  const history = useHistory()
  async function handleFormDelete() {
    setButtonLoading(true)
    try {
      const response = await POST(
        process.env.REACT_APP_BACKEND + `/api/forms/${formID}/delete`,
        {
          formID,
        },
        {
          withCredentials: true,
        }
      )
      if (response.status === 200) {
        setButtonLoading(false)
        toast({
          title: "Form deleted !",
          status: "info",
        })
        return history.goBack()
      }
    } catch (error) {
      setButtonLoading(false)
      toast({
        title: "Something went wrong",
        status: "error",
      })
    }
  }
  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete this form ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            All submissions data associated with this form will be deleted. This
            cannot be undone.
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleFormDelete}
              loadingText="Deleting..."
              isLoading={buttonLoading}
              colorScheme="red"
              mr={3}
            >
              Delete
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
