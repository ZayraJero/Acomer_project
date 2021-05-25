import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CustomButton from "../Button";
import UserPhoto from "../../components/UserPhoto";

const EditForm = ({ handleSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ ...formValues });
    // console.log(formValues);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <UserPhoto />
          <Form
            style={{
              padding: "35px 0",
            }}
            onSubmit={_handleSubmit}
          >
            <Form.Group controlId="formGridFirstName">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Nombres
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="first_name"
                type="text"
                value={formValues.first_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridLastName">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Apellidos
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="last_name"
                type="text"
                value={formValues.last_name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formGridPhoneNum">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Número celular
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="phone"
                type="number"
                value={formValues.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Correo electrónico
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "13px",
                }}
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
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

export default EditForm;
