import { useState } from "react";
import { Button } from "react-bootstrap";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

import "../styles/navbar.scss";

function NotLogin({ dispatch }) {
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
      <LoginModal show={modalLogin} cb={showModalLogin} dispatch={dispatch} />
      <RegisterModal
        show={modalRegister}
        cb={showModalRegister}
        dispatch={dispatch}
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

export default NotLogin;
