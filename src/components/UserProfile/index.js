import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserPhoto from "../UserPhoto";
// import { GoogleLogout } from "react-google-login";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogined: true,
      accessToken: "",
    };
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  logout(response) {
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
    }));
  }

  handleLogoutFailure(response) {
    alert("Error al cerrar sesión");
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div
              style={{
                fontFamily: "GothamBold",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "40px 0",
              }}
            >
              <UserPhoto />
              <div>
                <h3
                  tyle={{
                    fontFamily: "GothamBold",
                    fontSize: "13px",
                  }}
                >
                  Fernando Garcia
                </h3>
                <a
                  href="/profile/edit"
                  style={{
                    fontFamily: "GothamBold",
                    fontSize: "13px",
                    color: "#2FB423",
                    display: "flex",
                    justifyContent: "space-evenly",
                    textDecorationLine: "underline",
                  }}
                >
                  Editar perfil
                </a>
              </div>
            </div>
          </Col>
          <div
            style={{
              fontFamily: "GothamBold",
              backgroundColor: "#F3F4F6",
              width: "100%",
              padding: "10px 0 0 25px",
              margin: " 40px 0",
            }}
          >
            <h5>Direcciones</h5>
          </div>
          <Col
            style={{
              fontFamily: "GothamBold",
              fontSize: "14px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <Link
                to="/profile/edit/direction"
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "14px",
                  color: "#000000",
                  textDecoration: "none",
                }}
              >
                <h6>Casa</h6>
                <p
                  style={{
                    fontFamily: "GothamBook",
                    fontSize: "12px",
                    marginBottom: "20px",
                  }}
                >
                  Calle Pedro Moreno no.24, Colonia Lindavista
                </p>
              </Link>
            </div>
          </Col>

          <div
            style={{
              fontFamily: "GothamBold",
              backgroundColor: "#F3F4F6",
              width: "100%",
              padding: "10px 0 0 25px",
              margin: " 30px 0",
            }}
          >
            <Link to="/" style={{ color: "#000000", textDecoration: "none" }}>
              <h5>Cerrar sesión</h5>
            </Link>
            {/* <GoogleLogout
              clientId="268029895097-ena92hfakj1dvi8ng9uagllejjfo90b7.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={this.logout}
              onFailure={this.handleLogoutFailure}
            ></GoogleLogout> */}
          </div>
        </Row>
      </Container>
    );
  }
}

export default Logout;
