import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../Button";
import pointRed from "../../assets/icons/pointRed.svg";
import burgerGreen from "../../assets/icons/burgerGreen.svg";
import carOrange from "../../assets/icons/carOrange.svg";
import checkBlue from "../../assets/icons/checkBlue.svg";
import styles from "../status/styles.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const Status = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/order/${props.orderID}/status/`,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container fluid style={{ marginTop: "30px" }}>
      <Row className="justify-content-md-center">
        <Container>
          <Row>
            <Col>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  margin: "0px 10px 0px 15%",
                }}
              >
                <h3
                  className={
                    data.status === "recibido" ? "status" : "status inactive"
                  }
                >
                  <img
                    className={
                      data.status === "recibido" ? "img" : "img img-inactive"
                    }
                    src={pointRed}
                    alt="recibido"
                  />
                  Recibido
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  margin: "5% 0 0 40%",
                }}
              >
                <h3>
                  {" "}
                  <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  margin: "0px 10px 0px 15%",
                }}
              >
                <h3
                  className={
                    data.status === "preparando" ? "status" : "status inactive"
                  }
                >
                  <img
                    className={
                      data.status === "preparando" ? "img" : "img img-inactive"
                    }
                    src={burgerGreen}
                    alt="preparando"
                  />
                  En Preparación
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  margin: "5% 0 0 40%",
                }}
              >
                <h3>
                  {" "}
                  <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  margin: "0px 10px 0px 15%",
                }}
              >
                <h3
                  className={
                    data.status === "enviando" ? "status" : "status inactive"
                  }
                >
                  <img
                    className={
                      data.status === "enviando"
                        ? "img-car"
                        : "img-car img-inactive"
                    }
                    src={carOrange}
                    alt="enviando"
                  />
                  En Camino
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  margin: "5% 0 0 40%",
                }}
              >
                <h3>
                  {" "}
                  <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  margin: "0px 10px 0px 15%",
                }}
              >
                <h3
                  className={
                    data.status === "entregado" ? "status" : "status inactive"
                  }
                >
                  <img
                    className={
                      data.status === "engregado"
                        ? "img-check"
                        : "img-check img-inactive"
                    }
                    src={checkBlue}
                    alt="entregado"
                  />
                  Entregado
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Status;
