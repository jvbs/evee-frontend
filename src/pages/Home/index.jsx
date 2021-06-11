import { useState } from "react";
import { Row, Col, Container } from "reactstrap";

import Button from "../../components/Button";
import SolicitacaoDemoModal from "./SolicitacaoDemoModal";
import LoginModal from "./LoginModal";

import logo from "../../assets/images/logo.png";
import baseHomeSystem from "../../assets/images/base-home-system.svg";
import homeSystem from "../../assets/images/home-system.svg";

import styles from "./styles.module.css";

const Home = () => {
  const [demoModal, setDemoModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const toggleDemoModal = () => {
    setDemoModal(!demoModal);
  };

  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };
  return (
    <>
      <SolicitacaoDemoModal
        modal={demoModal}
        toggle={toggleDemoModal}
        title="Solicitar demonstração"
        // firstBtnLabel="Cancelar"
        secondBtnLabel="Enviar"
        footerMsgOne="Já possui cadastro?"
        footerMsgTwo="Acesse sua conta"
      />

      <LoginModal
        modal={loginModal}
        toggle={toggleLoginModal}
        title="Acesse sua conta"
        // firstBtnLabel="Cancelar"
        secondBtnLabel="Entrar"
        footerMsgOne="Você não possui cadastro?"
        footerMsgTwo="Crie sua conta"
      />

      <Container className={styles.content}>
        <header className={styles.menu}>
          <Row>
            <Col md="4" xs="12" className={styles.logoGroup}>
              <img src={logo} className={styles.logo} alt="Logo" />
            </Col>
            <Col md="8" xs="12" className={styles.buttonGroup}>
              <Button
                data-testid="btnEntrar"
                type="link"
                text="Entrar"
                onClick={toggleLoginModal}
              />
              <Button
                onClick={toggleDemoModal}
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
              <img
                src={homeSystem}
                className={styles.homeSystem}
                alt="Home System"
              />
              <img
                src={baseHomeSystem}
                alt="Base System"
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
