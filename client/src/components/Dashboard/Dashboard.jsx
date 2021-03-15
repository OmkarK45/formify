import { Box, Button, IconButton, useMediaQuery } from "@chakra-ui/react"
import { HiPlusCircle } from "react-icons/hi"
import { Link } from "react-router-dom"

import { DashboardHeader } from "."
import { FormList } from "../Form"
import SEO from "../SEO/SEO"

const Dashboard = () => {
  const [isMobile] = useMediaQuery("(min-width:768px)")
  return (
    <Box>
      <SEO title="Your Forms | Formify" />
      <DashboardHeader title="Your Forms">
        {isMobile ? (
          <Button
            as={Link}
            to="/dashboard/forms/new"
            leftIcon={<HiPlusCircle />}
            colorScheme="orange"
            shadow="base"
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
          />
        )}
      </DashboardHeader>
      <FormList />
    </Box>
  )
}
export default Dashboard
