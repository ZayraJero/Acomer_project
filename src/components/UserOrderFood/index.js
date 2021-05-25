import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CustomButton from "../../components/Button";
import edit from "../../assets/icons/edit.svg";

const OrderFood = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontFamily: "GothamBold",
              fontSize: "16px",
              margin: "30px 0",
            }}
          >
            <p>Combo 1 ...................................... $90.00</p>
            <img
              src={edit}
              style={{ alignSelf: "flex-start", marginTop: "-8px" }}
            ></img>
          </div>

          <Form style={{ padding: "30px 0" }}>
            <Form.Label
              style={{ fontFamily: "GothamBold", paddingRight: "50px" }}
            >
              Metodo de pago
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              custom
              style={{ fontSize: "14px" }}
            >
              <option value="cash">Efectivo</option>
              <option value="card">Tarjeta T/C</option>
            </Form.Control>
          </Form>

          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontFamily: "GothamBold",
              fontSize: "16px",
              padding: "40px 0",
            }}
          >
            Total ................................................. $90.00
          </p>
          <div style={{ paddingTop: "100px" }}>
            <CustomButton>Pagar</CustomButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderFood;
