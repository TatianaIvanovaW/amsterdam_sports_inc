import React from "react";
import ModalMessage from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectAllUsers } from "../../store/users/selector";
import { findAllUsers, deleteUser } from "../../store/users/action";
import { Card, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./members.css";

export default function Members() {
  const dispatch = useDispatch();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(findAllUsers());
  }, [dispatch]);
  const users = useSelector(selectAllUsers);

  return (
    <div>
      <h5 className="userMargin">Our members:</h5>
      <Button variant="success" onClick={handleShow}>
        Add a new member
      </Button>
      <ModalMessage users={users} show={show} handleClose={handleClose} />
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
