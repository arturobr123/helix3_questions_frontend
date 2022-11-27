import Card from "react-bootstrap/Card";

function Comments({ questionObject }) {

  return (
    <>
      {questionObject.comments.length > 0 && (
        <Card.Body>
          <Card.Text
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "bold",
            }}
          >
            Comments
          </Card.Text>
          {questionObject.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <p>{comment.text}</p>
                <p
                  style={{
                    fontSize: "10px",
                    color: "grey",
                    marginBottom: "4px",
                  }}
                >
                  {"November 21, 2022"}
                </p>
              </div>
            );
          })}
        </Card.Body>
      )}
    </>
  );
}

export default Comments;
