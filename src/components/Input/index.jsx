import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { TextField } from "@material-ui/core";
import ReactInputMask from "react-input-mask";
const Input = ({ label, testid, name, ...rest }) => {
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
      <ReactInputMask maskChar="_" {...rest}>
        {() => (
          <TextField
            style={{ marginTop: "3%", marginBottom: "3%" }}
            testid={testid}
            label={label}
            name={name}
            inputRef={inputRef}
            defaultValue={unformDefaultValue}
            {...rest}
          />
        )}
      </ReactInputMask>

      {error && (
        <span style={{ color: "#f00", fontSize: "10pt" }}>{error}</span>
      )}
    </>
  );
};

export default Input;
