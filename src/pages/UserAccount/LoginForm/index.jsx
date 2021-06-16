import { Container, FormGroup, Row } from "reactstrap";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const LoginForm = () => {
  return (
    <Container fluid>
      <form>
        <Row>
          <p
            style={{
              fontSize: "12px",
              color: "var(--gray)",
              marginLeft: "1%",
            }}
          >
            <b>
              Se você já possui cadastro, utilize os mesmos dados para entrar
            </b>
          </p>
          <FormGroup>
            <Input label="E-mail*" testid="fieldEmail" />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
            <Input label="Senha*" testid="fieldSenha" />
          </FormGroup>
        </Row>
        <Row>
          <p style={{ fontSize: "12px", color: "var(--gray)" }}>
            Os campos identificados com asteriscos (*) são de preenchimento
            obrigatório.
          </p>
        </Row>
        <Row>
          <Button text="Entrar" />
        </Row>
      </form>
    </Container>
  );
};

export default LoginForm;