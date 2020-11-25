import { Row, Col, Button, Container } from "react-bootstrap";
import products from "../data/products.json";
import "./styles/productDetail.scss";

function ProductDetail({ index }) {
  return (
    <Container>
      <Row className="c-product-detail-container">
        <Col sm={12} md={6} lg={6} xl={6}>
          <img
            className="c-product-detail-img"
            src={products[index].photo}
            alt={index}
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <h1 className="ml-0 mt-4 c-product-detail-title">{products[index].name}</h1>
          <p className="c-product-detail-stock">Stock : {products[index].stock}</p>
          <h6 className="mt-5 mb-3 c-product-detail-desc">{products[index].detail}</h6>
          <h5 className="mt-3 mb-3 text-right c-product-detail-price">Rp.{products[index].price}</h5>
          <Button className="w-100 mt-5">Add Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
