const FormRow = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  labelText,
  className,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name}>{labelText || name}</label>
      <input
        className={className || ""}
        id={name}
        type={type}
        onChange={handleChange}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormRow;
