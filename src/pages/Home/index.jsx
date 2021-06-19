import { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
// import LoginModal from "./LoginModal";
// import SolicitacaoDemoModal from "./SolicitacaoDemoModal";

import logo from "../../assets/images/logo.png";
import baseHomeSystem from "../../assets/images/base-home-system.svg";
import homeSystem from "../../assets/images/home-system.svg";

import { api } from "../../services/api";

import styles from "./styles.module.css";

const Home = () => {
  const [modal, setModal] = useState({
    isModalOpen: false,
    title: "",
    secondBtnLabel: "",
    footerMsgOne: "",
    footerMsgTwo: "",
    type: "",
  });

  // const toggle = (title, type, secondBtnLabel, footerMsgOne, footerMsgTwo) => {
  //   setModal({
  //     isModalOpen: !modal.isModalOpen,
  //     title,
  //     secondBtnLabel,
  //     footerMsgOne,
  //     footerMsgTwo,
  //     type: type === "Login" ? <LoginModal /> : <SolicitacaoDemoModal />,
  //   });
  // };

  const closeModal = () => {
    setModal({ ...modal, isModalOpen: false });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/cargo");
      console.log(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Modal modal={modal} closeModal={closeModal} />

      <Container className={styles.content}>
        <header className={styles.menu}>
          <Row>
            <Col md="4" xs="12" className={styles.logoGroup}>
              <img src={logo} className={styles.logo} alt="Logo" />
            </Col>
            <Col md="8" xs="12" className={styles.buttonGroup}>
              <Link
                to="/user/account/login"
                data-testid="btnEntrar"
                className={styles.buttonGroupLogin}
              >
                Entrar
              </Link>
              <Link
                to="/user/account/create"
                className={styles.buttonGroupCreate}
                data-testid="btnAgendarDemo"
              >
                Agendar uma Demo
              </Link>
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
