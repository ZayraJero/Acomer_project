import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import HeaArr from "../../components/HeaArr";
import axios from "axios";
import edit from "../../assets/icons/edit.svg";
import trash from "../../assets/icons/delete.svg";

const url = (id) =>
  `http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/restaurant/${id}/menus/`;

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getMenus: [],
      form: {
        id: "",
        title: "",
        price: "",
        description: "",
        modal: "",
      },
    };
  }

  selectDelete = (menuItem) => {
    this.setState({
      modal: "delete",
      form: {
        id: menuItem.id,
        title: menuItem.title,
        price: menuItem.price,
        description: menuItem.description,
      },
    });
  };

  componentDidMount() {
    const authData = localStorage.getItem("authData");
    if (!authData) {
      window.location.href = "/rest/login";
    }
    const parsedAuthData = JSON.parse(authData);

    axios
      .get(url(parsedAuthData.restaurant_id))
      .then((response) => {
        console.log(response.data.menus);
        this.setState({ getMenus: response.data.menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toDetail(id) {
    this.props.history.push(`/menus/${id}`);
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
              Mis menús
            </h3>

            <ListGroup variant="flush">
              {this.state.getMenus.map((e) => (
                <ListGroup.Item
                  onClick={() => this.toDetail(e.id)}
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
                  {e.title}
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
                    <img src={trash} alt="trash"></img>
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

export default MenuList;
