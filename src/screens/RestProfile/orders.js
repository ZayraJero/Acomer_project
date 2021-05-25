import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import HeaArr from "../../components/HeaArr";
import axios from "axios";
import { useHistory } from "react-router-dom";

const url = (restid) =>
  `http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/restaurant/${restid}/orders/`;

const OrderList = (props) => {
  const [data, setData] = useState({});
  const history = useHistory();

  const auth = localStorage.getItem("authData");
  if (!auth) {
    history.push("/rest/login");
  }
  //solo para usuario
  const authJSON = JSON.parse(auth);
  const restid = authJSON.restaurant_id;

  useEffect(() => {
    axios
      .get(url(restid))
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toDetail = (id) => {
    console.log(id, props);
    props.history.push(`/orders/${id}`);
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
            Mis pedidos
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
            {Object.keys(data).length
              ? data.orders.map(({ id, name, client, status }) => (
                  <ListGroup.Item
                    onClick={() => toDetail(id)}
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
                    {name}
                    <span>
                      Cliente: {client} Order: {id}
                    </span>
                    <span>{status}</span>
                  </ListGroup.Item>
                ))
              : null}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderList;
