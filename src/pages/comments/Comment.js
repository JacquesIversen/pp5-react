import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useAuth } from "../../contexts/CurrentUserContext";
import { DropdownComponent } from "../../components/Dropdown";
import axios from "axios";
import styles from "../../styles/Comment.module.css";
import CommentEditForm from "./EditComment";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    created_at,
    comment_area,
    id,
    setIssue,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
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
    <div className={styles.issueCard}>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          {/*       <Avatar src={profile_image} /> */}
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span>{owner}</span>
          <br />
          <span>{created_at}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={comment_area}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{comment_area}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <DropdownComponent
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </div>
  );
};

export default Comment;
