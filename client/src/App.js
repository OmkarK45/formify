import { useState, useEffect } from "react"
import { Header } from "./components/Layout/"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"
import { Hero } from "./components/Home/"
import { GET } from "./utils/network"
import { Auth } from "./components/Auth"
import userContext from "./context/userContext"
import PrivateRoute from "./components/Utils/PrivateRoute"
import Dashboard from "./components/Dashboard/Dashboard"
import FormDetails from "./components/Dashboard/FormDetails"
import Footer from "./components/Layout/Footer"
import AccountSettings from "./components/User/AccountSettings"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient()

const App = () => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    userID: null,
    username: null,
    email: null,
  })
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        await GET(process.env.REACT_APP_BACKEND + "/api/auth/user", {
          withCredentials: true,
        }).then((userRes) => {
          setUser({
            userID: userRes.data.userID,
            isAuthenticated: true,
            username: userRes?.data.username,
            email: userRes?.data.email,
          })
        })
      } catch (error) {
        setUser({
          userID: null,
          isAuthenticated: false,
          username: null,
          email: null,
        })
      }
    }
    checkLoggedIn()
  }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <userContext.Provider value={{ user, setUser }}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Hero}></Route>
              <Route path="/auth" exact component={Auth} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute
                path="/account/settings"
                exact
                component={AccountSettings}
              />
              <PrivateRoute
                path="/dashboard/forms/:formID"
                exact
                component={FormDetails}
              />
            </Switch>
          </Router>
          <Footer />
        </userContext.Provider>
      </QueryClientProvider>
    </>
  )
}

export default App
