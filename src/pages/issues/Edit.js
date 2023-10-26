import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styles from "../../styles/CreateIssue.module.css";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function EditForm() {
  const [errors, setErrors] = useState({});

  const [issueData, setIssueData] = useState({
    title: "",
    car: "",
    model: "",
    year: "",
    engine_size: "",
    description: "",
    image: "",
  });
  const { title, car, model, year, engine_size, description, image } =
    issueData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    const getIssueData = async () => {
      try {
        const { data } = await axios.get(`/issue/${id}/`, {
          headers: { Authorization: "Bearer " + Cookies.get("access") },
        });
        console.log(data);
        setIssueData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getIssueData();
  }, [history, id]);

  const handleChange = (event) => {
    setIssueData({
      ...issueData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setIssueData({
        ...issueData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("car", car);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("engine_size", engine_size);
    formData.append("description", description);
    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axios.put(`/issue/${id}/`, formData, {
        headers: { Authorization: "Bearer " + Cookies.get("access") },
      });
      history.push(`/issue/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={issueData.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Car</Form.Label>
        <Form.Control
          type="text"
          name="car"
          value={issueData.car}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          name="model"
          value={issueData.model}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="text"
          name="year"
          value={issueData.year}
          placeholder="State the production year of your vehicle."
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Engine Size</Form.Label>
        <Form.Control
          type="text"
          name="engine_size"
          value={issueData.engine_size}
          placeholder="ex. 2.0"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={12}
          name="description"
          value={issueData.description}
          placeholder="Be as precise when stating your problem, and be sure to include any solutions you might have tried already"
          onChange={handleChange}
        />
      </Form.Group>

      <Button onClick={() => history.goBack()}>Cancel</Button>
      <Button type="submit">Save Changes</Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container
        className={`${styles.Container} d-flex flex-column justify-content-center`}
      >
        <Form.Group className="text-center">
          <figure>
            <Image src={image} />
          </figure>
          <div>
            <Form.Label htmlFor="image-upload">Change Image</Form.Label>
          </div>

          <Form.File
            id="image-upload"
            accept="image/*"
            onChange={handleChangeImage}
            ref={imageInput}
          />
        </Form.Group>
        <div className="d-md-none">{textFields}</div>
      </Container>
      <Container>{textFields}</Container>
    </Form>
  );
}

export default EditForm;
