import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import HeaArr from "../../components/HeaArr";
import axios from "axios";
import edit from "../../assets/icons/edit.svg";
import trash from "../../assets/icons/delete.svg";

const url =
  "http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/plate/filter/";

class DishesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getDishes: [],
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.plates);
        this.setState({ getDishes: response.data.plates });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
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
                marginBottom: "25px",
              }}
            >
              Mis platillos
            </h3>

            <ListGroup variant="flush">
              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Primer tiempo</h5>
              </div>

              {this.state.getDishes.primer_tiempo &&
                this.state.getDishes.primer_tiempo.map((e) => (
                  <ListGroup.Item
                    key={e.id}
                    value={e.id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    {e.name}
                    <div
                      style={{
                        marginLeft: "auto",
                        padding: " 0 1px",
                      }}
                    >
                      <span>
                        ${e.price}
                        .00
                      </span>
                    </div>
                    <div>
                      <img alt="edit" src={edit}></img>{" "}
                      <img alt="trash" src={trash}></img>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>

            <ListGroup variant="flush">
              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Segundo tiempo</h5>
              </div>

              {this.state.getDishes.segundo_tiempo &&
                this.state.getDishes.segundo_tiempo.map((e) => (
                  <ListGroup.Item
                    key={e.id}
                    value={e.id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    {e.name}
                    <div
                      style={{
                        marginLeft: "auto",
                        padding: " 0 1px",
                      }}
                    >
                      <span>
                        ${e.price}
                        .00
                      </span>
                    </div>
                    <div>
                      <img src={edit} alt="edit"></img>{" "}
                      <img alt="trash" src={trash}></img>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>

            <ListGroup variant="flush">
              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Tercer tiempo</h5>
              </div>

              {this.state.getDishes.tercer_tiempo &&
                this.state.getDishes.tercer_tiempo.map((e) => (
                  <ListGroup.Item
                    key={e.id}
                    value={e.id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    {e.name}
                    <div
                      style={{
                        marginLeft: "auto",
                        padding: " 0 1px",
                      }}
                    >
                      <span>
                        ${e.price}
                        .00
                      </span>
                    </div>
                    <div>
                      <img alt="edit" src={edit}></img>{" "}
                      <img alt="trash" src={trash}></img>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>

            <ListGroup variant="flush">
              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Cuarto tiempo</h5>
              </div>

              {this.state.getDishes.cuarto_tiempo &&
                this.state.getDishes.cuarto_tiempo.map((e) => (
                  <ListGroup.Item
                    key={e.id}
                    value={e.id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    {e.name}
                    <div
                      style={{
                        marginLeft: "auto",
                        padding: " 0 1px",
                      }}
                    >
                      <span>
                        ${e.price}
                        .00
                      </span>
                    </div>
                    <div>
                      <img alt="edit" src={edit}></img>{" "}
                      <img alt="trash" src={trash}></img>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>

            <ListGroup variant="flush">
              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Bebidas</h5>
              </div>

              {this.state.getDishes.bebidas &&
                this.state.getDishes.bebidas.map((e) => (
                  <ListGroup.Item
                    key={e.id}
                    value={e.id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    {e.name}
                    <div
                      style={{
                        marginLeft: "auto",
                        padding: " 0 1px",
                      }}
                    >
                      <span>
                        ${e.price}
                        .00
                      </span>
                    </div>
                    <div>
                      <img alt="edit" src={edit}></img>{" "}
                      <img alt="trash" src={trash}></img>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>

            <ListGroup variant="flush">
              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Complementos</h5>
              </div>

              {this.state.getDishes.Complementos &&
                this.state.getDishes.Complementos.map((e) => (
                  <ListGroup.Item
                    key={e.id}
                    value={e.id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    {e.name}
                    <div
                      style={{
                        marginLeft: "auto",
                        padding: " 0 1px",
                      }}
                    >
                      <span>
                        ${e.price}
                        .00
                      </span>
                    </div>
                    <div>
                      <img alt="edit" src={edit}></img>{" "}
                      <img alt="trash" src={trash}></img>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>

            <ListGroup variant="flush">
              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Ingredientes extra</h5>
              </div>

              {this.state.getDishes.ingredientes_extras &&
                this.state.getDishes.ingredientes_extras.map((e) => (
                  <ListGroup.Item
                    key={e.id}
                    value={e.id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    {e.name}
                    <div
                      style={{
                        marginLeft: "auto",
                        padding: " 0 1px",
                      }}
                    >
                      <span>
                        ${e.price}
                        .00
                      </span>
                    </div>
                    <div>
                      <img alt="edit" src={edit}></img>{" "}
                      <img alt="trash" src={trash}></img>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>

            <ListGroup variant="flush">
              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Tacos</h5>
              </div>

              {this.state.getDishes.tacos &&
                this.state.getDishes.tacos.map((e) => (
                  <ListGroup.Item
                    key={e.id}
                    value={e.id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    {e.name}
                    <div
                      style={{
                        marginLeft: "auto",
                        padding: " 0 1px",
                      }}
                    >
                      <span>
                        ${e.price}
                        .00
                      </span>
                    </div>
                    <div>
                      <img alt="edit" src={edit}></img>{" "}
                      <img alt="trash" src={trash}></img>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>

            <ListGroup variant="flush">
              <div className="gray-bar">
                <h5 style={{ fontSize: "16px" }}>Snack</h5>
              </div>

              {this.state.getDishes.snack &&
                this.state.getDishes.snack.map((e) => (
                  <ListGroup.Item
                    key={e.id}
                    value={e.id}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    {e.name}
                    <div
                      style={{
                        marginLeft: "auto",
                      }}
                    >
                      <span>
                        ${e.price}
                        .00
                      </span>
                    </div>
                    <div>
                      <img alt="edit" src={edit}></img>
                      <img alt="trash" src={trash}></img>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DishesList;
