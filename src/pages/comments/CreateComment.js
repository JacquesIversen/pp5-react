import axios from "axios";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Cookies from "js-cookie";

function CommentCreateForm(props) {
  const { issue, setIssue, setComments, profileImage, profile_id } = props;
  const [comment_area, setComment_area] = useState("");

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
          <Link to={`/profiles/${profile_id}`}>
            {/*          <Avatar src={profileImage} /> */}
          </Link>
          <Form.Control
            placeholder="my comment..."
            as="textarea"
            value={comment_area}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button disabled={!comment_area.trim()} type="submit">
        Post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
