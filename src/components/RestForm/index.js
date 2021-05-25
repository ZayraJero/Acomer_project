import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../Button";

const RestDirection = ({ handleSubmit }) => {
  const [username, serUsername] = useState("");
  const [password, setPassword] = useState("");

  const [formRest, setFormRest] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    ext_number: "",
    int_number: "",
    zip_code: "",
    municipality: "",
    suburb: "",
    link_google: "",
  });

  //const inputFileRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormRest({ ...formRest, [name]: value });
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ ...formRest });
    //console.log(formRest);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Form
            style={{
              padding: "25px 0",
            }}
            onSubmit={_handleSubmit}
          >
            <Form.Group controlId="formGridName">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Nombre del restaurante
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="name"
                type="text"
                value={formRest.name}
                onChange={handleChange}
                placeholder="Ingresa el nombre"
              />
            </Form.Group>

            <Form.Group controlId="formGridName">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Ingresa un Email
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="email"
                type="text"
                value={formRest.email}
                onChange={handleChange}
                placeholder="restaurant@mail.com"
              />
            </Form.Group>

            <Form.Group controlId="formGridName">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Ingresa un Telefono o Celular
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="phone"
                type="text"
                value={formRest.phone}
                onChange={handleChange}
                placeholder="55 1234 1234"
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Calle
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="street"
                type="text"
                value={formRest.street}
                onChange={handleChange}
                placeholder="Ingresa Calle"
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridNoExt">
                <Form.Label
                  style={{
                    fontFamily: "GothamBold",
                    fontSize: "15px",
                  }}
                >
                  No. Ext
                </Form.Label>
                <Form.Control
                  style={{
                    fontSize: "13px",
                  }}
                  name="ext_number"
                  type="number"
                  value={formRest.ext_number}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNoInt">
                <Form.Label
                  style={{
                    fontFamily: "GothamBold",
                    fontSize: "15px",
                  }}
                >
                  No. Int
                </Form.Label>
                <Form.Control
                  style={{
                    fontSize: "13px",
                  }}
                  name="int_number"
                  type="number"
                  value={formRest.int_number}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCp">
                <Form.Label
                  style={{
                    fontFamily: "GothamBold",
                    fontSize: "15px",
                  }}
                >
                  C.P.
                </Form.Label>
                <Form.Control
                  style={{
                    fontSize: "13px",
                  }}
                  name="zip_code"
                  type="number"
                  value={formRest.zip_code}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridMunicipality">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Delegación o municipio
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="municipality"
                type="text"
                value={formRest.municipality}
                onChange={handleChange}
                placeholder="Ingresa tu delegación o municipio"
              />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Colonia
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="suburb"
                type="text"
                value={formRest.suburb}
                onChange={handleChange}
                placeholder="Ingresa tu delegación o colonia"
              />
            </Form.Group>
            <Form.Group controlId="formGridReference">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Link de Google de la ubicación
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="link_google"
                type="url"
                value={formRest.ink_google}
                onChange={handleChange}
                placeholder="Ingresa el link de google maps"
              />
            </Form.Group>
            <Form.Label
              style={{
                fontFamily: "GothamBold",
                fontSize: "15px",
              }}
            >
              Crea usuario
            </Form.Label>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                className="password-strength-meter"
                name="username"
                type="text"
                onChange={handleChange}
                placeholder="password"
              />
            </Form.Group>

            <Form.Label
              style={{
                fontFamily: "GothamBold",
                fontSize: "15px",
              }}
            >
              Crea una Contraseña
            </Form.Label>
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
                placeholder="password"
              />
            </Form.Group>
            <Link to="/rest/profile">
              <CustomButton className="button" type="submit">
                Guardar
              </CustomButton>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RestDirection;
