import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CustomButton from "../Button";

const SignUn = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ ...formData });
    // console.log(formData);
  };

  // const history = useHistory();
  // const changeToRegister = () => {
  //   history.push(`/register/info`);
  // };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Form
            onSubmit={_handleSubmit}
            style={{
              padding: "5px 0",
            }}
          >
            <Form.Group controlId="formGridFirstname">
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Ingresa tus nombres"
              />
            </Form.Group>
            <Form.Group controlId="formGridLastname">
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Ingresa tus apellidos"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electronico"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                className="password-strength-meter"
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Contraseña"
              />
            </Form.Group>
            <Form.Group controlId="formGridPhoneNum">
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="phone"
                type="number"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Número celular"
              />
            </Form.Group>

            <CustomButton
              className="button"
              type="submit"
              // onClick={() => changeToRegister()}
            >
              Registrarme
            </CustomButton>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUn;
