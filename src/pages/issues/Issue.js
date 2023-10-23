import React from "react";
import { useAuth } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styles from "../../styles/Issue.module.css";

const Issue = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    created_at,
    title,
    car,
    model,
    year,
    engine_size,
    description,
    is_solved,
    image,
    comments_count,
    issuePage,
  } = props;

  const currentUser = useAuth();
  const is_owner = currentUser?.username === owner;
  console.log(is_owner);

  return (
    <Card className={styles.issueCard}>
      <Link to={`/issue/${id}`}>
        <Card.Img
          className={styles.issueImage}
          variant="top"
          src={image}
          alt={title}
        />
      </Link>
      <Card.Body className={styles.issueContent}>
        <Card.Title className={styles.issueTitle}>{title}</Card.Title>
        <div className={styles.issueMeta}>
          <span>Listed at {created_at}</span>
          {is_owner && issuePage && <span>Your Content Here</span>}
        </div>
        {description && (
          <Card.Text className={styles.issueDescription}>
            {description}
          </Card.Text>
        )}
        <div className={styles.commentsCount}>
          Total comments: {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Issue;
