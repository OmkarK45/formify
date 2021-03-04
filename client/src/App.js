import { useState, useEffect } from "react"
import { Header } from "./components/Layout/"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Hero } from "./components/Home/"
import { GET } from "./utils/network"
import { Auth, ForgotPassword, ResetPassword } from "./components/Auth"
import userContext from "./context/userContext"
import PrivateRoute from "./components/Utils/PrivateRoute"
import Dashboard from "./components/Dashboard/Dashboard"
import FormDetails from "./components/Dashboard/FormDetails"
import Footer from "./components/Layout/Footer"
import AccountSettings from "./components/User/AccountSettings"
import { QueryClient, QueryClientProvider } from "react-query"
import VerificationEmailSent from "./components/Auth/VerificationEmailSent"
import EmailVerified from "./components/Auth/EmailVerified"
import CreateNewForm from "./components/Dashboard/CreateNewForm"

const queryClient = new QueryClient()

const App = () => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    userID: null,
    username: null,
    email: null,
    isLoading: true,
  })
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        await GET(process.env.REACT_APP_BACKEND + "/api/auth/user", {
          withCredentials: true,
        })
          .then((userRes) => {
            setUser({
              userID: userRes.data.userID,
              isAuthenticated: true,
              username: userRes?.data.username,
              email: userRes?.data.email,
              isLoading: false,
            })
          })
          .catch(() => {
            setUser(null)
          })
      } catch (error) {
        setUser(null)
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
              <Route
                path="/auth/forgotPassword"
                exact
                component={ForgotPassword}
              />
              <Route
                path="/auth/emailsent"
                exact
                component={VerificationEmailSent}
              />
              <Route
                path="/auth/emailverification/:verificationToken"
                exact
                component={EmailVerified}
              />
              <Route
                path="/auth/resetpassword/:resetToken"
                exact
                component={ResetPassword}
              />
              <PrivateRoute
                path="/dashboard/forms"
                exact
                component={Dashboard}
              />
              <PrivateRoute
                path="/dashboard/forms/new"
                exact
                component={CreateNewForm}
              />
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
