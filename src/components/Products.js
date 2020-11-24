import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        {products.map((product) => (
          <Col md={4}>
            <ProductItem key={product.id} product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
