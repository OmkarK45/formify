import { useContext } from "react"
import {
  Box,
  Flex,
  Button,
  Heading,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import userContext from "./../../context/userContext"
import { HiPlusCircle } from "react-icons/hi"
import Footer from "./../Layout/Footer"
import FormList from "./FormList"
import CreateFormModal from "./CreateFormModal"

const Dashboard = () => {
  const { user } = useContext(userContext)
  const bg = useColorModeValue("gray.200", "gray.800")
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log({ isOpen, onOpen })
  return (
    <Box>
      <Box bg={bg}>
        <Flex
          maxW="80%"
          m="0 auto"
          p="2rem 0 2rem"
          align="center"
          justify="space-between"
        >
          <Heading>Forms</Heading>
          <Box>
            <Button
              leftIcon={<HiPlusCircle />}
              colorScheme="orange"
              shadow="base"
              onClick={onOpen}
            >
              Create Form
            </Button>
          </Box>
        </Flex>
      </Box>

      <CreateFormModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <FormList />
      <Footer />
    </Box>
  )
}
export default Dashboard
