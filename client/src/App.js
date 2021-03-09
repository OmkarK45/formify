import {
  Auth,
  EmailVerified,
  ForgotPassword,
  ResetPassword,
  VerificationEmailSent,
} from "@components/Auth"
import { CreateNewForm, Dashboard } from "@components/Dashboard/"
import { FormDetails } from "@components/Form"
import { Main } from "@components/Home"
import { Footer, Nav } from "@components/Layout/"
import { AccountSettings } from "@components/User/"
import { PrivateRoute } from "@components/Utils"
import NotFound from "@components/Utils/NotFound"
import { GET } from "@utils/network"
import { useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import userContext from "./context/userContext"

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
            <Nav />
            <Switch>
              <Route path="/" exact component={Main}></Route>
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
              <Route component={NotFound} />
            </Switch>
          </Router>
          <Footer />
        </userContext.Provider>
      </QueryClientProvider>
    </>
  )
}

export default App
