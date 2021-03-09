import {
  Box,
  Button,
  IconButton,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react"
import { useContext } from "react"
import { HiPlusCircle } from "react-icons/hi"
import { Link } from "react-router-dom"

import { DashboardHeader } from "."
import { FormList } from "../Form"
import userContext from "./../../context/userContext"

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
