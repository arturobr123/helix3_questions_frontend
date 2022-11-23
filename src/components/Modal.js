import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal style={{}} isOpen={true} toggle={toggle}>
        <ModalHeader style={{
              fontFamily: "'Rubik'",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "28px",
              color: "#34324C",
            }} toggle={toggle}>New Question</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="question-title">Title</Label>
              <Input
                style={{borderRadius: "25px"}}
                type="text"
                id="question-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="What it your question?"
              />
            </FormGroup>
            <FormGroup>
              <Label for="question-text">Description</Label>
              <Input
                style={{borderRadius: "25px", height: "120px"}}
                type="textarea"
                id="question-text"
                name="text"
                value={this.state.activeItem.text}
                onChange={this.handleChange}
                placeholder="More details..."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
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
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}