import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { TextField } from "@material-ui/core";

const TextArea = ({ label, testid, name, rows, ...rest }) => {
  const inputRef = useRef(null);
  // eslint-disable-next-line
  const {
    fieldName,
    defaultValue: unformDefaultValue,
    registerField,
    error,
  } = useField(name);

  // registrando alterações no input
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <TextField
        style={{ marginTop: "3%", marginBottom: "3%" }}
        data-testid={testid}
        label={label}
        name={name}
        inputRef={inputRef}
        defaultValue={unformDefaultValue}
        multiline
        rows={rows}
        {...rest}
      />

      {error && (
        <span style={{ color: "#f00", fontSize: "10pt" }}>{error}</span>
      )}
    </>
  );
};

export default TextArea;
