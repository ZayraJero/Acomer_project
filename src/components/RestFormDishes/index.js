import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import CustomButton from "../Button";
import swal from "sweetalert";

const FormDishes = ({ handleSubmit }) => {
  const [formDish, setFormDish] = useState({
    name: "",
    price: "",
    type: "",
  });

  const inputFileRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDish({ ...formDish, [name]: value });
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formDish);
    //  console.log(inputFileRef.current.files);
    handleSubmit({ ...formDish, image: inputFileRef.current.files[0] });
    swal("Tu platillo se ha creado,  ¿Quiéres crear otro?", {
      buttons: {
        cancel: "En otro momento",
        catch: {
          text: "Ok",
          value: "catch",
        },
        // defeat: true,
      },
    }).then((value) => {
      switch (value) {
        case "catch":
          window.location.href = "/create/dishes";
          break;

        default:
          window.location.href = "/rest/profile";
      }
    });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Form
            style={{
              padding: "25px 0",
              marginTop: "20px",
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
                Foto del platillo
              </Form.Label>

              <input
                type="file"
                ref={inputFileRef}
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                  with: "100%",
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridReference">
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Nombre del platillo
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "GothamBook",
                  fontSize: "13px",
                }}
                name="name"
                type="text"
                value={formDish.name}
                onChange={handleChange}
                placeholder="Ingresa el nombre"
              />
            </Form.Group>

            <Form.Label style={{ fontFamily: "GothamBold", fontSize: "15px" }}>
              Escoge una categoría
            </Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              custom
              style={{ fontSize: "13px" }}
              name="type"
              onChange={handleChange}
            >
              <option>Seleciona la categoría del platillo</option>
              <option value="primer_tiempo">Primer tiempo</option>
              <option value="segundo_tiempo">Segundo tiempo</option>
              <option value="tercer_tiempo">Tercer tiempo</option>
              <option value="cuarto">Cuarto tiempo</option>
              <option value="bebidas">Bebidas</option>
              <option value="Complementos">Complementos</option>
              <option value="ingredientes_extras">Ingredientes extras</option>
              <option value="tacos">Tacos</option>
              <option value="snack">Snack</option>
            </Form.Control>

            <Form.Group controlId="formGridAlias" style={{ margin: "15px 0" }}>
              <Form.Label
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "15px",
                }}
              >
                Precio del platillo
              </Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text
                    style={{
                      fontFamily: "GothamBook",
                      fontSize: "13px",
                      height: " 33px",
                      background: "none",
                    }}
                  >
                    $
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Amount "
                  style={{
                    fontFamily: "GothamBook",
                    fontSize: "13px",
                    marginBottom: "45px",
                  }}
                  name="price"
                  type="number"
                  value={formDish.price}
                  onChange={handleChange}
                  placeholder="Ingresa precio"
                />
                <InputGroup.Append>
                  <InputGroup.Text
                    style={{
                      fontFamily: "GothamBook",
                      fontSize: "13px",
                      height: " 33px",
                      background: "none",
                    }}
                  >
                    .00
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
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

export default FormDishes;
