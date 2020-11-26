import { useEffect, useContext } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { GlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
import trash from "../../Images/trash.png";
import "../styles/cartList.scss";

function ProductList({ products, dispatch, totalCart, state }) {
  const onAdd = (id) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id },
    });
  };
  const onDesc = (id, qty) => {
    if (qty > 1) {
      dispatch({
        type: "DESC_TO_CART",
        payload: { id },
      });
    } else {
      dispatch({
        type: "REMOVE_TO_CART",
        payload: { id },
      });
    }
  };
  const onDelete = (id) => {
    dispatch({
      type: "REMOVE_TO_CART",
      payload: { id },
    });
  };
  if (products.length > 0) {
    return products.map((product) => {
      return (
        <>
          <Template
            product={product}
            onDelete={onDelete}
            onDesc={onDesc}
            totalCart={totalCart}
            onAdd={onAdd}
          />
        </>
      );
    });
  } else {
    return (
      <>
        <div className="mt-2 w-100 border border-dark"></div>
        <div className="my-3"></div>
      </>
    );
  }
}

const Template = ({ product, onDelete, onDesc, totalCart, onAdd }) => {
  return (
    <Row>
      <Col sm={12} md={8} lg={8} xl={8}>
        <div className="pl-0 pl-md-5">
          <div className="mt-2 w-100 border border-dark"></div>
          <div className="my-3">
            {product ? (
              <div className="d-flex flex-row my-2" key={product.id}>
                <img
                  src={product.photo}
                  alt={product.id}
                  className="c-cart-list-product-img"
                />
                <div className="ml-3">
                  <h3 className="c-cart-list-product-title">{product.name}</h3>
                  <div className="d-flex flex-row mt-3">
                    <button
                      className="py-1 mr-2 mb-0 btn"
                      onClick={() => onDesc(product.id, product.qty)}
                    >
                      -
                    </button>
                    <div>
                      <p className="bg-secondary rounded-lg py-1 px-2 mr-2 mb-0">
                        {product.qty}
                      </p>
                    </div>
                    <button
                      className="py-1 mb-0 btn"
                      onClick={() => onAdd(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="ml-auto">
                  <p className="c-cart-list-product-price">
                    Rp.{+product.price * +product.qty}
                  </p>
                  <img
                    className="float-right btn"
                    src={trash}
                    alt="delete"
                    onClick={() => onDelete(product.id)}
                  />
                </div>
              </div>
            ) : (
              <di>
                <p className="c-cart-list-product-price font-weight-bold">
                  Tidak ada Product dalam Cart
                </p>
              </di>
            )}
          </div>

          <div className="mt-2 w-100 border border-dark"></div>
        </div>
      </Col>
      <Col className="mt-2" sm={12} md={4} lg={4} xl={4}>
        <div className="w-100 border border-dark"></div>
        <div className="d-flex flex-row mt-3">
          <p className="c-cart-list-product-price">Subtotal</p>
          <p className="c-cart-list-product-price ml-auto">
            Rp.{totalCart.subtotal}
          </p>
        </div>
        <div className="d-flex flex-row mb-1">
          <p className="c-cart-list-product-price">Qty</p>
          <p className="c-cart-list-product-price ml-auto">{totalCart.qty}</p>
        </div>
        <div className="w-100 border border-dark"></div>
        <div className="d-flex flex-row mt-3">
          <p className="c-cart-list-product-price font-weight-bold">Total</p>
          <p className="c-cart-list-product-price font-weight-bold ml-auto">
            Rp.{totalCart.total}
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default ProductList;
