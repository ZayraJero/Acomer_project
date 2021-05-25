import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "./styles.css";

const UserDirectionInfo = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Badge
            className="user-info"
            style={{
              padding: "3% 12%",
            }}
          >
            <h6>Casa</h6>
            <p
              style={{
                fontFamily: "GothamBook",
                fontSize: "12px",
              }}
            >
              Calle Pedro Moreno no.24, Colonia Lindavista
            </p>
          </Badge>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDirectionInfo;
