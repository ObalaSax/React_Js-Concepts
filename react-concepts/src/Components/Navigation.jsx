import Logo from "../assets/logo.svg";

function Navigation() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" />
      <ul className="navbar-links">
        <li>
          <a href="#">Calculator</a>
        </li>
        <li>
          <a href="#">Todo App</a>
        </li>
        <li>
          <a href="#">Increment</a>
        </li>
        <li>
          <a href="#">Basic Authentication</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
