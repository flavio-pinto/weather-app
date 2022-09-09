import { Col, Container, Form, Row } from "react-bootstrap";

const Nav = () => {
  return (
    <Container fluid className="bg-danger">
      <Row>
        <Col className="pt-5 pb-5">
          <h1 className="pb-4">Weather App</h1>
          <Row>
            <Col xs={{ span: 8, offset: 2 }}>
              <Form className="pb-4">
                <Form.Control
                  type="text"
                  placeholder="Inserisci il nome della città"
                />
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
