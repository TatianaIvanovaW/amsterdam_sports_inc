import React from "react";
import { sports } from "../data/sports";
import { ListGroup, Row } from "react-bootstrap";
import "./sports.css";

export default function SportsPage() {
  return (
    <div>
      {sports.map((sport) => {
        return (
          <Row key={sport.id} className="justify-content-md-center" lg={3}>
            <ListGroup>
              <ListGroup.Item>{sport.name}</ListGroup.Item>
            </ListGroup>
          </Row>
        );
      })}
    </div>
  );
}
