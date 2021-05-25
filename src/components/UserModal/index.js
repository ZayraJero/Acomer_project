import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import CustomButton from "../Button";
import UserDirectionInfo from "../UserDirectionInfo";

class UserModal extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                this.handleModal();
              }}
            >
              Abrir
            </Button>
            <Modal
              show={this.state.show}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header
                closeButton
                onHide={() => this.handleModal()}
                style={{
                  border: "none",
                }}
              ></Modal.Header>
              <Modal.Title className="modal-user">
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "GothamBold",
                    fontSize: "24px",
                  }}
                >
                  Mi pedido
                </h1>
              </Modal.Title>
              <Modal.Body className="modal-direction">
                <p
                  style={{
                    display: "flex",
                    fontFamily: "GothamBold",
                    justifyContent: "center",
                    fontSize: "16px",
                    padding: "20px 0",
                  }}
                >
                  ¿Quieres que enviemos tu pedido en esta dirección?
                </p>
                <UserDirectionInfo />
              </Modal.Body>
              <Modal.Footer
                style={{
                  border: "none",
                }}
              >
                <CustomButton className="button" type="submit">
                  Agregar dirección
                </CustomButton>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserModal;
