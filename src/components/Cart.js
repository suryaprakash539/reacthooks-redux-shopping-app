import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const Cart = ({ cartItems, removeItem, payment }) => {
  let totalAmount = cartItems.reduce((Amount, item) => item.price + Amount, 0);

  return (
    <div>
      <Container>
        <h1 className="text-success text-center">Your Cart</h1>
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row>
                <Col>
                  <img height={120} width={120} src={item.image} />
                </Col>
                <Col className="text-center">
                  <div className="text-primary">{item.title}</div>
                  <span>price :- {item.price}</span>
                  <br />
                  <Button variant="danger" onClick={() => removeItem(item.id)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        {cartItems.length >= 1 ? (
          <Card className="text-center mt-3">
            <Card.Body>
              Total Cost for {cartItems.length} products is Rs. {totalAmount}
            </Card.Body>
            <Card.Footer>
              <Button variant="success" onClick={() => payment()}>
                pay here
              </Button>
            </Card.Footer>
          </Card>
        ) : (
          <h1 className="text-warning">Cart is empty</h1>
        )}
      </Container>
    </div>
  );
};

export default Cart;
