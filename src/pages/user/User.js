import React from "react";
import ModalMessage from "../../components/Modal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectAllUsers } from "../../store/users/selector";
import { selectUser } from "../../store/user/selector";
import { findUser } from "../../store/user/action";
import { selectAllSports } from "../../store/sports/selector";
import { fetchSports } from "../../store/sports/action";
import {
  Button,
  Image,
  Row,
  Badge,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";

import "./user.css";

export default function UserPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const users = useSelector(selectAllUsers);
  const sports = useSelector(selectAllSports);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    dispatch(findUser(params.id, users));
    dispatch(fetchSports());
  }, [dispatch, params.id, users]);

  function alert() {
    setShowAlert(true);
  }

  return (
    <div className="userMargin">
      {showAlert ? (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          The member edited!
        </Alert>
      ) : null}
      {user ? (
        <Row>
          <Col>
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <Row className="justify-content-md-center">
              {sports.map((sport) => {
                return user?.sportId?.includes(sport.id) ? (
                  <Badge key={sport.id} className="badge" variant="secondary">
                    {sport.name}
                  </Badge>
                ) : null;
              })}
            </Row>
            <Image className="userImage" alt="user" src={user.photo} />
            <Row className="justify-content-md-center">
              <Button variant="info" onClick={handleShow}>
                Edit
              </Button>
              <ModalMessage
                alert={alert}
                show={show}
                user={user}
                handleClose={handleClose}
              />
            </Row>
          </Col>
        </Row>
      ) : (
        <Spinner animation="border" role="status"></Spinner>
      )}
    </div>
  );
}
