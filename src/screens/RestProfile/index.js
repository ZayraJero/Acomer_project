import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

import { useHistory } from "react-router-dom";

const ProfileRest = () => {
  const history = useHistory();
  const [authData, setAuthData] = useState({});
  const auth = localStorage.getItem("authData");
  if (!auth) {
    history.push("/rest/login");
  }
  //solo para usuario
  const authJSON = JSON.parse(auth);
  if (authJSON.isUser === true) {
    //login fonda
    history.push("/");
  }

  const handleSearch = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h1 className="header-rest">A comer!</h1>
          <h3
            style={{
              fontFamily: "GothamBold",
              display: "flex",
              justifyContent: "center",
              fontSize: "24px",
              margin: "20px",
              marginTop: "25px",
              marginBottom: "5px",
            }}
          >
            Bienvenid@
          </h3>
          {/* <p
            style={{
              fontFamily: "GothamBold",
              display: "flex",
              justifyContent: "center",
              fontSize: "25px",
            }}
          >
            Fonda Don José
          </p> */}
          <div>
            <img
              className="ph-rest"
              src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg"
              alt="some"
            />

            <p
              style={{
                color: "#2FB423",
                display: "flex",
                fontFamily: "GothamBold",
                justifyContent: "flex-end",
                fontSize: "13px",
              }}
            >
              Cambiar imagen
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: " 15px 0",
            }}
          >
            <Link to="/create/menu">
              <Button
                size="xs"
                style={{
                  padding: "5px 10px",
                  border: " 3px solid #2FB423",
                  backgroundColor: "#F3F4F6",
                  color: "#000000",
                  borderRadius: "10px",
                  margin: "0px 0",
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "13px",
                }}
              >
                Agrega un menú
              </Button>
            </Link>
            <Link to="/create/dishes">
              <Button
                size="xs"
                style={{
                  padding: "5px 10px",
                  border: " 3px solid #2FB423",
                  backgroundColor: "#F3F4F6",
                  color: "#000000",
                  borderRadius: "10px",
                  margin: "0px 0",
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "13px",
                }}
              >
                Agrega un platillo
              </Button>
            </Link>
          </div>

          <div
            style={{
              fontFamily: "GothamBook",
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px 0",
            }}
          >
            <Link to="/orders">
              <Button
                size="lg"
                style={{
                  padding: "12px 100px",
                  border: " 3px solid #fb923c",
                  backgroundColor: "#F3F4F6",
                  color: "#000000",
                  borderRadius: "10px",
                  margin: "10px 0",
                }}
              >
                Mis pedidos
              </Button>
            </Link>

            <Link to="/menus">
              <Button
                size="lg"
                style={{
                  padding: "12px 105px",
                  border: " 3px solid #fb923c",
                  backgroundColor: "#F3F4F6",
                  color: "#000000",
                  borderRadius: "10px",
                  margin: "10px 0",
                }}
              >
                Mis menús
              </Button>
            </Link>

            <Link to="/dishes">
              <Button
                size="lg"
                style={{
                  padding: "12px 100px",
                  border: " 3px solid #fb923c",
                  backgroundColor: "#F3F4F6",
                  color: "#000000",
                  borderRadius: "10px",
                  margin: "10px 0",
                }}
              >
                Mis platillos
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileRest;
