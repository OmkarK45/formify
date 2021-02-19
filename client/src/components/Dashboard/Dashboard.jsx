import { useContext } from "react"
import {
  Box,
  Flex,
  Button,
  Heading,
  useColorModeValue,
  useMediaQuery,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react"
import userContext from "./../../context/userContext"
import { HiPlusCircle } from "react-icons/hi"
import Footer from "./../Layout/Footer"
import FormList from "./FormList"
import CreateFormModal from "./CreateFormModal"
import DashboardHeader from "./DashboardHeader"

const Dashboard = () => {
  const { user } = useContext(userContext)
  const bg = useColorModeValue("gray.200", "gray.800")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery("(min-width:768px)")
  return (
    <Box>
      <DashboardHeader title="Your Forms">
        {isMobile ? (
          <Button
            leftIcon={<HiPlusCircle />}
            colorScheme="orange"
            shadow="base"
            onClick={onOpen}
          >
            Create Form
          </Button>
        ) : (
          <IconButton
            icon={<HiPlusCircle />}
            colorScheme="orange"
            shadow="base"
            onClick={onOpen}
          />
        )}
      </DashboardHeader>
      <CreateFormModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <FormList />
    </Box>
  )
}
export default Dashboard
