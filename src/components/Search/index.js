import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import lupa from "../../assets/icons/search.svg";

const Search = ({ search, handleSearch }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Form>
            <FormControl
              style={{
                fontFamily: "GothamBold",
                fontSize: "15px",
                border: "none",
                borderRadius: "20px",
                backgroundColor: "#F3F4F6",
                padding: "25px 60px",
                backgroundImage: `url(${lupa})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left 23px center",
              }}
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Busca tu colonia "
              className="placeholder"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
