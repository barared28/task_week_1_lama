import { Toast } from "react-bootstrap";
import "./styles/toast.scss";

function ToastComponet({
  show,
  text,
  variant = "success",
  setShow,
  delay = 3000,
}) {
  return (
    <Toast
      className={`bg-${variant} c-toast-container`}
      onClose={() => setShow(false)}
      show={show}
      delay={delay}
      autohide
    >
      <Toast.Body>
        <h6 className="text-white m-0">{text}</h6>
      </Toast.Body>
    </Toast>
  );
}

export default ToastComponet;
