import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import profile from "../../assets/icons/profile.svg";
import cart from "../../assets/icons/shoppingCart.svg";
import arrow from "../../assets/icons/returnArrow.svg";
import take from "../../assets/icons/takeAway.svg";

const Header = ({ headerType }) => {
  switch (headerType) {
    case "type-0":
      return (
        <Container>
          <Row className="justify-content-md-center header-div">
            <Col xs={3} md={3} className="icon-profile">
              <Link to="/profile">
                <img src={profile}></img>
              </Link>
            </Col>
            <Col xs={5} md={5}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
              >
                <h1 className="header">A comer!</h1>
              </Link>
            </Col>
            <Col xs={4} md={4} className="icon-cart">
              <Link to="/">
                <img src={cart}></img>
              </Link>
            </Col>
          </Row>
        </Container>
      );
    case "type-1":
      return (
        <Container>
          <Row className="justify-content-md-center header-div">
            <Col xs={3} md={3}>
              <img src={arrow} className="icon-arrow"></img>
            </Col>
            <Col xs={5} md={5}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
              >
                <h1 className="header">A comer!</h1>
              </Link>
            </Col>
            <Col xs={4} md={4} className="icon-cart">
              <Link to="/">
                <img src={cart}></img>
              </Link>
            </Col>
          </Row>
        </Container>
      );
    case "type-2":
      return (
        <Container>
          <Row className="justify-content-md-center header-div">
            <Col xs={3} md={3}>
              <img src={arrow} className="icon-arrow"></img>
            </Col>
            <Col xs={5} md={5}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
              >
                <h1 className="header">A comer!</h1>
              </Link>
            </Col>
            <Col xs={4} md={4} className="login">
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
              >
                Iniciar sesión
              </Link>
            </Col>
          </Row>
        </Container>
      );
    case "type-3":
      return (
        <Container>
          <Row className="justify-content-md-center header-div">
            <Col xs={3} md={3}>
              <img src={arrow} className="icon-arrow"></img>
            </Col>
          </Row>
        </Container>
      );
    default:
      return (
        <Container>
          <Row className="justify-content-md-center header-div">
            <Col xs={2} md={3}>
              <Link to="/myorder">
                <div className="order">
                  <img src={take} className="icon-take"></img>
                  <span>Pedidos</span>
                </div>
              </Link>
            </Col>
            <Col xs={6} md={5}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
              >
                <h1 className="header">A comer!</h1>
              </Link>
            </Col>
            <Col xs={4} md={4} className="login">
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
              ></Link>
            </Col>
          </Row>
        </Container>
      );
  }
};

export default Header;
