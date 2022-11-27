import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import axios from "axios";
import ProfileSection from "./ProfileSection";
import Comments from "./Comments";


import { Form, FormGroup, Input, Button } from "reactstrap";
import { useRef } from "react";

import { useState } from "react";

function Question({ questionObject }) {
  const inputRef = useRef(null);

  const [commentText, setCommentText] = useState("");

  // create or update question
  const handleSubmitComment = (item) => {
    console.log("CREATE!!!");

    //const inputComment = inputRef.current.value;
    console.log(commentText);
    axios
      .post("/api/comments/", {
        text: commentText,
        question: 11,
      })
      .then((res) => this.refreshList())
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

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

          <ProfileSection username={"Arturo Bravo"} imageSize={"300"} />
        </Card.Body>

        <Comments questionObject={questionObject}  />

        <Card.Body>
          <Form>
            <FormGroup>
              <Input
                ref={inputRef}
                style={{ borderRadius: "25px" }}
                type="text"
                id="comment"
                name="comment"
                placeholder="Add a comment..."
                onChange={handleChange}
              />
            </FormGroup>

            <Button
              style={{
                borderColor: "#FFFFFF",
                color: "#FFFFFF",
                backgroundColor: "#6074DD",
                borderRadius: "25px",
                padding: "8px",
                paddingLeft: "24px",
                paddingRight: "24px",
                fontSize: "12px",
              }}
              size="lg"
              onClick={() => {
                handleSubmitComment();
              }}
            >
              Save
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default Question;
