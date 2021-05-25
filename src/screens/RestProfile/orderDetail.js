import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import HeaArr from "../../components/HeaArr";
import axios from "axios";

import { useParams } from "react-router-dom";

const OrderList = (props) => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState("recibido");
  const { id: idURL } = useParams();

  useEffect(() => {
    axios
      .get(url(idURL))
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const url = (id) =>
    `http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/order/${id}/detail/`;

  const updateStatus = () => {
    let nextStatus;
    if (status === "recibido") {
      nextStatus = "preparando";
    } else if (status === "preparando") {
      nextStatus = "enviando";
    } else if (status === "enviando") {
      nextStatus = "entregado";
    }

    axios
      .patch(
        `http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/order/${idURL}/update/`,
        { status: nextStatus }
      )
      .then((response) => {
        setStatus(response.data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(data);

  const formatString = (str) => {
    let replaced = str.replace("_", " ");
    let firstLetter = str.charAt(0).toUpperCase();
    return firstLetter + replaced.slice(1);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <HeaArr />
        <Col>
          <h3
            style={{
              fontFamily: "GothamBold",
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            Orden {data.id}
          </h3>
          <span
            style={{
              fontFamily: "GothamBold",
              display: "flex",
              justifyContent: "center",
              marginBottom: "25px",
              color: "rgb(140 140 140)",
            }}
          >
            {data.name}
          </span>
          <ListGroup variant="flush">
            <ListGroup.Item
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
            >
              Menu:
              <p
                style={{
                  margin: "0 20px",
                  fontSize: "20px",
                  fontFamily: "GothamBold",
                }}
              >
                {Object.keys(data).length & data.menus
                  ? data.menus[0].title
                  : null}
              </p>
            </ListGroup.Item>

            {Object.keys(data).length & data.plates
              ? data.plates.map(({ id, name, type }) => (
                  <ListGroup.Item
                    key={id}
                    value={id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {formatString(type)}: {name}
                  </ListGroup.Item>
                ))
              : null}

            <ListGroup.Item
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
            >
              Estatus:
              <p
                style={{
                  color: "#2FB423",
                  fontSize: "20px",
                  margin: "0 20px",
                }}
              >
                {status}
              </p>
            </ListGroup.Item>
          </ListGroup>

          <Button
            onClick={() => updateStatus()}
            disabled={status === "entregado"}
            style={{
              backgroundColor: "#fb923c",
              border: "none",
              padding: "12px 50px",
              fontFamily: "GothamBold",
              fontSize: "20px",
              display: "flex",
              margin: "auto",
              marginTop: "100px",
            }}
            disabled={status === "entregado" ? true : false}
          >
            {status === "entregado" ? "Orden entregada" : "Actualizar estatus"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderList;
