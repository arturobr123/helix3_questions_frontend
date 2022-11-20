import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function Banner() {

  return (
    <Row className="justify-content-md-center" style={{ borderRadius: "20%" }}>
    <Card style={{ width: '80%', height: '150px' , "backgroundColor": "#C8C8C8", marginTop: 50 }} className="justify-content-md-center">
      <Card.Body style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
        <Card.Title style={{fontSize: "32px"}}>Near Protocol</Card.Title>
      </Card.Body>
    </Card>
    </Row>
  );
}

export default Banner;