import { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Home/Hero";
import Auth from "./components/Auth/Auth";
import userContext from "./context/userContext";

const App = () => {
  const [user, setUser] = useState({
    authToken: null,
    isAuthenticated: false,
    userID: null,
  });
  return (
    <userContext.Provider value={{ user, setUser }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Hero}></Route>
          <Route path="/auth" exact component={Auth}></Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
};

export default App;
