import React from "react";
import { users } from "../data/users";
import { sports } from "../data/sports";
import { Card, Badge, Button, Row } from "react-bootstrap";
import "./members.css";

export default function Members() {
  return (
    <div>
      <h5>Our members:</h5>
      <Row className="justify-content-md-center">
        {users.map((user) => {
          return (
            <Card className="userCard" key={user.id} style={{ width: "18rem" }}>
              {/* <Card.Img
                variant="bottom"
                src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402587-stock-illustration-female-profile-avatar-icon-dark.jpg"
              /> */}
              <Card.Body>
                <Card.Title>
                  {user.firstName} {user.lastName}
                </Card.Title>
                <Card.Text>
                  <Row className="justify-content-md-center">
                    {sports.map((sport) => {
                      return user.sportId.includes(sport.id) ? (
                        <Badge
                          key={sport.id}
                          className="badge"
                          variant="secondary"
                        >
                          {sport.name}
                        </Badge>
                      ) : null;
                    })}
                  </Row>
                </Card.Text>

                <Button
                  onClick={() => {
                    console.log("delete user");
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
