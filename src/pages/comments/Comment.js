import React, { useState } from "react";
import { Card, Col, Media, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useAuth } from "../../contexts/CurrentUserContext";
import { DropdownComponent } from "../../components/Dropdown";
import axios from "axios";
import styles from "../../styles/Comment.module.css";
import CommentEditForm from "./EditComment";
import Avatar from "../../components/Avatar";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Comment = ({
  profile_id,
  profile_image,
  owner,
  created_at,
  comment_area,
  id,
  likes_count,
  dislikes_count,
  likes,
  dislikes,
  setComments,
  setIssue,
}) => {
  const history = useHistory();

  const [showEditForm, setShowEditForm] = useState(false);
  const { currentUser } = useAuth();

  const [commentError, setCommentError] = useState(null);

  const [like, setLiked] = useState(
    likes?.find((like) => like.owner === currentUser?.username) ? true : false
  );

  const [dislike, setDisliked] = useState(
    dislikes?.find((dislike) => dislike.owner === currentUser?.username)
      ? true
      : false
  );

  const [is_owner] = useState(owner === currentUser?.username);

  const handleDelete = async () => {
    try {
      await axios.delete(`/comments/${id}/`, {
        headers: { Authorization: "Bearer " + Cookies.get("access") },
      });
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

  const handleLike = async () => {
    setCommentError(null);
    try {
      const { data } = await axios.post(
        "/likes/",
        { comment: id },
        { headers: { Authorization: "Bearer " + Cookies.get("access") } }
      );

      if (data.comment === null) {
        setComments((prevComments) => ({
          ...prevComments,
          results: prevComments.results.map((comment) => {
            return comment.id === id
              ? {
                  ...comment,
                  likes_count: comment.likes_count - 1,
                  like_id: null,
                }
              : comment;
          }),
        }));
        setLiked(false);
      }
      if (data.comment === id) {
        setComments((prevComments) => ({
          ...prevComments,
          results: prevComments.results.map((comment) => {
            return comment.id === id
              ? {
                  ...comment,
                  dislikes_count: dislike
                    ? comment.dislikes_count - 1
                    : comment.dislikes_count,
                  likes_count: comment.likes_count + 1,
                  like_id: data.id,
                }
              : comment;
          }),
        }));
        setLiked(true);
        setDisliked(false);
      } else {
      }
    } catch (error) {
      if (error.response.status === 401) {
        history.push("/signin");
      }
      if (error.response.data.detail === "You cannot like your own comment.") {
        setCommentError("You cannot like your own comment.");
      }
    }
  };

  const handleDisLike = async () => {
    setCommentError(null);
    try {
      const { data } = await axios.post(
        "/dislikes/",
        { comment: id },
        { headers: { Authorization: "Bearer " + Cookies.get("access") } }
      );
      if (data.comment === null) {
        setComments((prevComments) => ({
          ...prevComments,
          results: prevComments.results.map((comment) => {
            return comment.id === id
              ? {
                  ...comment,
                  dislikes_count: comment.likes_count - 1,
                  dislike_id: null,
                }
              : comment;
          }),
        }));
        setDisliked(false);
      }
      if (data.comment === id) {
        setComments((prevComments) => ({
          ...prevComments,
          results: prevComments.results.map((comment) => {
            return comment.id === id
              ? {
                  ...comment,
                  likes_count: like
                    ? comment.likes_count - 1
                    : comment.likes_count,
                  dislikes_count: comment.dislikes_count + 1,
                  dislike_id: data.id,
                }
              : comment;
          }),
        }));
        setDisliked(true);
        setLiked(false);
      } else {
      }
    } catch (error) {
      if (error.response.status === 401) {
        history.push("/signin");
      }
      if (
        error.response.data.detail === "You cannot dislike your own comment."
      ) {
        setCommentError("You cannot dislike your own comment.");
      }
    }
  };

  return (
    <Card className={styles.commentCard}>
      <Media>
        <Media.Body className="align-self-center ml-2">
          <div className={styles.commentMeta}>
            <span>
              <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={25} />
              </Link>{" "}
              {owner}
            </span>
            <span>{created_at}</span>
            {is_owner && (
              <DropdownComponent
                handleEdit={() => setShowEditForm(true)}
                handleDelete={handleDelete}
              />
            )}
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
        <Row className="text-center">
          <Col>
            {likes_count || 0}
            &emsp;
            {like ? (
              <span
                onClick={() => {
                  handleLike();
                }}
              >
                <i
                  className="fa-solid fa-thumbs-up"
                  style={{ color: "blue" }}
                />
              </span>
            ) : (
              <span
                onClick={() => {
                  handleLike();
                }}
              >
                <i className={`fa-regular fa-thumbs-up ${styles.like}`} />
              </span>
            )}
          </Col>
          <Col>
            {dislike ? (
              <span
                onClick={() => {
                  handleDisLike();
                }}
              >
                <i
                  className="fa-solid fa-thumbs-up fa-rotate-180"
                  style={{ color: "red" }}
                />
              </span>
            ) : (
              <span
                onClick={() => {
                  handleDisLike();
                }}
              >
                <i className={`fa-regular fa-thumbs-up fa-rotate-180`} />
              </span>
            )}
            &emsp;
            {dislikes_count || 0}
          </Col>
        </Row>
      </Media>
      <hr />
      {commentError && <p style={{ color: "red" }}>{commentError}</p>}
    </Card>
  );
};

export default Comment;
