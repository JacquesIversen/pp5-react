import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

const TribleDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fa-solid fa-ellipsis"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const DropdownComponent = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={TribleDots}></Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleEdit} aria-label="edit">
          <i className="fa-sharp fa-regular fa-pen-to-square" />
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDelete} aria-label="delete">
          <i className="fa-sharp fa-solid fa-trash" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
