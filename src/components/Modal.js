import React from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { selectAllSports } from "../store/sports/selector";
import { fetchSports } from "../store/sports/action";
import { addNewUser } from "../store/users/action";

export default function ModalMessage(props) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const sports = useSelector(selectAllSports);
  let sportId = props.user ? props.user.sportId : [];

  useEffect(() => {
    dispatch(fetchSports());
  }, [dispatch]);

  function saveChanges() {
    props.handleClose();

    const newUser = {
      id: props.user ? props.user.id : parseInt(Math.random() * 1000),
      firstName: firstName ? firstName : props.user.firstName,
      lastName: lastName ? lastName : props.user.lastName,
      sportId: sportId.length > 0 ? sportId : props.user.sportId,
      photo: props.user
        ? props.user.photo
        : "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png",
    };

    dispatch(addNewUser(newUser, props.users));
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
                    e.preventDefault();

                    setFirstName(e.target.value);
                  }}
                  className="form-control"
                  id="validationCustom01"
                  required
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
                  required
                  type="text"
                  placeholder={!props.user ? "Last Name" : props.user.lastName}
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
                  checked={sportId?.includes(sport.id)}
                  value={sport.id}
                  key={sport.id}
                  inline
                  label={sport.name}
                  type="checkbox"
                />
              ))}
              <Col style={{ padding: "20px 0px 15px 20px" }}>
                <Row>
                  <Form.Label>Upload picture</Form.Label>
                </Row>
                <Row>
                  <input // upload image
                    type="file"
                    style={{ display: "none" }}
                    id="fileElem"
                    accept="image/x-png,image/jpeg"
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
