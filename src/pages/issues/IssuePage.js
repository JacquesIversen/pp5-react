import React, { useEffect, useState } from "react";
import styles from "../../styles/IssueFeed.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

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
    <Container>
      <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  );
}

export default IssuePage;
