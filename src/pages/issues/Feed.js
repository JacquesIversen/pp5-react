import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import Issue from "./Issue";
import NoResultsYet from "../../Assets/NoPostBackground.png";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/Utils";
import styles from "../../styles/Feed.module.css";

function Feed(message) {
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
      } catch (err) {}
    };
    fetchIssue();
  }, [pathname, query]);

  return (
    <Container>
      <br />
      <Container className={styles.searchContainer}>
        <Form onSubmit={(event) => event.preventDefault()}>
          <Form.Control
            type="text"
            placeholder="Search"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
          />
        </Form>
      </Container>
      <br />
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
      <br />
    </Container>
  );
}

export default Feed;
