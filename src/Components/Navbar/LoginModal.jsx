import { useState } from "react";
import { Modal } from "react-bootstrap";
import "../styles/modal.scss";

const initialUser = {
  email: "admin@admin.com",
  pass: "123",
};

function LoginModal({ show, cb, dispatch }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleClose = () => {
    cb(false);
  };
  const onLogin = () => {
    if (email === initialUser.email && pass === initialUser.pass) {
      dispatch({
        type: "LOGIN",
      });
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className="c-modal-container">
            <div>
              <h2 className="c-modal-title">Login</h2>
            </div>
            <div className="mt-4">
              <input
                className="form-control-lg c-modal-box"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                className="form-control-lg c-modal-box"
                type="text"
                placeholder="Password"
                name="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              ></input>
            </div>
            <div>
              <button
                className="c-modal-button btn btn-primary"
                onClick={onLogin}
              >
                <span className="c-modal-button-text">Login</span>
              </button>
              <h5 className="text-center c-modal-text">
                Don't have an account ? <a href="/">Klik Here</a>
              </h5>
            </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
