import { useContext } from "react"
import {
  Box,
  Button,
  useColorModeValue,
  useMediaQuery,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import userContext from "./../../context/userContext"
import { HiPlusCircle } from "react-icons/hi"
import FormList from "./FormList"
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
            as={Link}
            to="/dashboard/forms/new"
            leftIcon={<HiPlusCircle />}
            colorScheme="orange"
            shadow="base"
            onClick={onOpen}
          >
            Create Form
          </Button>
        ) : (
          <IconButton
            as={Link}
            to="/dashboard/forms/new"
            icon={<HiPlusCircle />}
            colorScheme="orange"
            shadow="base"
            onClick={onOpen}
          />
        )}
      </DashboardHeader>
      <FormList />
    </Box>
  )
}
export default Dashboard
