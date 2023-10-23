import React from "react";
import { Card, ListGroup, Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Issue = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    created_at,
    title,
    car,
    model,
    year,
    engine_size,
    description,
    is_solved,
    image,
    comments_count,
    issuePage,
  } = props;

  return (
    <Card>
      <Card.Body>
        <link to={`/profiles/${profile_id}`}></link>
        <h2>This will be an Avatar {owner}</h2>
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
