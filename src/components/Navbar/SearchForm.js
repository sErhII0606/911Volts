import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
  buttonDisabled,
}) => {
  return (
    <Form
      className={formClassName}
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <InputGroup>
        <Form.Control
          type={name}
          placeholder={inputPlaceholder}
          className={inputClassName}
          value={value}
          onChange={handleChange}
        />
        <Button
          variant={buttonVariant}
          onClick={handleClick}
          disabled={buttonDisabled}
        >
          {buttonPlaceholder}
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchForm;
