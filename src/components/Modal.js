import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function ModalMessage(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>First name</Form.Label>
              {/* <Form.Control type="text" placeholder={user.firstName} />
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder={user.lastName} /> */}
              <Form.Label>Sports</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
