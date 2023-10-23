import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Feed.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import Issue from "./Issue";
import NoResultsYet from "../../Assets/NoPostBackground.png";
import Asset from "../../components/Asset";

function Feed(message) {
  const [issue, setIssue] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const { data } = await axios.get(`/issue/`);
        setIssue(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchIssue();
  }, [pathname]);

  return (
    <Container>
      <Row>
        <Col sm={8}>
          {" "}
          {hasLoaded ? (
            <>
              {issue.results.length ? (
                issue.results.map((issue) => (
                  <Issue key={issue.id} {...issue} setIssue={setIssue} />
                ))
              ) : (
                <Container>
                  <Asset src={NoResultsYet} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container>
              <Asset spinner />
            </Container>
          )}
        </Col>
        <Col sm={4}>POST 1.</Col>
      </Row>
    </Container>
  );
}

export default Feed;
