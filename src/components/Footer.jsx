import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <p className="footer-text">
        Created by Flavio Pinto{" "}
        <a href="https://github.com/flavio-pinto">
          <i class="bi bi-github"></i>
        </a>{" "}
        - Powered by <a href="https://openweathermap.org/">OpenWeather</a>
      </p>
    </Container>
  );
};

export default Footer;
