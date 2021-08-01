import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import {
  FormControl,
  InputLabel,
  Select as MaterialSelect,
} from "@material-ui/core";

const Select = ({ label, testid, name, children, ...rest }) => {
  const inputRef = useRef(null);
  // eslint-disable-next-line
  const { fieldName, defaultValue, registerField, error } = useField(name);

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
      <FormControl style={{ marginTop: "3%", marginBottom: "3%" }}>
        <InputLabel id={testid}>{label}</InputLabel>
        <MaterialSelect
          inputRef={inputRef}
          name={name}
          labelId={testid}
          testid={testid}
          {...rest}
        >
          {children}
        </MaterialSelect>
      </FormControl>

      {error && (
        <span style={{ color: "#f00", fontSize: "10pt" }}>{error}</span>
      )}
    </>
  );
};

export default Select;
