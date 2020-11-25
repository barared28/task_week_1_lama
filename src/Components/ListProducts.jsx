import { useState, useEffect } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import axios from "axios";
import "./styles/listProducts.scss";

function ListProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/data/products.json")
      .then(({ data }) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {products ? <MappingProduct data={products} /> : null}
      </Row>
    </Container>
  );
};

function MappingProduct({ data }){
  return data.map((product) => {
    return (
      <a href="/" key={product.name} className="text-decoration-none">
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
      </a>
    );
  });
};

export default ListProducts;
