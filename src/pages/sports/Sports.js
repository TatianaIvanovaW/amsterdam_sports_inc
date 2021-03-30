import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllSports } from "../../store/sports/selector";
import { fetchSports } from "../../store/sports/action";
import { useEffect } from "react";
import { ListGroup, Row } from "react-bootstrap";
import "./sports.css";

export default function SportsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSports());
  }, [dispatch]);
  const sports = useSelector(selectAllSports);
  return (
    <div>
      <h5 className="userMargin">
        {" "}
        We provide following sports to our members:{" "}
      </h5>
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
