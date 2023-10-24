import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useAuth } from "../../contexts/CurrentUserContext";
import { DropdownComponent } from "../../components/Dropdown";
import axios from "axios";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    comment_area,
    id,
    setIssue,
    setComments,
  } = props;

  /*   const currentUser = useAuth();
    const is_owner = currentUser?.pk === owner; */
  const is_owner = true;

  const handleDelete = async () => {
    try {
      await axios.delete(`/comments/${id}/`);
      setIssue((prevIssue) => ({
        results: [
          {
            ...prevIssue.results[0],
            comments_count: prevIssue.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

  console.log(owner);
  console.log(is_owner);

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
        {is_owner && (
          <DropdownComponent
            handleEdit={() => {}}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </div>
  );
};

export default Comment;
