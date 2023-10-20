import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/CreateIssue.module.css";
import Asset from "../../components/Asset";
import UploadIssue from "../../Assets/TiredAsIAm.png";
import { Image } from "react-bootstrap";

function CreateIssue() {
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

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Car</Form.Label>
        <Form.Control
          type="text"
          name="car"
          value={car}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          name="model"
          value={model}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="text"
          name="year"
          value={year}
          placeholder="State the production year of your vehicle."
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Engine Size</Form.Label>
        <Form.Control
          type="text"
          name="engine_size"
          value={engine_size}
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
          value={description}
          placeholder="Be as precise when stating your problem, and be sure to include any solutions you might have tried already"
          onChange={handleChange}
        />
      </Form.Group>

      <Button onClick={() => {}}>cancel</Button>
      <Button type="submit">create</Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image src={image} />
                  </figure>
                  <div>
                    <Form.Label htmlFor="image-upload">Change Image</Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={UploadIssue}
                    message="Tap the tired man, to upload your own picture"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/"
                onChange={handleChangeImage}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default CreateIssue;
