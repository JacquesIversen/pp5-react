import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Issue from "./Issue";
import IssueDescription from "./IssueDescription";
import { useAuth } from "../../contexts/CurrentUserContext";
import CommentCreateForm from "../comments/CreateComment";
import Comment from "../comments/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/Utils";
import Asset from "../../components/Asset";

function IssuePage() {
  const { id } = useParams();
  const [issue, setIssue] = useState({ results: [] });
  const { currentUser } = useAuth();
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const getIssue = async () => {
      try {
        const [{ data: issue }, { data: cm }] = await Promise.all([
          axios.get(`/issue/${id}`),
          axios.get(`/comments/?issue=${id}`),
        ]);
        setIssue({ results: [issue] });
        console.log(cm.results);
        setComments({ results: cm.results });
      } catch (err) {}
    };
    getIssue();
  }, [id]);

  return (
    <Container>
      <Row>
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
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={null}
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
                  profile_id={comment.profile_id}
                  profile_image={comment.profile_image}
                  owner={comment.owner}
                  created_at={comment.created_at}
                  comment_area={comment.comment_area}
                  id={comment.id}
                  like_id={comment.like_id}
                  likes_count={comment.likes_count}
                  dislike_id={comment.dislike_id}
                  dislikes_count={comment.dislikes_count}
                  likes={comment.likes}
                  dislikes={comment.dislikes}
                  setIssue={setIssue}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span>No comments yet, be the first!</span>
          ) : (
            <span>No comments, yet</span>
          )}
          <br />
        </Col>
      </Row>
    </Container>
  );
}

export default IssuePage;
