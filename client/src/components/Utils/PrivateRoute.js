import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import userContext from "./../../context/userContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(userContext)
  console.log("Im hit")
  console.log(user)
  return (
    <Route
      {...rest}
      // Todo - This could be better. Make sure page survives refresh
      children={(props) =>
        !user?.isLoading ? (
          user ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth" />
          )
        ) : (
          "Loading"
        )
      }
    />
  )
}

export default PrivateRoute
