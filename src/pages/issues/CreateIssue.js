import React, { useState, useRef } from "react";
import styles from "../../styles/CreateIssue.module.css";
import Asset from "../../components/Asset";
import UploadIssue from "../../Assets/TiredAsIAm.png";
import { Alert, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Cookies from "js-cookie";

function CreateIssue() {
  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("car", car);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("engine_size", engine_size);
    formData.append("description", description);
    formData.append("image", imageInput.current.files[0]);

    setIsSubmitDisabled(true);

    try {
      const { data } = await axios.post("/issue/", formData, {
        headers: { Authorization: "Bearer " + Cookies.get("access") },
      });
      history.push(`/issue/${data.id}`);
    } catch (err) {
      setIsSubmitDisabled(false);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
    setIsLoading(false);
  };

  const textFields = (
    <div>
      <div className={styles.formLabel}>Title</div>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        className={styles.formInput}
        required
      />
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <div className={styles.formLabel}>Manufacturer</div>
      <input
        type="text"
        name="car"
        placeholder="ex. Vauxhall"
        value={car}
        onChange={handleChange}
        className={styles.formInput}
        required
      />
      {errors?.car?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <div className={styles.formLabel}>Model</div>
      <input
        type="text"
        name="model"
        value={model}
        placeholder="ex. Astra"
        onChange={handleChange}
        className={styles.formInput}
        required
      />
      {errors?.model?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <div className={styles.formLabel}>Year</div>
      <input
        type="text"
        name="year"
        value={year}
        placeholder="Production Year"
        onChange={handleChange}
        required
        className={styles.formInput}
      />
      {errors?.year?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <div className={styles.formLabel}>Engine Size</div>
      <input
        type="text"
        name="engine_size"
        value={engine_size}
        placeholder="ex. 2.0"
        onChange={handleChange}
        className={styles.formInput}
      />
      {errors?.engine_size?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <div className={styles.formLabel}>Description</div>
      <textarea
        rows={12}
        name="description"
        value={description}
        placeholder="Be as precise when stating your problem, and be sure to include any solutions you might have tried already"
        onChange={handleChange}
        required
        className={styles.formTextarea}
      />
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <button onClick={() => history.goBack()} className={styles.cancelButton}>
        Cancel
      </button>
      <button
        disabled={isSubmitDisabled}
        type="submit"
        className={styles.formButton}
      >
        Share
      </button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      {isLoading && (
        <div className={styles.loadingSpinnerOverlay}>
          <div className={styles.loadingSpinner}>
            <Asset spinner />
          </div>
        </div>
      )}
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container className={`${styles.container}`}>
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={styles.image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${styles.formButton} btn`}
                      htmlFor="image-upload"
                    >
                      Change Image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset src={UploadIssue} message="Upload picture" />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
        </Col>
        <Col>
          <Container>
            <div>{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default CreateIssue;
