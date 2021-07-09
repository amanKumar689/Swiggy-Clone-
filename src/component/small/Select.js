import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
const Select = () => {
  const [item, setItem] = useState("SORT BY");

  // when i got from url then setItem
  return (
    <div className="selectSort">
      <DropdownButton
        id="dropdown-button-dark-example2"
        menuvariant="dark"
        title={item}
        className="mt-3"
      >
        <Dropdown.Item>REVELANCE</Dropdown.Item>
        <Dropdown.Item>COST FOR TWO</Dropdown.Item>
        <Dropdown.Item>DELIVERY TIME</Dropdown.Item>
        <Dropdown.Item>RATING</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Select;
