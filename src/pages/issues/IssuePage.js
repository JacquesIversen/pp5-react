import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Issue from "./Issue";
import IssueDescription from "./IssueDescription";
import styles from "../../styles/Issue.module.css";

function IssuePage() {
  const { id } = useParams();
  const [issue, setIssue] = useState({ results: [] });

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
    <Container className={styles.Container}>
      <Row className={styles.Row}>
        <Col sm={8}>
          <Issue {...issue.results[0]} setIssue={setIssue} issuePage />
        </Col>
        <Col sm={4}>
          <IssueDescription
            {...issue.results[0]}
            setIssue={setIssue}
            issuePage
          />
        </Col>
      </Row>
      <Row className={styles.Row}>
        <Col sm className={styles.Col}>
          This is another tingting
        </Col>
        <Col sm className={styles.Col}>
          sm=true
        </Col>
        <Col sm className={styles.Col}>
          sm=true
        </Col>
      </Row>
    </Container>
  );
}

export default IssuePage;
