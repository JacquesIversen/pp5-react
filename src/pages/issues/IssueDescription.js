import React, { useState } from "react";
import { Card, Container, ListGroup, Row } from "react-bootstrap";
import styles from "../../styles/Issue.module.css";
import Avatar from "../../components/Avatar";
import { useAuth } from "../../contexts/CurrentUserContext";

const Issue = (props) => {
  const { profile_image, car, model, year, engine_size, owner } = props;
  const { currentUser } = useAuth();
  useState(owner === currentUser?.username);

  return (
    <Card className={styles.issueCard}>
      <Card.Body className={styles.issueContent}>
        <Row>
          <Avatar src={profile_image} height={50} />
          <Container>{owner}</Container>
        </Row>
        <ListGroup variant="flush">
          <ListGroup.Item>Car: {car}</ListGroup.Item>
          <ListGroup.Item>Model: {model}</ListGroup.Item>
          <ListGroup.Item>Year: {year}</ListGroup.Item>
          <ListGroup.Item>Engine: {engine_size}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Issue;
