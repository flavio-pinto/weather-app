import { Col, Container, Row } from "react-bootstrap";

const Results = (props) => {
  console.log(props);
  return (
    <Container>
      {props.weatherData && (
        <Row>
          <Col>
            <div className="weatherWrapper">
              <Row className="align-items-center">
                <Col>
                  <p className="mb-0">
                    {props.weatherData.name +
                      " - " +
                      props.weatherData.sys.country}
                  </p>
                </Col>
                <Col>
                  {props.weatherData && (
                    <div>
                      <span className="fs-1 fw-bold">{props.weatherData.main.temp}</span>
                      <sup>°C</sup>
                    </div>
                  )}
                </Col>
                <Col>
                  <img
                    src={
                      "http://openweathermap.org/img/wn/" +
                      props.weatherData.weather[0].icon +
                      "@2x.png"
                    }
                    alt={props.weatherData.weather[0].description + " icon"}
                  />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col>
                  <div>
                    <small>Humidity</small>
                    <span>{props.weatherData.main.humidity}</span>
                    <sup>%</sup>
                  </div>
                </Col>
                <Col>
                  <div>
                    <span>
                      <small>Visibility</small>
                      {String(props.weatherData.visibility).slice(0, 2)}
                    </span>
                    <sup>km</sup>
                  </div>
                </Col>
                <Col>
                  <div>
                  <small>Condition</small>
                    <span className="text-capitalize">{props.weatherData.weather[0].description}</span>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col>
                  <div>
                    <small>Pressure</small>
                    <span>{props.weatherData.main.pressure}</span>
                    <sup>mb</sup>
                  </div>
                </Col>
                <Col>
                  <div>
                    <small>Feels like</small>
                    <span>{props.weatherData.main.feels_like}</span>
                    <sup>°C</sup>
                  </div>
                </Col>
                <Col>
                  <div>
                    <small>Wind direction</small>
                    <span>
                      <i
                        style={{
                          transform:
                            'rotate(' + props.weatherData.wind.deg + 'deg)'
                        }}
                        className="bi bi-arrow-down-circle-fill d-block"
                      ></i>
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Results;
