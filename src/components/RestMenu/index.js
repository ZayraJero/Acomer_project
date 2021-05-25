import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import CustomButton from "../Button";
import swal from "sweetalert";

class MenuRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      description: "",
      platesSelected: [],
      plates_get: [],
      plates: [
        {
          first: [],
        },
        {
          second: [],
        },
        {
          third: [],
        },
        {
          fourth: [],
        },
        {
          drinks: [],
        },
        {
          complement: [],
        },
        {
          extra: [],
        },
        {
          tacos: [],
        },
        {
          snacks: [],
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }

  handleChangeSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    this.setState({ platesSelected: [...this.state.platesSelected, ...value] });
    console.log(value);
  };

  handleSubmit(e) {
    e.preventDefault();
    swal({
      title: "A comer!",
      text: "¡Tu menú fue creado exitosamente!",
      icon: "success",
      timer: 3500,
      buttons: false,
    }).then(() => {
      window.location.href = "/rest/profile";
    });
    console.log(this.state);
    const authData = JSON.parse(localStorage.getItem("authData"));

    let objectMenu = {
      title: this.state.title,
      description: this.state.description,
      groupMenu: true,
      price: this.state.price,
      restaurant: authData.restaurant_id,
      plates: [],
    };
    this.state.platesSelected.forEach((plate) => {
      objectMenu.plates.push({ plate: plate });
    });
    axios
      .post(
        "http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/menu/create/",
        objectMenu
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    console.log(this.props);
    const authData = localStorage.getItem("authData");
    if (!authData) {
      window.location.href = "/rest/login";
    }

    axios
      .get(
        "http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/plate/filter/"
      )
      .then((response) => {
        console.log(response);
        this.setState({ plates_get: response.data.plates });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Form
              onSubmit={this.handleSubmit}
              style={{
                padding: "25px 0",
                marginTop: "20px",
              }}
            >
              <Form.Group controlId="formGridReference">
                <Form.Label
                  style={{
                    fontFamily: "GothamBold",
                    fontSize: "15px",
                  }}
                >
                  Nombre del menú
                </Form.Label>
                <Form.Control
                  style={{
                    fontFamily: "GothamBook",
                    fontSize: "13px",
                  }}
                  name="title"
                  type="text"
                  placeholder="Ingresa el nombre"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </Form.Group>

              <Form.Group
                controlId="formGridAlias"
                style={{ margin: "15px 0" }}
              >
                <Form.Label
                  style={{
                    fontFamily: "GothamBold",
                    fontSize: "15px",
                  }}
                >
                  Precio del menú
                </Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{
                        fontFamily: "GothamBook",
                        fontSize: "12px",
                        height: " 34px",
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
                    }}
                    name="price"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.price}
                    placeholder="Ingresa precio del menú"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text
                      style={{
                        fontFamily: "GothamBook",
                        fontSize: "12px",
                        height: " 34px",
                        background: "none",
                      }}
                    >
                      .00
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formGridReference">
                <Form.Label
                  style={{
                    fontFamily: "GothamBold",
                    fontSize: "15px",
                  }}
                >
                  Describe tu menú
                </Form.Label>
                <Form.Control
                  style={{
                    fontFamily: "GothamBook",
                    fontSize: "13px",
                  }}
                  name="description"
                  type="text"
                  placeholder="Describe los tiempos que tiene tu menú"
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </Form.Group>

              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Primer tiempo</h5>
              </div>

              <select
                name="first"
                className="form-control"
                onChange={this.handleChangeSelect}
                multiple
                style={{ border: "none", marginBottom: "10px" }}
              >
                {this.state.plates_get.primer_tiempo &&
                  this.state.plates_get.primer_tiempo.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>

              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Segundo tiempo</h5>
              </div>

              <select
                name="second"
                className="form-control"
                onChange={this.handleChangeSelect}
                multiple
                style={{ border: "none" }}
              >
                {this.state.plates_get.segundo_tiempo &&
                  this.state.plates_get.segundo_tiempo.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>

              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Tercer tiempo</h5>
              </div>

              <select
                name="third"
                className="form-control"
                onChange={this.handleChangeSelect}
                multiple
                style={{ border: "none" }}
              >
                {this.state.plates_get.tercer_tiempo &&
                  this.state.plates_get.tercer_tiempo.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>

              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Cuarto tiempo</h5>
              </div>

              <select
                name="fourth"
                className="form-control"
                onChange={this.handleChangeSelect}
                multiple
                style={{ border: "none" }}
              >
                {this.state.plates_get.cuarto_tiempo &&
                  this.state.plates_get.cuarto_tiempo.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>

              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Bebidas</h5>
              </div>

              <select
                name="drinks"
                className="form-control"
                onChange={this.handleChangeSelect}
                multiple
                style={{ border: "none" }}
              >
                {this.state.plates_get.bebidas &&
                  this.state.plates_get.bebidas.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>

              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Complementos</h5>
              </div>

              <select
                name="complement"
                className="form-control"
                onChange={this.handleChangeSelect}
                multiple
                style={{ border: "none" }}
              >
                {this.state.plates_get.Complementos &&
                  this.state.plates_get.Complementos.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>

              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Ingredientes extra</h5>
              </div>

              <select
                name="extra"
                className="form-control"
                onChange={this.handleChangeSelect}
                multiple
                style={{ border: "none" }}
              >
                {this.state.plates_get.ingredientes_extras &&
                  this.state.plates_get.ingredientes_extras.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>

              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Tacos</h5>
              </div>

              <select
                name="tacos"
                className="form-control"
                onChange={this.handleChangeSelect}
                multiple
                style={{ border: "none" }}
              >
                {this.state.plates_get.tacos &&
                  this.state.plates_get.tacos.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>
              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Snack</h5>
              </div>

              <select
                name="snack"
                className="form-control"
                onChange={this.handleChangeSelect}
                multiple
                style={{ border: "none" }}
              >
                {this.state.plates_get.snack &&
                  this.state.plates_get.snack.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>

              <CustomButton className="button" type="submit">
                Guardar
              </CustomButton>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MenuRestaurant;
