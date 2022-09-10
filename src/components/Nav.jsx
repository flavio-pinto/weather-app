import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Nav = (props) => {
  const [query, setQuery] = useState('');

  return (
    <Container fluid className="header">
      <Row>
        <Col className="pt-5 pb-5">
          <h1 className="pb-4 display-1">Weather App</h1>
          <Row>
            <Col xs={{ span: 8, offset: 2 }} md={{span: 4, offset: 4}} className="">
              <Form className="d-flex">
                <div type="button" className="search-geo d-flex align-items-center justify-content-center">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il nome della città"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                  }}
                />
                <div type="button" className="search-icon d-flex align-items-center justify-content-center" onClick={() => props.getWeather(query)}>
                  <i className="bi bi-search"></i>
                </div>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
