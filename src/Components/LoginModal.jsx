import { useDispatch, useSelector } from "react-redux";
import { modalLoginClose } from "../actions/modalNavbarActions";
import { Modal, Button } from "react-bootstrap";
import "./styles/modal.scss";

function LoginModal() {
  const dispatch = useDispatch();
  const modalLogin = useSelector((state) => state.modalLogin);
  const { showLogin } = modalLogin;

  const handleClose = () => {
    dispatch(modalLoginClose());
  };

  return (
    <>
      <Modal show={showLogin} onHide={handleClose}>
        <div className="c-modal-container">
          <div>
            <h2 className="c-modal-title">Login</h2>
          </div>
          <div className="mt-4">
            <input
              className="form-control-lg c-modal-box"
              type="text"
              placeholder="Email"
            ></input>
            <input
              className="form-control-lg c-modal-box"
              type="text"
              placeholder="Password"
            ></input>
          </div>
          <div>
            <Button className="c-modal-button" variant="primary">
              <span className="c-modal-button-text">Login</span>
            </Button>
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
