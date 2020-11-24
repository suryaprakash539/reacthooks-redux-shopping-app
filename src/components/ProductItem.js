import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductItem = (props) => {
  console.log(props, "product");
  return (
    <div>
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
          src={props.product.image}
        />
        <Card.Body>
          <Card.Title>{props.product.title.slice(0, 20)}</Card.Title>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItem;
