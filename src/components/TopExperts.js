import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import ProfileSection from "./ProfileSection";

function TopExperts() {
  return (
    <Row
      className="justify-content-md-center"
      style={{
        marginBottom: "12px",
        marginLeft: "8px",
      }}
    >
      <Card style={{ width: "280px", borderRadius: "25px" }}>
        <Card.Body>
          <Card.Title>Top Experts</Card.Title>

          <Row>
            <ProfileSection username={"Arturo Bravo"} imageSize={"310"} />
          </Row>

          <Row style={{ marginTop: "12px" }}>
            <ProfileSection username={"Ash Katchup"} imageSize={"320"} />
          </Row>

          <Row style={{ marginTop: "12px" }}>
            <ProfileSection username={"Naruto Usumaki"} imageSize={"330"}/>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default TopExperts;
