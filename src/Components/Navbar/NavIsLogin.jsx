import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import cart from "../../Images/cart.png";
import user from "../../Images/user.png";
import logout from '../../Images/logout.png'
import profile from '../../Images/userIcon.png'
import "../styles/navbar.scss";

function Login() {
  const [state , dispatch] = useContext(GlobalContext);
  const numProduct = state.ProductsCart.length;
  const onLogout = () => {
    dispatch({
      type : "LOGOUT"
    })
  };
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
          <NavDropdown.Item className='d-flex flex-row'>
            <img src={profile} alt="profile" className='c-navbar-logout-icon mr-3 my-auto' />
            <h6 className="my-auto font-weight-bold">Profile</h6>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className='d-flex flex-row' onClick={onLogout}>
            <img className='c-navbar-logout-icon mr-3 my-auto' src={logout} alt='logout' />
            <h6 className="my-auto font-weight-bold">Logout</h6>
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  );
}

export default Login;
