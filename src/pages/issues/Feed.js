import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from "../../styles/Feed.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import Issue from "./PublicIssue";
import NoResultsYet from "../../Assets/NoPostBackground.png";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/Utils";
import SolvedIssues from "./SolvedIssues";
import { useAuth } from "../../contexts/CurrentUserContext";
import PopularComments from "../comments/PopularComments";

function Feed(message) {
  const { currentUser } = useAuth();
  const [issue, setIssue] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const { data } = await axios.get(`/issue/?search=${query}`);
        setIssue(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchIssue();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, query]);

  return (
    <Container>
      <br />
      <Row>
        <Col sm={12} md={8}>
          {hasLoaded ? (
            <>
              {issue.results.length ? (
                <InfiniteScroll
                  children={issue.results.map((issue) => (
                    <Issue key={issue.id} {...issue} setIssue={setIssue} />
                  ))}
                  dataLength={issue.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!issue.next}
                  next={() => fetchMoreData(issue, setIssue)}
                />
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
        <Col sm={12} md={4}>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={(event) => setQuery(event.target.value)}
            />
          </Form>
          <br />
          <PopularComments />
          <br />
          <SolvedIssues />
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;
