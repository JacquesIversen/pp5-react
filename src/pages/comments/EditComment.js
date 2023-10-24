import React, { useState } from "react";
import styles from "../../styles/Comment.module.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Cookies from "js-cookie";

function CommentEditForm(props) {
  const { id, comment_area, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(comment_area);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/comments/${id}/`, {
        comment_area: formContent.trim(),
        headers: { Authorization: "Bearer " + Cookies.get("access") },
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button onClick={() => setShowEditForm(false)} type="button">
          cancel
        </button>
        <button disabled={!comment_area.trim()} type="submit">
          save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
