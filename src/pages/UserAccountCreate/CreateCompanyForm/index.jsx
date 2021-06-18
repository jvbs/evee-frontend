import { Col, Container, FormGroup, Row } from "reactstrap";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const CreateCompanyForm = () => {
  return (
    <Container fluid className={styles.container}>
      <Col lg="8" xs="12" className={styles.formsColumn}>
      <h1>Solicitar demonstração</h1>
      <p style={{ fontSize: "14px", color: "var(--gray)",  marginTop: "1%",
              marginBottom: "4%",}}>
          Tenha um RH cada vez mais ágil, estratégico, orientado à dados e centrando
          nas pessoas.
      </p>
      <form action="">
        <div className={styles.header}>
          <div className={styles.circuloModal}></div>
          <p style={{ fontSize: "16px", color: "var(--gray)", marginTop: "3vh", }}>Dados da Empresa</p>
        </div>
        <Row>      
        <Col lg="6">
        <FormGroup>
          <Input label="Empresa*" testid="fieldEmpresa" />
        </FormGroup>{" "}
        </Col> 
        <Col lg="6">
        <FormGroup>
          <Input label="CNPJ*" testid="fieldCNPJ" />
        </FormGroup>{" "}
        </Col>
        </Row>
        <div className={styles.header}>
          <div className={styles.circuloModal}></div>
          <p style={{ fontSize: "16px", color: "var(--gray)", marginTop: "3vh",}}>Dados do Solicitante</p>
        </div>
        <Row>
          <Col lg="6">
          <FormGroup>
            <Input label="Nome*" testid="fieldNomeSolicitante" />
          </FormGroup>  
          </Col>
          <Col lg="6">
          <FormGroup>
            <Input label="E-mail*" testid="fieldEmailSolicitante" />
          </FormGroup>
          </Col>
          <Col lg="6">
          <FormGroup>
            <Input label="Telefone*" testid="fieldTelefoneSolicitante" />
          </FormGroup>
          </Col>
          <Col lg="6">
          <FormGroup>
            <Input label="Senha*" testid="fieldSenhaSolicitante" />
          </FormGroup>
          </Col>
        </Row>
        <p style={{ fontSize: "12px", color: "var(--gray)" }}>
          Os campos identificados com asteriscos (*) são de preenchimento
          obrigatório.
        </p>
        <Row>
          <Button text="Finalizar" />
        </Row>
      </form>
      <Row>
        <p style={{ fontSize: "14px", color: "var(--gray)", marginTop: "2vh"}}>
            Ja possui cadastro?
            <Link to="/user/account/login"><span style={{color: "var(--yellow-gold)", textDecoration: "none"}}> Acesse sua conta</span></Link>
          </p>
        </Row>
      </Col>
    </Container>
  );
};

export default CreateCompanyForm;
