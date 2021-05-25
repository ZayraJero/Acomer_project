import React, { useState, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import google from "../../assets/icons/google.svg";

import Api from "../../services/users";

class LoginGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      response: "",
      statusreponse: "",
    };
  }
  async responseGoogle(response) {
    console.log(response);
    if (response.profileObj) {
      const { email, name } = response.profileObj;
      const resApi = await Api.login(email, name);
      // console.log(resApi);
      if (resApi.data !== "") {
        const userData = await Api.getUserSession(resApi.data);
        console.log(userData);

        if (userData.data.create.user._id) {
          localStorage.setItem("tokenapp", resApi.data);
          localStorage.setItem("userapp", userData.data.create.user._id);
          localStorage.setItem("typeuser", userData.data.create.user.typeUser);
          if (userData.data.create.user.typeUser === "admin") {
            this.props.history.push(
              `/restaurant/${userData.data.session.user._id}`
            );
          } else {
            this.props.history.push(
              `/profile/${userData.data.session.user._id}`
            );
          }
        }
      }
    }
  }
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  // constructor(props) {
  //   super(props);
  //   this.setState({
  //     data: {
  //       email: response.profileObj.email,
  //       username: response.profileObj.name,
  //       password: response.googleId,
  //     },
  //   });
  //   this.props.SignUpGoogle({
  //     data: {
  //       email: response.profileObj.email,
  //       username: response.profileObj.name,
  //       password: response.googleId,
  //     },
  //   });
  // async responseGoogle(response) {
  //   console.log(response);
  //   if (response.profileObj) {
  //     const { email, name } = response.profileObj;
  //     const resApi = await Api.login(email, name);
  //     // console.log(resApi);
  //     if (resApi.data !== "") {
  //       const userData = await Api.getUserSession(resApi.data);
  //       console.log(userData);

  //       if (userData.data.create.user.id) {
  //         localStorage.setItem("tokenapp", resApi.data);
  //         localStorage.setItem("userapp", userData.data.create.user.id);
  //         localStorage.setItem("typeuser", userData.data.create.user.typeUser);
  //         if (userData.data.create.user.typeUser === "profile") {
  //           this.props.history.push(`/profile/${userData.data.create.user.id}`);
  //         } else {
  //           this.props.history.push(`/home/${userData.data.create.user.id}`);
  //         }
  //       }
  //     }
  //   }
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //   };
  // }
  // async responseGoogle(response) {
  //   console.log(response);
  //   console.log(response.profileObj);
  //   if (response.profileObj) {
  //     const { givenName, familyName, email, googleId } = response.profileObj;
  //     console.log(givenName, familyName, email, googleId);
  //   }
  // }
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Form.Group
              controlId="formBasicPassword"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "25px 0",
                marginBottom: "30px",
              }}
            >
              <GoogleLogin
                clientId="268029895097-ena92hfakj1dvi8ng9uagllejjfo90b7.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button onClick={renderProps.onClick} className="google">
                    <img src={google} className="icon"></img>
                    <span style={{ fontFamily: "GothamBook" }}>Google</span>
                  </Button>
                )}
                buttonText="Google"
                onSuccess={this.responseGoogle.bind(this)}
                onFailure={this.responseGoogle.bind(this)}
                cookiePolicy={"single_host_origin"}
                redirectUri={"/profile"}
                isSignedIn={true}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LoginGoogle;
