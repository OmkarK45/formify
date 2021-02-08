import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import userContext from "./../../context/userContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(userContext)
  console.log("Im inside private route", user)
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  )
}

export default PrivateRoute
