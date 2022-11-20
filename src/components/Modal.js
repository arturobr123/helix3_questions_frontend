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
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Question</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="question-title">Title</Label>
              <Input
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
                type="text"
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
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}