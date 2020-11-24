import { useState, useEffect } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const ListProducts = () => {
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

const MappingProduct = ({ data }) => {
  return data.map((product) => {
    return (
      <a href="/" key={product.name} style={{ textDecoration: "none" }}>
        <Col sm={12} md={6} lg={4} xl={3} key={product._id} className="mb-3">
          <Card style={{ width: "18rem", maxWidth: "241px" }}>
            <Card.Img
              variant="top"
              style={{ maxWidth: "241px", maxHeight: "312px" }}
              src={product.photo}
            />
            <Card.Body>
              <Card.Title
                style={{
                  fontWeight: "900",
                  fontSize: "18px",
                  lineHeight: "25px",
                }}
              >
                {product.name}
              </Card.Title>
              <Card.Text style={customText}>Rp.{product.price}</Card.Text>
              <Card.Text style={customText}>Stock : {product.stock}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </a>
    );
  });
};

const customText = {
  fontSize: "14px",
  lineHeight: "19px",
  color: "#974A4A",
};

export default ListProducts;
