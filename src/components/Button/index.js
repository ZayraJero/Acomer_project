import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./styles.css";

const CustomButton = ({ children, style, className, type, onClick }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="button">
          <Button
            type={type}
            style={style}
            onClick={onClick}
            className={className}
            style={{
              backgroundColor: "#fb923c",
              border: "none",
              padding: "12px 100px",
              fontFamily: "GothamBold",
              fontSize: "20px",
            }}
          >
            {children}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomButton;
