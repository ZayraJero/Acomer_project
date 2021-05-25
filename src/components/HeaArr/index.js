import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import arrow from "../../assets/icons/returnArrow.svg";
import "./styles.css";
import { useHistory } from "react-router-dom";

const HeaArrow = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <Row className="justify-content-md-center header-div">
        <Col xs={3} md={12}>
          <img
            src={arrow}
            alt="go-back"
            className="icon-arrow"
            onClick={goBack}
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaArrow;
