import { useDispatch, useSelector } from "react-redux";
import { modalRegisterClose } from "../actions/modalNavbarActions";
import { Modal, Button } from "react-bootstrap";
import "./styles/modal.scss";

const RegisterModal = () => {
  const dispatch = useDispatch();
  const modalRegister = useSelector((state) => state.modalRegister);
  const { showRegister } = modalRegister;

  const handleClose = () => {
    dispatch(modalRegisterClose());
  };

  return (
    <>
      <Modal show={showRegister} onHide={handleClose}>
        <div className="c-modal-container">
          <div>
            <h2 className="c-modal-title">Register</h2>
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
            <input
              className="form-control-lg c-modal-box"
              type="text"
              placeholder="Full Name"
            ></input>
          </div>
          <div>
            <Button variant="primary" className="c-modal-button">
              <span className="c-modal-button-text">Register</span>
            </Button>
            <h5 className="text-center c-modal-text">
              Already have an account ? <a href="/">Klik Here</a>
            </h5>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RegisterModal;
