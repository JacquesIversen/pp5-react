import React from "react";
import { Card, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styles from "../../styles/Issue.module.css";
import Avatar from "../../components/Avatar";

const Issue = (props) => {
  const { profile_id, profile_image, car, model, year, engine_size } = props;

  return (
    <Card className={styles.issueCard}>
      <Card.Body className={styles.issueContent}>
        <Row>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={50} />
          </Link>
          <h4>Here follows info on the</h4>
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
