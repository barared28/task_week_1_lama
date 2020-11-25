import { Card, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from '../data/products.json';
import "./styles/listProducts.scss";

function ListProducts() {
  return (
      <Row className="d-flex justify-content-center">
        {products ? <MappingProduct data={products} /> : null}
      </Row>
  );
}

function MappingProduct({ data }) {
  return data.map((product , index) => {
    return (
      <Link to={`/product/${index}`} key={index} className="text-decoration-none">
        <Col sm={12} md={6} lg={4} xl={3} key={product._id} className="mb-3">
          <Card className="c-list-card">
            <Card.Img
              className="c-list-card-img"
              variant="top"
              src={product.photo}
            />
            <Card.Body>
              <Card.Title className="c-list-card-title">
                {product.name}
              </Card.Title>
              <Card.Text className="c-list-card-desc">
                Rp.{product.price}
              </Card.Text>
              <Card.Text className="c-list-card-desc">
                Stock : {product.stock}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Link>
    );
  });
}

export default ListProducts;
