import React, { useState, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import "./styles.css";
import CustomButton from "../Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username, password);
    try {
      const response = await axios.post(
        `http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/client/login/`,
        {
          username,
          password,
        }
      );
      console.log(response);
      let data = response.data;
      data["isUser"] = true;
      localStorage.setItem("authData", JSON.stringify(data));
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Form
            style={{
              padding: "5px 0",
            }}
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="username"
                type="email"
                placeholder="Correo electronico"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={handleInput}
              />
            </Form.Group>

            <CustomButton className="button" type="submit">
              Guardar
            </CustomButton>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
