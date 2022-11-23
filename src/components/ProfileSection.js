import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProfileSection({ username, imageSize }) {
  return (
    <Row style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}>
      <Card.Img
        src={`https://i.pravatar.cc/${imageSize}`}
        style={{ width: "50px", height: "50px", borderRadius: "157px" }}
        alt="Card image"
      />

      <Col>
        <Card.Text
          style={{
            fontSize: "16px",
            color: "#6074DD",
            fontFamily: "Poppins",
            fontWeight: 700,
            lineHeight: "24px",
            marginBottom: "0px",
            paddingBottom: 0,
          }}
        >
          {username}
        </Card.Text>
        <Card.Text
          style={{
            fontSize: "14px",
            color: "#969696",
            fontFamily: "Poppins",
            fontWeight: 400,
            lineHeight: "21px",
          }}
        >
          2 questions - 1 answer
        </Card.Text>
      </Col>
    </Row>
  );
}

export default ProfileSection;
