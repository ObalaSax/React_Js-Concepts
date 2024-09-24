import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

import { BrowserRouter as Route, Switch } from "react-router-dom";
//import Calculator from "./Pages/Calculator.jsx";
//import Increment from "./Pages/Increment.jsx";
//import TodoApp from "./Pages/TodoApp.jsx";
import NoPage from "../Pages/NoPage.jsx";

function Navigation() {
  return (
    <Route>
      {" "}
      <div className="navbar">
        <img src={Logo} alt="Logo" />
        <ul className="navbar-links">
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Increment-app">Increment-app</Link>
          </li>
          <li>
            <Link to="/Todo-App">Todo-App</Link>
          </li>
          <li>
            <Link to="auth">Basic Authentication</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/calculator" component={NoPage} />
      </Switch>
    </Route>
  );
}

export default Navigation;
