export const Login = (state = false, action) => {
  switch (action.type) {
    case "SHOWING_MODAL_LOGIN":
      return { showLogin: true };
    case "CLOSE_MODAL_LOGIN":
      return { showLogin: false };
    default:
      return state;
  }
};

export const Register = (state = false, action) => {
  switch (action.type) {
    case "SHOWING_MODAL_REGISTER":
      return { showRegister: true };
    case "CLOSE_MODAL_REGISTER":
      return { showRegister: false };
    default:
      return state;
  }
};
