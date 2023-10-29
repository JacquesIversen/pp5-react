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
  like_id,
  likes_count,
  dislike_id,
  dislikes_count,
  likes,
  dislikes,
  setComments,
  setIssue,
}) => {
  const history = useHistory();

  // console.log(comment_area)

  const [showEditForm, setShowEditForm] = useState(false);
  const { currentUser } = useAuth();

  const [commentError, setCommentError] = useState(null);
  // check if user has liked this comment
  const [like, setLiked] = useState(
    likes?.find((like) => like.owner === currentUser?.username) ? true : false
  );
  // check if user has disliked this comment
  const [dislike, setDisliked] = useState(
    dislikes?.find((dislike) => dislike.owner === currentUser?.username)
      ? true
      : false
  );

  const [is_owner, setIsOwner] = useState(owner === currentUser?.username);

  //const is_owner = currentUser?.username === owner;
  // const is_owner = false;

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

      // console.log(data)
      // console.log(data.comment === null)
      // console.log(data.comment === id)
      if (data.comment === null) {
        // unlike
        // set comments like_id to null
        // set decrement likes_count by one
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
        // like
        // check if user has disliked this comment
        // if yes, decrement dislikes_count by one
        // and increment likes_count by one
        // else increment likes_count by one
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
        console.log("dunno what to do");
      }
    } catch (error) {
      if (error.response.status === 401) {
        history.push("/signin");
      }
      if (error.response.data.detail === "You cannot like your own comment.") {
        setCommentError("You cannot like your own comment.");
      }
      // console.log(error.response.data.detail)
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
      console.log(data);
      if (data.comment === null) {
        // undislike
        // set comments like_id to null
        // set decrement likes_count by one
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
        // dislike
        // increment dislikes_count by one
        // check if user has liked this comment
        // if yes, decrement likes_count by one
        // and increment dislikes_count by one
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
        console.log("dunno what to do");
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
      console.log(error.response.data.detail);
    }
  };

  // const handleUnlike = async () => {
  //   try {
  //     await axios.delete(`/likes/${like_id}/`, {
  //       headers: { Authorization: "Bearer " + Cookies.get("access") },
  //     });
  //     // setComments((prevComments) => ({
  //     //   ...prevComments,
  //     //   results: prevComments.results.map((comment) => {
  //     //     return comment.id === id
  //     //       ? {
  //     //         ...comment,
  //     //         likes_count: comment.likes_count - 1,
  //     //         like_id: null,
  //     //       }
  //     //       : comment;
  //     //   }),
  //     // }));
  //   } catch (err) { }
  // };

  // const handleUnDislike = async () => {
  //   try {
  //     await axios.delete(`/dislikes/${dislike_id}/`, {
  //       headers: { Authorization: "Bearer " + Cookies.get("access") },
  //     });
  //     // setComments((prevComments) => ({
  //     //   ...prevComments,
  //     //   results: prevComments.results.map((comment) => {
  //     //     return comment.id === id
  //     //       ? {
  //     //         ...comment,
  //     //         dislikes_count: comment.dislikes_count - 1,
  //     //         dislike_id: null,
  //     //       }
  //     //       : comment;
  //     //   }),
  //     // }));
  //   } catch (err) { }
  // };

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
            {/* {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't like your own comment!</Tooltip>}
              >
                <i className="fa-solid fa-hands" />
              </OverlayTrigger>
            ) : like_id ? (
              <>
                <span onClick={handleUnlike}>
                  <i className={`fa-solid fa-thumbs-up ${styles.like}`} />
                </span>
                <span onClick={() => { }}>
                  <i className="fa-solid fa-thumbs-up fa-rotate-180" />
                </span>
              </>
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
            )} */}
          </Col>
          <Col>
            {/* {is_owner ? (
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
            )} */}
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
            {/* <span onClick={() => { handleDisLike() }}>
              <i className="fa-solid fa-thumbs-up fa-rotate-180" />
            </span> */}
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
