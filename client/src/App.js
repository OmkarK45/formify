import Header from "./components/Layout/Header";
import Hero from "./components/Home/Hero";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import Auth from "./components/Auth/Auth";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Hero}></Route>
          <Route path="/auth" exact component={Auth}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
