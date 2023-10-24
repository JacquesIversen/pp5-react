import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, comment_area } = props;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          {/*       <Avatar src={profile_image} /> */}
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span>{owner}</span>
          <span>{updated_at}</span>
          <p>{comment_area}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
