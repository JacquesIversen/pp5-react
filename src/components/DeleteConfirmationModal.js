import React from "react";
function DeleteConfirmationModal({ isOpen, onCancel, onConfirm }) {
  const modalStyles = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };
  const modalCardStyles = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };
  const buttonStyles = { marginRight: "10px" };

  return (
    <div style={modalStyles}>
      {" "}
      <div style={modalCardStyles}>
        {" "}
        <h3 style={{ fontWeight: "bold" }}>Confirm Delete</h3>{" "}
        <p>Are you sure you want to delete this item?</p>{" "}
        <div>
          {" "}
          <button
            style={{
              ...buttonStyles,
              backgroundColor: "#ff3860",
              color: "#fff",
            }}
            onClick={onConfirm}
          >
            {" "}
            Yes{" "}
          </button>{" "}
          <button style={buttonStyles} onClick={onCancel}>
            {" "}
            No{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default DeleteConfirmationModal;
