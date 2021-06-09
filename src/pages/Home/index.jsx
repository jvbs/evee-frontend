import { useState } from "react";
import { Row, Col, Container, Button as BootstrapButton } from "reactstrap";

import styles from "./styles.module.css";
import Button from "../../components/Button";

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <header className={styles.menu}>
        <Row>
          <Col md="4" className={styles.containerConteudo}>
            aaa
          </Col>
          <Col md="8">
            <Button type="link" text="Entrar" />
            <Button text="Agendar uma Demo" />
          </Col>
        </Row>
      </header>
      <main>
        <Container>
          <Row>
            <Col md="4" className={styles.colunaTexto}>
              <section className={styles.homeText}>
                <h1>Flexível, </h1>
                <h1>{"amigável &"}</h1>
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
              <Button type="gray" text="Conheça nosso produto" />
            </Col>
            <Col md="8" className={styles.containerConteudo}>
              aff
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Home;
