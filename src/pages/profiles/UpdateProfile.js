import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function UpdateProfile({ handleUpdateProfile, setUpdateProfileM }) {
  const [name, setName] = useState("");
  const [image, setFile] = useState(null);
  const [biography, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile({
      name,
      image,
      biography,
    });
    setUpdateProfileM(false);
  };

  return (
    <>
      <Modal show={true} onHide={() => setUpdateProfileM(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>

            <Form.Group controlId="formFile">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Biography</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={biography}
                onChange={handleDescriptionChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateProfile;
