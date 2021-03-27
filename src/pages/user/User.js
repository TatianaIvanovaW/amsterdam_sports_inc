import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../../data/users";
import { sports } from "../../data/sports";
import { Button, Image, Row, Badge, Col } from "react-bootstrap";
import "./user.css";

export default function UserPage() {
  const params = useParams();
  const user = users.find((user) => {
    return user.id === parseInt(params.id);
  });
  console.log(user);
  return (
    <div>
      <Row>
        <Col>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <Row className="justify-content-md-center">
            {sports.map((sport) => {
              return user.sportId.includes(sport.id) ? (
                <Badge key={sport.id} className="badge" variant="secondary">
                  {sport.name}
                </Badge>
              ) : null;
            })}
          </Row>
          <Image className="userImage" alt="user" src={user.photo} />
          <Row className="justify-content-md-center">
            <Button variant="info">Edit</Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
