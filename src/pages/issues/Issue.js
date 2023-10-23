import React from "react";
import { useAuth } from "../../contexts/CurrentUserContext";
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

  const currentUser = useAuth();
  const is_owner = currentUser?.username === owner;
  console.log(is_owner);

  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          {title && <h2>{title}</h2>}
        </Media>
        <div>
          <span>Listed at {created_at}</span>
          {is_owner && issuePage && "Where does this go?"}
        </div>
      </Card.Body>
      <Link to={`/issue/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body className="text-center">
        {description && <Card.Text>{description}</Card.Text>}
      </Card.Body>
      <h4>Total comments {comments_count}</h4>
    </Card>
  );
};

export default Issue;
