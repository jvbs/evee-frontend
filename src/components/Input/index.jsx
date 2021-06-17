import { TextField } from "@material-ui/core";

const Input = ({ label, testid }) => {
  return (
    <TextField style={{ marginBottom: "7%" }} testid={testid} label={label} />
  );
};

export default Input;
