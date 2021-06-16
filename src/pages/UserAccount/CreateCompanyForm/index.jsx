import { Container, FormGroup, Row } from "reactstrap";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const CreateCompanyForm = () => {
  return (
    <Container fluid>
      <p style={{ fontSize: "12px", color: "var(--gray)", marginLeft: "1%" }}>
        <b>
          Um RH cada vez mais ágil, estratégico, orientado à dados e centrando
          nas pessoas.
        </b>
      </p>
      <form action="">
        <FormGroup>
          <Input label="Empresa*" testid="fieldEmpresa" />
        </FormGroup>{" "}
        <FormGroup>
          <Input label="CNPJ*" testid="fieldCNPJ" />
        </FormGroup>{" "}
        <FormGroup>
          <Input label="Nome*" testid="fieldNomeSolicitante" />
        </FormGroup>
        <FormGroup>
          <Input label="Cargo*" testid="fieldCargoSolicitante" />
        </FormGroup>
        <FormGroup>
          <Input label="E-mail*" testid="fieldEmailSolicitante" />
        </FormGroup>
        <FormGroup>
          <Input label="Telefone*" testid="fieldTelefoneSolicitante" />
        </FormGroup>
        <FormGroup>
          <Input label="Senha*" testid="fieldSenhaSolicitante" />
        </FormGroup>
        <p style={{ fontSize: "12px", color: "var(--gray)" }}>
          Os campos identificados com asteriscos (*) são de preenchimento
          obrigatório.
        </p>
        <Row>
          <Button text="Agendar uma Demo" />
        </Row>
      </form>
    </Container>
  );
};

export default CreateCompanyForm;
