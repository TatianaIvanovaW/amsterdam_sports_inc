import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectAllUsers } from "../../store/users/selector";
import { fetchUsers } from "../../store/users/action";
import { sports } from "../../data/sports";
import { Card, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./members.css";

export default function Members() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectAllUsers);

  return (
    <div>
      <h5 className="userMargin">Our members:</h5>
      <Button variant="success">Add a new member</Button>
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
                    console.log("delete user", user.id);
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
