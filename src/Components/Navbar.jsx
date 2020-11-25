import { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import logo from "../Images/Icon.png";
import cart from "../Images/cart.png";
import user from "../Images/user.png";
import "./styles/navbar.scss";

function NavbarComponent({ login = false }) {
  return (
    <div className="c-navbar-shadow">
      <Navbar bg="light" expand="sm">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {login ? <Login /> : <NotLogin />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

function NotLogin() {
  const [modalLogin, showModalLogin] = useState(false);
  const [modalRegister, showModalRegister] = useState(false);

  const onLogin = () => {
    showModalLogin(true);
  };
  const onRegister = () => {
    showModalRegister(true);
  };
  return (
    <div className="ml-sm-auto my-2 d-flex flex-column justify-content-center flex-sm-row  ">
      <LoginModal show={modalLogin} cb={showModalLogin} />
      <RegisterModal show={modalRegister} cb={showModalRegister} />
      <div className="ml-3 my-1 d-flex justify-content-center">
        <Button variant="outline-primary" onClick={onLogin}>
          Login
        </Button>
      </div>
      <div className="ml-3 my-1 d-flex justify-content-center">
        <Button onClick={onRegister}>Register</Button>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="ml-sm-auto d-flex justify-content-center flex-sm-row  ">
      <div className="ml-3 my-1 my-sm-0  align-self-center">
        <a href="/">
          <img src={cart} alt="cart" />
        </a>
      </div>
      <div className="ml-4 my-1 my-sm-0 ">
        <a href="/">
          <img
            className="rounded-circle c-navbar-profile"
            src={user}
            alt="user"
          />
        </a>
      </div>
    </div>
  );
}

export default NavbarComponent;
