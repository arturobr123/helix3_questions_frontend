import React, { Component } from "react";
import Modal from "./components/Modal";
import NavbarHelix from "./components/NavbarHelix";
import Banner from "./components/Banner";
import Question from "./components/Question";
import TopExperts from "./components/TopExperts";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "./components/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      questionList: [],
      modal: false,
      activeItem: {
        title: "",
        text: "",
        completed: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/questions/")
      .then((res) => this.setState({ questionList: res.data }))
      .catch((err) => {
        console.log("ERROR");
        console.log(err);
      });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      console.log("EDIT!!!");
      axios
        .put(`/api/questions/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }

    console.log("CREATE!!!");
    axios
      .post("/api/questions/", item)
      .then((res) => this.refreshList())
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/questions/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", text: "", completed: false };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const newItems = this.state.questionList.reverse();
    
    return newItems.map((item) => <Question questionObject={item} />);
  };

  render() {
    return (
      <main className="container">
        <NavbarHelix askQuestionAction={this.createItem} />
        <Banner />

        <div className="row">
          <div
            style={{ width: "80%", marginTop: "32px" }}
            className="mx-auto p-0"
          >
            <Container>
              <Row>
                <Col>{this.renderItems()}</Col>
                <Col md="auto">
                  <About />

                  <TopExperts />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
