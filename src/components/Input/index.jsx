import { TextField } from "@material-ui/core";

const Input = ({ label, testid }) => {
  return (
    <TextField style={{ marginTop: "3%", marginBottom: "3%" }} testid={testid} label={label} />
  );
};

export default Input;
