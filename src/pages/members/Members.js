import React from "react";
import ModalMessage from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectAllUsers } from "../../store/users/selector";
import { findAllUsers, deleteUser } from "../../store/users/action";
import { Card, Button, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./members.css";

export default function Members() {
  const dispatch = useDispatch();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  function alert() {
    setShowAlert(true);
  }

  useEffect(() => {
    dispatch(findAllUsers());
  }, [dispatch]);
  const users = useSelector(selectAllUsers);

  return (
    <div>
      {showAlert ? (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          New member added!
        </Alert>
      ) : deleteAlert ? (
        <Alert
          variant="danger"
          onClose={() => setDeleteAlert(false)}
          dismissible
        >
          The member deleted
        </Alert>
      ) : null}
      <h5 className="userMargin">Our members:</h5>
      <Button variant="success" onClick={handleShow}>
        Add a new member
      </Button>
      <ModalMessage
        alert={alert}
        users={users}
        show={show}
        handleClose={handleClose}
      />
      <Row className="justify-content-md-left">
        {users.map((user) => {
          return (
            <Card
              className="userMargin"
              key={user.id}
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>
                  <Link className="userLink" to={`/user/${user.id}`}>
                    {user.firstName} {user.lastName}
                  </Link>
                </Card.Title>

                <Button
                  onClick={() => {
                    dispatch(deleteUser(user.id, users));
                    setDeleteAlert(true);
                  }}
                  variant="danger"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </div>
  );
}
