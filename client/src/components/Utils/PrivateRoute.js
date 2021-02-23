import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import userContext from "./../../context/userContext"
import { Progress } from "@chakra-ui/react"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(userContext)
  return (
    <Route
      {...rest}
      children={(props) =>
        !user?.isLoading ? (
          user ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth" />
          )
        ) : (
          <Progress colorScheme="orange" size="xs" isIndeterminate />
        )
      }
    />
  )
}

export default PrivateRoute
