import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileSection from "./ProfileSection";

function Question({ questionObject }) {
  return (
    <Row
      className="justify-content-md-center"
      style={{
        marginBottom: "12px",
      }}
    >
      <Card style={{ width: "100%", borderRadius: "25px" }}>
        <Card.Body>
          <Card.Title
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#34324C",
            }}
          >
            {questionObject.title}
          </Card.Title>
          <Card.Text
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            {questionObject.text}
          </Card.Text>
        </Card.Body>

        <div
          style={{
            marginLeft: "16px",
            width: "90%",
            height: " 1px",
            borderBottom: "1px solid #DEDEDE",
          }}
        ></div>

        <Card.Body>
          <Card.Text
            style={{
              fontSize: "16px",
              color: "#34324C",
              fontFamily: "Poppins",
              fontWeight: 700,
              lineHeight: "24px",
            }}
          >
            Asked by:
          </Card.Text>

          <ProfileSection username={"Arturo Bravo"} imageSize={"300"}/>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default Question;
