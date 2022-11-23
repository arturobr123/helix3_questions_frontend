import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import logo from "./helixImage.jpeg";

function Banner() {
  return (
    <Row className="justify-content-md-center">
      <img alt="test" src={logo} style={{ width: "90%", height: "242px", borderRadius: "32px", marginTop: "16px" }} />
    </Row>
  );
}

export default Banner;
