import { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/Icon.png";
import { GlobalContext } from "../../Context/GlobalContext";
import Login from "./NavIsLogin";
import NotLogin from "./NavNotLogin";
import "../styles/navbar.scss";

function NavbarComponent() {
  const [state, dispatch] = useContext(GlobalContext);
  const { isLogin } = state;
  return (
    <div className="c-navbar-margin">
      <Navbar bg="light" fixed="top" className="c-navbar-shadow" expand="sm">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isLogin ? (
              <Login dispatch={dispatch} />
            ) : (
              <NotLogin dispatch={dispatch} />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
