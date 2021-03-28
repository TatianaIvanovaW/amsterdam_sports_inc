import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { selectAllSports } from "../store/sports/selector";
import { fetchSports } from "../store/sports/action";

export default function ModalMessage(props) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sportsId, setSportsId] = useState([]);
  const sports = useSelector(selectAllSports);

  useEffect(() => {
    dispatch(fetchSports());
  }, [dispatch]);

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
              <Form.Control
                type="text"
                placeholder={props.user ? props.user.firstName : "Enter Name"}
              />
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder={
                  props.user ? props.user.lastName : "Enter Last Name"
                }
              />
              <Form.Label>Choose Sports</Form.Label>
              <Form.Group>
                {sports.map((sport) => (
                  <Form.Check
                    key={sport.id}
                    inline
                    label={sport.name}
                    type="checkbox"
                  />
                ))}
              </Form.Group>
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
