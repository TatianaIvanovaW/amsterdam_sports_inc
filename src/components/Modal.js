import React from "react";
import { Modal, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { selectAllSports } from "../store/sports/selector";
import { fetchSports } from "../store/sports/action";
import { addNewUser } from "../store/users/action";
import { editUser } from "../store/user/action";

export default function ModalMessage(props) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newSports, setNewSports] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const sports = useSelector(selectAllSports);

  useEffect(() => {
    dispatch(fetchSports());
    if (props.user) setNewSports(props.user.sportId);
  }, [dispatch, props.user]);

  function saveChanges() {
    props.handleClose();

    const newUser = {
      id: props.user ? props.user.id : parseInt(Math.random() * 1000),
      firstName: firstName ? firstName : props.user.firstName,
      lastName: lastName ? lastName : props.user.lastName,
      sportId: newSports,
      photo: props.user
        ? props.user.photo
        : "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png",
    };
    props.user
      ? dispatch(editUser(props.user.id, props.users, newUser))
      : dispatch(addNewUser(newUser, props.users));
    props.alert();
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
            newSports.length > 0 ? saveChanges() : setShowAlert(true);
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
                    e.preventDefault();

                    setFirstName(e.target.value);
                  }}
                  className="form-control"
                  id="validationCustom01"
                  required={!props.user}
                  type="text"
                  placeholder={
                    !props.user ? "First Name" : props.user.firstName
                  }
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">
                  Last name
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setLastName(e.target.value);
                  }}
                  className="form-control"
                  id="validationCustom02"
                  required={!props.user}
                  type="text"
                  placeholder={!props.user ? "Last Name" : props.user.lastName}
                />
              </div>
            </Row>

            <Form.Label style={{ padding: "20px 0px 15px 20px" }}>
              Choose Sports
            </Form.Label>

            <Form.Group style={{ paddingLeft: "15px" }}>
              {sports.map((sport) => {
                return (
                  <Form.Check
                    onChange={(e) => {
                      if (!newSports.includes(sport.id)) {
                        setNewSports([...newSports, sport.id]);
                      } else {
                        let sportId = newSports.filter((id) => {
                          return id !== sport.id;
                        });
                        setNewSports(sportId);
                      }
                    }}
                    checked={newSports?.includes(sport.id)}
                    value={sport.id}
                    key={sport.id}
                    inline
                    label={sport.name}
                    type="checkbox"
                  />
                );
              })}{" "}
              {showAlert ? (
                <Alert
                  variant="danger"
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  You have to add at least one sport!
                </Alert>
              ) : null}
              <Col style={{ padding: "20px 0px 15px 20px" }}>
                <Row>
                  <Form.Label>Upload picture</Form.Label>
                </Row>
                <Row>
                  <input // upload image
                    type="file"
                  />
                </Row>
              </Col>
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
