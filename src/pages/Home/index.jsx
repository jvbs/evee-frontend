import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

import logo from "../../assets/images/logo.png";
import baseHomeSystem from "../../assets/images/base-home-system.svg";
import homeSystem from "../../assets/images/home-system.svg";

import history from "../../utils/history";

import styles from "./styles.module.css";

const Home = () => {
  return (
    <>
      <Container className={styles.content}>
        <header className={styles.menu}>
          <Row>
            <Col md="4" xs="12" className={styles.logoGroup}>
              <img src={logo} className={styles.logo} alt="Logo" />
            </Col>
            <Col md="8" xs="12" className={styles.buttonGroup}>
              <Button
                data-testid="btnEntrar"
                onClick={() => history.push("/user/account/login")}
                type="link"
                text="Entrar"
              />
              <Button
                onClick={() => history.push("/user/account/create")}
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
                <Link to="/admin">
                  <Button type="gray" text="Conheça nosso produto" />
                </Link>
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
