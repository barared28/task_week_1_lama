import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialData = {
  isLogin: false,
  ProductsCart: [],
  totalCart: {
    subtotal: 0,
    qty: 0,
    total: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const filterExistedProduct = state.ProductsCart.filter(
        (product) => product.id === action.payload.id
      );
      if (filterExistedProduct.length > 0) {
        return {
          ...state,
          ProductsCart: state.ProductsCart.map((product) => {
            if (product.id === action.payload.id) {
              return { ...product, qty: (product.qty += 1) };
            } else {
              return product;
            }
          }),
        };
      }
      return {
        ...state,
        ProductsCart: [...state.ProductsCart, { ...action.payload, qty: 1 }],
      };
    case "DESC_TO_CART":
      return {
        ...state,
        ProductsCart: state.ProductsCart.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, qty: (product.qty -= 1) };
          } else {
            return product;
          }
        }),
      };
    case "REMOVE_TO_CART":
      return {
        ...state,
        ProductsCart: state.ProductsCart.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "GET_TOTAL_CART":
      if (state.ProductsCart.length > 0) {
        let subtotal = 0, qty = 0, total = 0;
        state.ProductsCart.forEach((product) => {
          subtotal += +product.price;
          qty += +product.qty;
          total += +product.price * +product.qty;
        });
        return {
          ...state,
          totalCart: { subtotal, qty, total },
        };
      } else {
        return state;
      }
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};
