import React, { Component, useState, useEffect } from "react";
import HeaArrow from "../../components/HeaArr";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";
import "./styles.css";

const url = (clientID) =>
  `http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/client/${clientID}/order/`;

function OrdersClient() {
  const [orders, setOrders] = useState([]);

  const history = useHistory();
  const authData = localStorage.getItem("authData");
  if (!authData) {
    history.push("/login");
  }
  const authJSON = JSON.parse(authData);
  if (!authJSON.isUser) {
    history.push("/rest/profile");
  }

  useEffect(() => {
    axios
      .get(url(authJSON.client_id))
      .then((response) => {
        setOrders(response.data.client.orders.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toDetail = (id) => {
    history.push(`/order/${id}/status`);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <HeaArrow />
        <Col>
          <h3
            style={{
              fontFamily: "GothamBold",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Mis pedidos
          </h3>

          <ListGroup variant="flush">
            {Object.keys(orders).length
              ? orders.map(({ id, status }) => (
                  <ListGroup.Item
                    onClick={
                      status === "entregado"
                        ? () => console.log("nothing")
                        : () => toDetail(id)
                    }
                    key={id}
                    value={id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>
                      Orden:{" "}
                      <span
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {id}
                      </span>
                    </span>
                    <span className={status}>{status}</span>
                  </ListGroup.Item>
                ))
              : null}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default OrdersClient;
