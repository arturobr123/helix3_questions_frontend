import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function TopExperts() {
  return (
    <Row
      className="justify-content-md-center"
      style={{
        marginBottom: "12px",
        marginLeft: "8px",
      }}
    >
      <Card style={{ width: "280px" }}>
        <Card.Body>
          <Card.Title>Top Experts</Card.Title>

          <Row
            style={{ display: "flex", alignItems: "center", marginLeft: "0px", marginBottom: "8px" }}
          >
            <Card.Img
              src="https://i.pravatar.cc/320"
              style={{ width: "50px", height: "50px", borderRadius: "20%" }}
              alt="Card image"
            />
            <Card.Text style={{ fontSize: "12px", marginLeft: "8px" }}>
              Arturo Bravo
            </Card.Text>
          </Row>

          <Row
            style={{ display: "flex", alignItems: "center", marginLeft: "0px", marginBottom: "8px" }}
          >
            <Card.Img
              src="https://i.pravatar.cc/340"
              style={{ width: "50px", height: "50px", borderRadius: "20%" }}
              alt="Card image"
            />
            <Card.Text style={{ fontSize: "12px", marginLeft: "8px" }}>
              Ash Katchup
            </Card.Text>
          </Row>

          <Row
            style={{ display: "flex", alignItems: "center", marginLeft: "0px", marginBottom: "8px" }}
          >
            <Card.Img
              src="https://i.pravatar.cc/360"
              style={{ width: "50px", height: "50px", borderRadius: "20%" }}
              alt="Card image"
            />
            <Card.Text style={{ fontSize: "12px", marginLeft: "8px" }}>
              Naruto Usumaki
            </Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default TopExperts;
