import { Flex, Link, Text, useToast } from "@chakra-ui/react"
import { useContext } from "react"
import { FiLogOut } from "react-icons/fi"
import { useHistory } from "react-router-dom"

import { POST } from "../../utils/network"
import userContext from "./../../context/userContext"

const Logout = (props) => {
  const { setUser } = useContext(userContext)
  const history = useHistory()
  const toast = useToast()

  const handleLogout = async () => {
    await POST(process.env.REACT_APP_BACKEND + "/api/auth/logout", {
      withCredentials: true,
    })
      .then(() => {
        toast({
          title: "Successfully logged out.",
          status: "info",
        })
        setUser({
          userID: null,
          isAuthenticated: false,
        })
      })
      .catch((error) => {
        toast({
          title: "Some error occured while logging out",
          status: "error",
        })
      })

    history.push("/")
  }

  return (
    <Link _hover={{ textDecoration: "none" }} onClick={handleLogout}>
      <Flex>
        <FiLogOut d="inline" fontSize="1.2rem" />
        <Text ml={3}>Logout</Text>
      </Flex>
    </Link>
  )
}

export default Logout
