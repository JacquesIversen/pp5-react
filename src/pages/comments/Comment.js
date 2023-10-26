import React, { useState } from "react";
import { Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useAuth } from "../../contexts/CurrentUserContext";
import { DropdownComponent } from "../../components/Dropdown";
import axios from "axios";
import styles from "../../styles/Comment.module.css";
import CommentEditForm from "./EditComment";
import Avatar from "../../components/Avatar";
import Cookies from "js-cookie";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    created_at,
    comment_area,
    id,
    setIssue,
    comment,
    setComments,
    like_id,
    setLike,
    like_count,
    dislike_id,
    dislike_count,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const { currentUser } = useAuth();

  const is_owner = currentUser?.username === owner;

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
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "/likes/",
        { comment, id },
        { headers: { Authorization: "Bearer " + Cookies.get("access") } }
      );
      console.log(data);
      setLike((prevLike) => ({
        ...prevLike,
        results: [data, ...prevLike.results],
      }));
      setComments((prevComments) => ({
        results: [
          {
            ...prevComments.results[0],
            like_count: prevComments.results[0].like_count + 1,
          },
        ],
      }));
      setLike("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.issueCard}>
      <hr />
      <Media>
        <Media.Body className="align-self-center ml-2">
          <div className={styles.issueMeta}>
            <span>
              <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={25} />
              </Link>{" "}
              {owner}
            </span>
            <span>{created_at}</span>
          </div>
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
        <div>
          {is_owner ? (
            <>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't like your own comment!</Tooltip>}
              >
                <i className="fa-solid fa-thumbs-up" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't dislike your comment!</Tooltip>}
              >
                <i className="fa-solid fa-thumbs-up fa-rotate-180" />
              </OverlayTrigger>
            </>
          ) : like_id ? (
            <>
              <span onClick={() => {}}>
                <i className="fa-solid fa-thumbs-up" />
              </span>
              <span onClick={() => {}}>
                <i className="fa-solid fa-thumbs-up fa-rotate-180" />
              </span>
            </>
          ) : currentUser ? (
            <>
              <span onClick={handleLike}>
                <i className="fa-solid fa-thumbs-up" />
              </span>
              <span onClick={() => {}}>
                <i className="fa-solid fa-thumbs-up fa-rotate-180" />
              </span>
            </>
          ) : (
            <>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like comments!</Tooltip>}
              >
                <i className="fa-solid fa-thumbs-up" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to dislike comments!</Tooltip>}
              >
                <i className="fa-solid fa-thumbs-up fa-rotate-180" />
              </OverlayTrigger>
            </>
          )}
          <h1> Here should likecount apear{like_count}</h1>
        </div>
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
