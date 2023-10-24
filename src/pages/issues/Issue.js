import React from "react";
import { useAuth } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import styles from "../../styles/Issue.module.css";
import { DropdownComponent } from "../../components/Dropdown";
import axios from "axios";

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
  const is_owner = true; /* currentUser?.username === owner; */
  console.log(currentUser, is_owner);

  const history = useHistory();

  const handleEdit = () => {
    history.push(`/issue/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`issue/${id}/`);
      /*  Not working 401. error */
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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
        <DropdownComponent
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <div className={styles.issueMeta}>
          {/*           {is_owner && issuePage && <DropdownComponent />} not working cause of currentUser===False */}
          <span>Listed at {created_at}</span>
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
