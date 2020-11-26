import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Row, Col, Form } from "react-bootstrap";
import "./styles/shipping.scss";

function Shipping() {
  const [state] = useContext(GlobalContext);
  return (
    <Row>
      <Col sm={12} md={6} lg={6} xl={6}>
        <h2 className="text-primary font-weight-bold">Shipping</h2>
        <div className="mt-5">
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name"
                className="c-shipping-box"
              />
              <Form.Control
                type="email"
                placeholder="Email"
                className="c-shipping-box"
              />
              <Form.Control
                type="number"
                placeholder="Phone"
                className="c-shipping-box"
              />
              <Form.Control
                type="text"
                placeholder="Poss Code"
                className="c-shipping-box"
              />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Address"
                className="c-shipping-box"
              />
              <Form.File
                id="exampleFormControlFile1"
                label="Attache of transaction"
                className="c-shipping-box"
              />
            </Form.Group>
          </Form>
        </div>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6}>
        {state.ProductsCart.map((product) => {
          return <CardProduct product={product} />;
        })}
        <button className="mt-4 c-modal-button btn btn-primary">
          <span className="c-modal-button-text">Pay</span>
        </button>
      </Col>
    </Row>
  );
}

const CardProduct = ({ product }) => {
  return (
    <div className="bg-secondary py-3 px-4 my-2 d-flex flex-row">
      <div>
        <img
          src={product.photo}
          alt={product.id}
          className="c-shipping-img-product"
        />
      </div>
      <div className="pl-3">
        <h3 className="c-shipping-product-name">{product.name}</h3>
        <p className="mt-4 c-shipping-product-desc">
          Price : Rp.{product.price}
        </p>
        <p className="c-shipping-product-desc">Qty : {product.qty}</p>
        <p className="c-shipping-product-desc font-weight-bold">
          Sub Total : Rp.{product.price * product.qty}
        </p>
      </div>
    </div>
  );
};

export default Shipping;
