import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" />
      <ul className="navbar-links">
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/todo-app">Todo App</Link>
        </li>
        <li>
          <Link to="/increment-app">Increment App</Link>
        </li>
        <li>
          <Link>Basic Authentication</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
