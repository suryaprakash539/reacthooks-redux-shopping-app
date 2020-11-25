import React, { useState } from "react";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const Products = () => {
  const products = useSelector((state) => state);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const isAlreadyAdded = cartItems.find((cartItem) => cartItem.id === item.id)
      ? true
      : false;
    if (isAlreadyAdded) {
      toast("item  already added", { type: "error" });
      return;
    }

    setCartItems([...cartItems, item]);
  };
  // console.log(cartItems);

  const removeItem = (id) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
  };

  const payment = () => {
    toast("Payment Successful", { type: "success" });
    setCartItems([]);
  };

  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4}>
              <ProductItem product={product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </Container>
      <ToastContainer />
      <Cart cartItems={cartItems} removeItem={removeItem} payment={payment} />
    </div>
  );
};

export default Products;
