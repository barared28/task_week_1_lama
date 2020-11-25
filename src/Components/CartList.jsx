import { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import trash from "../Images/trash.png";
import "./styles/cartList.scss";

const initialData = {
  name: "RWANDA Beans",
  price: "299.900",
  photo: "/image/product1.png",
  qty: 1,
};

function CartList() {
  const [products, setProduct] = useState([initialData]);
  useEffect(() => {
    (async function () {
      try {
        const productCart = await JSON.parse(window.localStorage.getItem('ProductsCart'));
        setProduct(productCart);
      } catch (error) {
        window.localStorage.setItem("ProductsCart", JSON.stringify(products))
      }
    })()
  },[products])
  return (
    <Container className='mb-5'>
      <h2 className="pl-0 pl-md-5 c-cart-list-title">My Cart</h2>
      <Row className="mt-4">
        <Col sm={12} md={8} lg={8} xl={8}>
          <div className="pl-0 pl-md-5">
            <h3 className="c-cart-list-subtitle">Review Your Order</h3>
            <div className="mt-2 w-100 border border-dark"></div>
            <div className="my-3">
              <ProductList products={products} />
            </div>
            <div className="mt-2 w-100 border border-dark"></div>
          </div>
        </Col>
        <Col className="mt-5" sm={12} md={4} lg={4} xl={4}>
          <div className="w-100 border border-dark"></div>
          <div className='d-flex flex-row mt-3'>
            <p className="c-cart-list-product-price">Subtotal</p>
            <p className="c-cart-list-product-price ml-auto">{initialData.price}</p>
          </div>
          <div className='d-flex flex-row mb-1'>
            <p className="c-cart-list-product-price">Qty</p>
            <p className="c-cart-list-product-price ml-auto">{initialData.qty}</p>
          </div>
          <div className="w-100 border border-dark"></div>
          <div className='d-flex flex-row mt-3'>
            <p className="c-cart-list-product-price font-weight-bold">Total</p>
            <p className="c-cart-list-product-price font-weight-bold ml-auto">{initialData.price}</p>
          </div>
          <Button className='float-right mt-3 px-4'>Proceed To Checkout</Button>
        </Col>
      </Row>
    </Container>
  );
}

function ProductList({ products }) {
  return products.map((product, index) => {
    return (
      <div className="d-flex flex-row my-2" key={index}>
        <img
          src={product.photo}
          alt={index}
          className="c-cart-list-product-img"
        />
        <div className="ml-3">
          <h3 className="c-cart-list-product-title">{product.name}</h3>
          <div className="d-flex flex-row mt-3">
            <span className="py-1 mr-2 mb-0">-</span>
            <div>
              <p className="bg-secondary rounded-lg py-1 px-2 mr-2 mb-0">
                {product.qty}
              </p>
            </div>
            <span className="py-1 mb-0">+</span>
          </div>
        </div>
        <div className="ml-auto">
          <p className="c-cart-list-product-price">Rp.{product.price}</p>
          <img className="float-right" src={trash} alt="delete" />
        </div>
      </div>
    );
  });
}

export default CartList;
