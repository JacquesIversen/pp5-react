import React, { useState } from "react";
import {
  Card,
  Col,
  Media,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
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
    setComments,
    like_id,
    likes_count,
    dislike_id,
    dislikes_count,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const { currentUser } = useAuth();

  const is_owner = currentUser?.username === owner;

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
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axios.post(
        "/likes/",
        { comment: id },
        { headers: { Authorization: "Bearer " + Cookies.get("access") } }
      );
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                likes_count: comment.likes_count + 1,
                like_id: data.id,
              }
            : comment;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDisLike = async () => {
    try {
      const { data } = await axios.post(
        "/dislikes/",
        { comment: id },
        { headers: { Authorization: "Bearer " + Cookies.get("access") } }
      );
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                dislikes_count: comment.dislikes_count + 1,
                dislike_id: data.id,
              }
            : comment;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axios.delete(`/likes/${like_id}/`, {
        headers: { Authorization: "Bearer " + Cookies.get("access") },
      });
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
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnDislike = async () => {
    try {
      await axios.delete(`/dislikes/${dislike_id}/`, {
        headers: { Authorization: "Bearer " + Cookies.get("access") },
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                dislikes_count: comment.dislikes_count - 1,
                dislike_id: null,
              }
            : comment;
        }),
      }));
    } catch (err) {
      console.log(err);
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
            {is_owner && !showEditForm && (
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
            {likes_count}
            &emsp;
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't like your own comment!</Tooltip>}
              >
                <i className="fa-solid fa-hands" />
              </OverlayTrigger>
            ) : like_id ? (
              <span onClick={handleUnlike}>
                <i className={`fa-solid fa-thumbs-up ${styles.like}`} />
              </span>
            ) : currentUser ? (
              <span onClick={handleLike}>
                <i className={`fa-regular fa-thumbs-up ${styles.like}`} />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like comments!</Tooltip>}
              >
                <i className={`fa-regular fa-thumbs-up ${styles.like}`} />
              </OverlayTrigger>
            )}
          </Col>
          <Col>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't dislike your comment!</Tooltip>}
              >
                <i className="fa-solid fa-hands" />
              </OverlayTrigger>
            ) : dislike_id ? (
              <span onClick={handleUnDislike}>
                <i
                  className={`fa-solid fa-thumbs-up fa-rotate-180 ${styles.dislike}`}
                />
              </span>
            ) : currentUser ? (
              <span onClick={handleDisLike}>
                <i
                  className={`fa-regular fa-thumbs-up fa-rotate-180 ${styles.dislike}`}
                />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to dislike comments!</Tooltip>}
              >
                className=
                {`fa-regular fa-thumbs-up fa-rotate-180 ${styles.dislike}`}
              </OverlayTrigger>
            )}
            &emsp;
            {dislikes_count}
          </Col>
        </Row>
      </Media>
      <hr />
    </Card>
  );
};

export default Comment;
