import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div>
      <Col md={4}>
        <Card
          style={{
            width: "18rem",
            padding: "1rem",
            marginBottom: "2rem",
            boxShadow: "10px 10px 5px #aaaaaa",
          }}
        >
          <Card.Img
            width="200"
            height="200"
            variant="top"
            src={product.image}
          />
          <Card.Body>
            <Card.Title>{product.title.slice(0, 20)}</Card.Title>
            <Card.Text>
              <h4>Price: Rs. {product.price}</h4>
            </Card.Text>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Buy Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ProductItem;
