import { useState, useEffect } from "react";
import { Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import logo from "../Images/Icon.png";
import cart from "../Images/cart.png";
import user from "../Images/user.png";
import "./styles/navbar.scss";

function NavbarComponent() {
  const [login, setLogin] = useState(
    JSON.parse(window.localStorage.getItem("isLogin")) || false
  );
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
            {login ? (
              <Login setLogin={setLogin} />
            ) : (
              <NotLogin setLogin={setLogin} />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

function NotLogin({ setLogin }) {
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
      <LoginModal show={modalLogin} cb={showModalLogin} setLogin={setLogin} />
      <RegisterModal
        show={modalRegister}
        cb={showModalRegister}
        setLogin={setLogin}
      />
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
  const [numProduct, setNumProduct] = useState(
    window.localStorage.getItem("ProductsCart").length || 0
  );
  useEffect(() => {
    (async function () {
      try {
        const productCart = await JSON.parse(
          window.localStorage.getItem("ProductsCart")
        );
        setNumProduct(productCart.length);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [numProduct]);
  const onLogout = () => {
    window.localStorage.setItem('isLogin', false);
  }
  return (
    <div className="ml-sm-auto d-flex justify-content-center flex-sm-row  ">
      <div className="ml-3 my-1 my-sm-0  align-self-center">
        <Link to="/cart">
          <div>
            {numProduct > 0 && (
              <div className="c-navbar-cart-number ml-4">
                <p className="rounded-circle px-1">{numProduct}</p>
              </div>
            )}
            <img src={cart} alt="cart" />
          </div>
        </Link>
      </div>
      <div className="ml-4 my-1 my-sm-0 ">
        <NavDropdown
          title={
            <img
              className="rounded-circle c-navbar-profile"
              src={user}
              alt="user"
            />
          }
        >
          <NavDropdown.Item>Separated link</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/" onClick={onLogout}>Logout</NavDropdown.Item>
        </NavDropdown>

        {/* <a href="/">
          <img
            className="rounded-circle c-navbar-profile"
            src={user}
            alt="user"
          />
        </a> */}
      </div>
    </div>
  );
}

export default NavbarComponent;
