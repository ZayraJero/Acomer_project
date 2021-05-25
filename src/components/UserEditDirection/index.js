import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CustomButton from "../Button";

const EditDirect = ({ handleSubmit }) => {
  const [dataUser, setDataUser] = useState({
    street: "",
    ext_number: "",
    int_number: "",
    zip_code: "",
    municipality: "",
    suburb: "",
    references: "",
    alias: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setDataUser({ ...dataUser, [name]: value });
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ ...dataUser });
    // console.log(dataUser);
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
                value={dataUser.street}
                onChange={handleChange}
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
                  value={dataUser.ext_number}
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
                  value={dataUser.int_number}
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
                  value={dataUser.zip_code}
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
                value={dataUser.municipality}
                onChange={handleChange}
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
                value={dataUser.suburb}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridReference">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Referencias y/o entre calles
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="references"
                type="text"
                value={dataUser.references}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridAlias">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Escribe un alias
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="alias"
                type="text"
                value={dataUser.alias}
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

export default EditDirect;
