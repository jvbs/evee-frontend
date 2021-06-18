import { Col, Container, FormGroup, Row } from "reactstrap";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const LoginForm = () => {
  return (
    <Container fluid className={styles.container}>
      <Col lg="8" xs="12" className={styles.formsColumn}>
        <h1>Acesse sua conta</h1>
      <form>
        <Row>
          <p
            style={{ 
              fontSize: "14px",
              color: "var(--gray)",
              marginTop: "1%",
              marginBottom: "8%",
            }}
          >
              Se você já possui cadastro, utilize seu e-mail e senha para entrar
           
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
        <Link to="/admin">
          <Button text="Entrar" style={{width: "100%"}} />
        </Link>
        </Row>
      </form>
        <Row>
        <p style={{ fontSize: "14px", color: "var(--gray)", marginTop: "3vh"}}>
            Você não possui cadastro?
            <Link to="/user/account/create"><span style={{color: "var(--yellow-gold)"}}> Crie sua conta</span></Link>
          </p>
        </Row>
      </Col>
    </Container>
  );
};

export default LoginForm;
