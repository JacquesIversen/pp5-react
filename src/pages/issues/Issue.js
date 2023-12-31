import React, { useState } from "react";
import { useAuth } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import styles from "../../styles/Issue.module.css";
import { DropdownComponent } from "../../components/Dropdown";
import axios from "axios";
import Cookies from "js-cookie";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal";

const Issue = (props) => {
  const {
    id,
    owner,
    created_at,
    title,
    description,
    image,
    comments_count,
    issuePage,
  } = props;

  const { currentUser } = useAuth();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = () => {
    history.push(`/issue/${id}/edit`);
  };

  const handleDelete = () => {
    setIsOpen(true);
  };

  const handleCancelDelete = () => {
    setIsOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`issue/${id}/`, {
        headers: { Authorization: "Bearer " + Cookies.get("access") },
      });
      /*  Not working 401. error */
      history.push(`/`);
    } catch (err) {}
  };

  return (
    <>
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
          <div className={styles.header}>
            <Card.Title className={styles.issueTitle}>{title}</Card.Title>
          </div>
          <div className={styles.issueMeta}>
            {is_owner && issuePage && (
              <DropdownComponent
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
            <span>Listed at {created_at}</span>
            <span>
              <Link className={styles.Link} to={`/issue/${id}`}>
                Total comments: {comments_count}
              </Link>
            </span>
          </div>
          {description && (
            <Card.Text className={styles.issueDescription}>
              {description}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
      <DeleteConfirmationModal
        isOpen={isOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
};

export default Issue;
