import { Row, Col, Container, FormGroup, Label } from "reactstrap";

import Button from "../../components/Button";
import Input from "../../components/Input";
import SolicitacaoDemoModal from "./SolicitacaoDemoModal";

import logo from "../../assets/images/logo.png";
import baseHomeSystem from "../../assets/images/base-home-system.svg";
import homeSystem from "../../assets/images/home-system.svg";

import styles from "./styles.module.css";
import { useState } from "react";

const Home = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <SolicitacaoDemoModal
        modal={modal}
        toggle={toggle}
        title="Solicitar demonstração"
        // firstBtnLabel="Cancelar"
        secondBtnLabel="Enviar"
      >
        <Container fluid>
          <p>
            Um RH cada vez mais ágil, estratégico, orientado à dados e centrando
            nas pessoas.
          </p>
          <form action="">
            <FormGroup>
              <Input label="Empresa*" testid="fieldEmpresa" />
            </FormGroup>{" "}
            <FormGroup>
              <Input label="CNPJ*" testid="fieldCNPJ"/>
            </FormGroup>{" "}
            <FormGroup>
              <Input label="Nome*" testid="fieldNomeSolicitante"/>
            </FormGroup>
            <FormGroup>
              <Input label="Cargo*" testid="fieldCargoSolicitante"/>
            </FormGroup>
            <FormGroup>
              <Input label="E-mail*" testid="fieldEmailSolicitante"/>
            </FormGroup>
            <FormGroup>
              <Input label="Telefone*" testid="fieldTelefoneSolicitante"/>
            </FormGroup>
            <FormGroup>
              <Input label="Senha*" testid="fieldSenhaSolicitante"/>
            </FormGroup>
          </form>
          <p>
            Os campos identificados com asteriscos (*) são de preenchimento
            obrigatório.
          </p>
        </Container>
      </SolicitacaoDemoModal>

      <Container className={styles.content}>
        <header className={styles.menu}>
          <Row>
            <Col md="4" xs="12" className={styles.logoGroup}>
              <img src={logo} className={styles.logo} alt="Logo" />
            </Col>
            <Col md="8" xs="12" className={styles.buttonGroup}>
              <Button data-testid="btnEntrar" type="link" text="Entrar" />
              <Button
                onClick={toggle}
                data-testid="btnAgendarDemo"
                text="Agendar uma Demo"
              />
            </Col>
          </Row>
        </header>
        <main>
          <Row>
            <Col md="4">
              <section className={styles.homeText}>
                <h1>Flexível, </h1>
                <h1>
                  amigável&nbsp;<span>{"&"}</span>
                </h1>
                <h1>fácil de usar</h1>
              </section>
              <section className={styles.text}>
                <h2>
                  Promova o crescimento dos seus colaboradores e impacte os
                  resultados da sua organização.
                </h2>
              </section>
              <section className={styles.textAlter}>
                <h2>
                  Plano de desenvolvimento PDI, Feedback, Avaliação 360 e mais,
                  na plataforma mais fácil e intuitiva!
                </h2>
              </section>
              <section className={styles.btnConhecaNossoProdutoGroup}>
                <Button type="gray" text="Conheça nosso produto" />
              </section>
            </Col>
            <Col md="8" className={styles.imgWrapper}>
              <img src={homeSystem} className={styles.homeSystem} />
              <img
                src={baseHomeSystem}
                alt="System"
                className={styles.baseHomeSystem}
              />
            </Col>
          </Row>
        </main>
      </Container>
    </>
  );
};

export default Home;
