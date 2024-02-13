import React from "react";
import { Button, Form } from "react-bootstrap";

const SearchForm = ({
  name,
  value,
  inputClassName,
  formClassName,
  handleClick,
  handleChange,
  inputPlaceholder,
  buttonVariant,
  buttonPlaceholder,
}) => {
  return (
    <Form
      className={formClassName}
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <input
        type={name}
        placeholder={inputPlaceholder}
        className={inputClassName}
        value={value}
        onChange={handleChange}
      />
      <Button variant={buttonVariant} onClick={handleClick}>
        {buttonPlaceholder}
      </Button>
    </Form>
  );
};

export default SearchForm;
