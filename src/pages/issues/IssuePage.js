import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Issue from "./Issue";
import IssueDescription from "./IssueDescription";
import styles from "../../styles/Issue.module.css";
import { useAuth } from "../../contexts/CurrentUserContext";
import CommentCreateForm from "../comments/CreateComment";

function IssuePage() {
  const { id } = useParams();
  const [issue, setIssue] = useState({ results: [] });
  const currentUser = useAuth();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const getIssue = async () => {
      try {
        const [{ data: issue }] = await Promise.all([
          axios.get(`/issue/${id}`),
        ]);
        setIssue({ results: [issue] });
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
                post={id}
                setIssue={setIssue}
                setComments={setComments}
              />
            ) : comments.results.length ? (
              "Comments"
            ) : null}
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
