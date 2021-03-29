import React from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { selectAllSports } from "../store/sports/selector";
import { fetchSports } from "../store/sports/action";

export default function ModalMessage(props) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [user, setUser] = useState({});
  const sports = useSelector(selectAllSports);
  let sportId = [];
  console.log(`user`, user);

  useEffect(() => {
    dispatch(fetchSports());
  }, [dispatch]);

  function saveChanges() {
    props.handleClose();
    const newUser = {
      id: props.user ? props.user.id : 13,
      firtsName: firstName ? firstName : props.user.firstName,
      lastName: lastName ? lastName : props.user.lastName,
      sportId: sportId.length > 0 ? sportId : props.user.sportId,
      photo: "",
    };
    setUser(newUser);
  }

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props.user ? "Edit" : "Add"} </Modal.Title>
        </Modal.Header>{" "}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            saveChanges();
          }}
          className="row g-3 needs-validation"
          novalidate
        >
          <Modal.Body>
            <Row style={{ paddingLeft: "20px" }}>
              <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">
                  First name
                </label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  className="form-control"
                  id="validationCustom01"
                  required
                  type="text"
                  value={props.user ? props.user.firstName : firstName}
                  placeholder={!props.user ? "Enter Name" : null}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" class="form-label">
                  Last name
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setLastName(e.target.value);
                  }}
                  className="form-control"
                  id="validationCustom02"
                  required
                  type="text"
                  value={props.user ? props.user.lastName : lastName}
                  placeholder={!props.user ? "Enter Name" : null}
                />
              </div>
            </Row>

            <Form.Label style={{ padding: "20px 0px 15px 20px" }}>
              Choose Sports
            </Form.Label>
            <Form.Group style={{ paddingLeft: "15px" }}>
              {sports.map((sport) => (
                <Form.Check
                  onChange={(e) => {
                    if (!sportId.includes(sport.id)) {
                      sportId.push(sport.id);
                    } else {
                      sportId = sportId.filter((id) => {
                        return id !== sport.id;
                      });
                    }
                  }}
                  checked={props.user?.sportId?.includes(sport.id)}
                  value={sport.id}
                  key={sport.id}
                  inline
                  label={sport.name}
                  type="checkbox"
                />
              ))}{" "}
              <Row>
                <Button
                  style={{ margin: "10px" }}
                  variant="secondary"
                  onClick={props.handleClose}
                >
                  Close
                </Button>
                <Button
                  style={{ margin: "10px" }}
                  variant="primary"
                  type="submit"
                >
                  Save Changes
                </Button>
              </Row>
            </Form.Group>
          </Modal.Body>
        </Form>
      </Modal>
    </div>
  );
}
