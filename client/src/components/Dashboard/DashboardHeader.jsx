import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react"
import { HiChevronRight } from "react-icons/hi"
import { Link } from "react-router-dom"

export default function DashboardHeader({ title, children }) {
  const bg = useColorModeValue("gray.200", "gray.800")

  return (
    <>
      <Box bg={bg}>
        <Flex
          maxW={["90%", "80%"]}
          m="0 auto"
          pb="2rem"
          pt="2rem"
          align="center"
          justify="space-between"
          wrap="wrap"
        >
          <Flex direction="column">
            <Breadcrumb
              mb="0.6rem"
              spacing="8px"
              color="gray.500"
              separator={<HiChevronRight />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/dashboard/forms">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>

              {title ? (
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to="#">
                    {title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : null}
            </Breadcrumb>
            <Heading>{title}</Heading>
          </Flex>
          <Box>{children}</Box>
        </Flex>
      </Box>
    </>
  )
}
