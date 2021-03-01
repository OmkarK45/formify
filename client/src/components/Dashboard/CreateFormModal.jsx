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
import { useState } from "react"

export default function CreateFormModal({ isOpen, onOpen, onClose }) {
  const modalFooterBg = useColorModeValue("gray.50", "gray.900")
  const iconBg = useColorModeValue("orange.100", "orange.700")
  const iconColor = useColorModeValue("orange.600", "orange.400")

  const [data, setData] = useState({
    formName: "",
    email: "",
  })

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="400">
            <Text fontWeight="600">Create New Form</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateFormForm
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              data={data}
              onClose={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
