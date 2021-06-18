import {
  FormControl,
  InputLabel,
  Select as MaterialSelect,
} from "@material-ui/core";

const Select = ({ label, testid, children }) => {
  return (
    <>
      <FormControl style={{ marginBottom: "5%" }}>
        <InputLabel id={testid}>{label}</InputLabel>
        <MaterialSelect labelId={testid} testid={testid}>
          {children}
        </MaterialSelect>
      </FormControl>
    </>
  );
};

export default Select;
