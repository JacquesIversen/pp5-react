import axios from "axios";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Cookies from "js-cookie";
import { useAuth } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom/cjs/react-router-dom";

function CommentCreateForm(props) {
  const { issue, setIssue, setComments, profileImage, profile_id } = props;
  const [comment_area, setComment_area] = useState("");
  const { currentUser } = useAuth();

  const handleChange = (event) => {
    setComment_area(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "/comments/",
        { comment_area, issue },
        { headers: { Authorization: "Bearer " + Cookies.get("access") } }
      );
      console.log(data);
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setIssue((prevIssue) => ({
        results: [
          {
            ...prevIssue.results[0],
            comments_count: prevIssue.results[0].comments_count + 1,
          },
        ],
      }));
      setComment_area("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          {currentUser ? (
            <Form.Control
              placeholder="Think you might have a solution? Share it here:"
              as="textarea"
              value={comment_area}
              onChange={handleChange}
              rows={3}
            />
          ) : (
            <Form.Control
              placeholder="You need to be logged in to make a comment"
              as="textarea"
              value={comment_area}
              onChange={handleChange}
              rows={3}
            />
          )}
        </InputGroup>
        {currentUser ? (
          <button disabled={!comment_area.trim()} type="submit">
            Share
          </button>
        ) : (
          <Link exact to="/signin">
            <Button>Login in now</Button>
          </Link>
        )}
      </Form.Group>
    </Form>
  );
}

export default CommentCreateForm;
