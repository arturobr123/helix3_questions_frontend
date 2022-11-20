import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Question({ questionObject }) {
  return (
    <Row
      className="justify-content-md-center"
      style={{
        marginBottom: "12px",
      }}
    >
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{questionObject.title}</Card.Title>
          <Card.Text>{questionObject.text}</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Text style={{ fontSize: "12px" }}>Ask by:</Card.Text>

          <Row
            style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}
          >
            <Card.Img
              src="https://i.pravatar.cc/300"
              style={{ width: "50px", height: "50px",  borderRadius: "20%" }}
              alt="Card image"
            />

            <Col>
              <Card.Text style={{ fontSize: "12px" }}>
                Arturo Bravo
              </Card.Text>
              <Card.Text
                style={{
                  fontSize: "10px",
                }}
              >
                2 questions - 1 answer
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default Question;
