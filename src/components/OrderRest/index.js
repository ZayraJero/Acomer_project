import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./styles.css";
import pointGreen from "../../assets/icons/pointGreen.svg";
import burgerGreen from "../../assets/icons/burgerGreen.svg";
import carOrange from "../../assets/icons/carOrange.svg";
import pointRed from "../../assets/icons/pointRed.svg";
import checkBlue from "../../assets/icons/checkBlue.svg";

const OrderRest = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Form
            inline
            style={{
              padding: "25px 0",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
              <option value="all">Todos</option>
              <option value="received">Recibidos</option>
              <option value="inMaking">En preparación</option>
              <option value="finished">Terminados</option>
              <option value="sent">Enviados</option>
            </Form.Control>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
              <option value="new">Recientes</option>
              <option value="old">Antiguos</option>
            </Form.Control>
          </Form>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              margin: "10px 15px",
            }}
          >
            <div>
              <h4 style={{ fontFamily: "GothamBold", margin: "0" }}>Combo 1</h4>
              <p style={{ margin: "0", color: "#2FB423" }}>3 min</p>
              <span>Recibido</span>
            </div>
            <img src={pointGreen}></img>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              margin: "10px 15px",
            }}
          >
            <div>
              <h4 style={{ fontFamily: "GothamBold", margin: "0" }}>Combo 1</h4>
              <p style={{ margin: "0", color: "#2FB423" }}>3 min</p>
              <span>En preparación</span>
            </div>
            <img src={burgerGreen}></img>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              margin: "10px 15px",
            }}
          >
            <div>
              <h4 style={{ fontFamily: "GothamBold", margin: "0" }}>Combo 1</h4>
              <p style={{ margin: "0", color: "#FF9029" }}>3 min</p>
              <span>En camino</span>
            </div>
            <img src={carOrange}></img>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              margin: "10px 15px",
            }}
          >
            <div>
              <h4 style={{ fontFamily: "GothamBold", margin: "0" }}>Combo 1</h4>
              <p style={{ margin: "0", color: "#FF2929" }}>3 min</p>
              <span>Terminados</span>
            </div>
            <img src={pointRed}></img>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              margin: "10px 15px",
            }}
          >
            <div>
              <h4 style={{ fontFamily: "GothamBold", margin: "0" }}>Combo 1</h4>
              <p style={{ margin: "0", color: "#297FFF" }}>3 min</p>
              <span>Enviados</span>
            </div>
            <img src={checkBlue}></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderRest;
