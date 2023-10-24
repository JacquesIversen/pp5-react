import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Issue from "./Issue";
import IssueDescription from "./IssueDescription";
import styles from "../../styles/Issue.module.css";
import { useAuth } from "../../contexts/CurrentUserContext";
import CommentCreateForm from "../comments/CreateComment";
import Comment from "../comments/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/Utils";

function IssuePage() {
  const { id } = useParams();
  const [issue, setIssue] = useState({ results: [] });
  const currentUser = useAuth();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const getIssue = async () => {
      try {
        const [{ data: issue }, { data: comments }] = await Promise.all([
          axios.get(`/issue/${id}`),
          axios.get(`/comments/?issue=${id}`),
        ]);
        setIssue({ results: [issue] });
        setComments(comments);
        console.log(issue);
      } catch (err) {
        console.log(err);
      }
    };
    getIssue();
  }, [id]);
  return (
    <Container>
      <Row className={styles.Row}>
        <Col sm={8}>
          <br />
          <Issue {...issue.results[0]} setIssue={setIssue} issuePage />
        </Col>
        <Col sm={4}>
          <br />
          <IssueDescription
            {...issue.results[0]}
            setIssue={setIssue}
            issuePage
          />
          <br />
          <Container>
            {currentUser ? (
              <CommentCreateForm
                profile_id={currentUser.profile_id}
                profileImage={profile_image}
                issue={id}
                setIssue={setIssue}
                setComments={setComments}
              />
            ) : comments.results.length ? (
              "Comments"
            ) : null}
            {comments.results.length ? (
              <InfiniteScroll
                children={comments.results.map((comment) => (
                  <Comment
                    key={comment.id}
                    {...comment}
                    setIssue={setIssue}
                    setComments={setComments}
                  />
                ))}
                dataLength={comments.results.length}
                loader={Spinner}
                hasMore={!!comments.next}
                next={() => fetchMoreData(comments, setComments)}
              />
            ) : currentUser ? (
              <span>No comments yet. be the first</span>
            ) : (
              <span>No commen, yet</span>
            )}
          </Container>
          <br />
          <h1>Here goes Solutions if any</h1>
          <br />
          <h1>Here goes upvoted comments</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default IssuePage;
