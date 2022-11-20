import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { FaUserAlt,FaArrowUp , FaPaperPlane, FaRegSmileWink} from 'react-icons/fa';

function About() {
  return (
    <Row
      className="justify-content-md-center"
      style={{
        marginBottom: "12px",
        marginLeft: "8px"
      }}
    >
      <Card style={{ width: "280px" }}>
        <Card.Body>
          <Card.Title>About</Card.Title>

          <Card.Text>
          <FaUserAlt/> 256 Experts
          </Card.Text> 

          <Card.Text>
          <FaPaperPlane/> 100k Questions and Answers
          </Card.Text> 

          <Card.Text>
          <FaArrowUp/> 50k votes
          </Card.Text> 

          <Card.Text>
          <FaRegSmileWink/> 145 token awards
          </Card.Text> 
        </Card.Body>



      </Card>
    </Row>
  );
}

export default About;
