import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import userContext from "./../../context/userContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(userContext)
  return (
    <Route
      {...rest}
      // Todo - This could be better. Make sure page survives refresh
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  )
}

export default PrivateRoute
