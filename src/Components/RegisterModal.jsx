import { useDispatch, useSelector } from "react-redux";
import { modalRegisterClose } from '../actions/modalNavbarActions';
import {Modal , Button} from 'react-bootstrap';

const RegisterModal = () => {
  const dispatch = useDispatch();
  const modalRegister = useSelector((state) =>  state.modalRegister);
  const { showRegister } = modalRegister ;

  const handleClose = () => {
    dispatch(modalRegisterClose())
  }

  return (
    <>
      <Modal show={ showRegister } onHide={handleClose}>
      <div style={{ padding: "41px 33px" }}>
          <div>
            <h2 style={customTitle}>Register</h2>
          </div>
          <div style={{ marginTop: "29px" }}>
            <input
              class="form-control-lg"
              style={customBox}
              type="text"
              placeholder="Email"
            ></input>
            <input
              class="form-control-lg"
              style={customBox}
              type="text"
              placeholder="Password"
            ></input>
            <input
              class="form-control-lg"
              style={customBox}
              type="text"
              placeholder="Full Name"
            ></input>
          </div>
          <div>
            <Button variant="primary" style={{ width: "100%" }}>
              <span
                style={{
                  fontWeight: "900",
                  fontSize: "18px",
                  lineHeight: "25px",
                }}
              >
                Register
              </span>
            </Button>
            <h5
              className="text-center"
              style={{
                marginTop: "20px",
                fontSize: "18px",
                lineHeight: "25px",
                color: "black",
              }}
            >
              Already have an account ? <a href="/">Klik Here</a>
            </h5>
          </div>
        </div>
      </Modal>
    </>
  );
};

const customBox = {
    minWidth: "100%",
    marginBottom: "20px",
    background: "rgba(97, 61, 43, 0.25)",
    border: "2px solid #613D2B",
    boxSizing: "border-box",
    borderRadius: "5px",
  };
  
  const customTitle = {
    fontWeight: "900",
    fontSize: "36px",
    lineHeight: "49px",
    color: "#613D2B",
  };

export default RegisterModal;
