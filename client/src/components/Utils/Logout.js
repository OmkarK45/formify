import { useContext } from "react"
import { Link, useToast } from "@chakra-ui/react"
import userContext from "./../../context/userContext"
import { useHistory } from "react-router-dom"
import { POST } from "../../utils/network"
const Logout = () => {
  const { setUser } = useContext(userContext)
  const history = useHistory()
  const toast = useToast()

  const handleLogout = async () => {
    await POST(process.env.REACT_APP_BACKEND + "/api/auth/logout", {
      withCredentials: true,
    })
    toast({
      title: "Successfully logged out.",
      status: "info",
    })
    setUser({
      userID: null,
      isAuthenticated: false,
    })
    history.push("/")
  }

  return (
    <Link
      variant="link"
      textColor="inherit"
      fontWeight="normal"
      _hover={{ textDecoration: "none" }}
      onClick={handleLogout}
    >
      Logout
    </Link>
  )
}

export default Logout
