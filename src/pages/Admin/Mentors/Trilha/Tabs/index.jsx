import { useContext, useEffect, useRef, useState } from "react";
import { MenuItem } from "@material-ui/core";
import classnames from "classnames";
import {
  Col,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import "react-toastify/dist/ReactToastify.min.css";
import styles from "./styles.module.css";
import Button from "../../../../../components/Button";
import history from "../../../../../utils/history";
import ContentDetailTrilha from "../../../../../components/ContentDetailTrilha";

const TrilhaTabs = () => {
 

  const [activeTab, setActiveTab] = useState("0");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };


  return (
    <>
    <Row>
        <Col lg="8">
      <Nav tabs className={styles.tabs}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Programa de Aprendizagem
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
             Programa de Estágio
          </NavLink>
        </NavItem>
        
      </Nav>
    </Col>
    <Col lg="4">
      <div className={styles.btnCreateTrilha}>
              <Button
                text="Cadastrar Trilha"
                style={{ width: "90%" }}
                onClick={() => history.push("/admin/mentors/trilha/create")}
              />
        </div>
    </Col>
    </Row>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="0">
        <section className={styles.message}>
        <h2 className={styles.name}>
          Olá, <span>TESTE</span>
        </h2>
        <h3 className={styles.welcome}>
          Bem-vindo(a) ao <span>EVEE!</span>
        </h3>
            <div className={styles.paragraphs}>
              <p>
                Para mantermos tudo <strong>organizado</strong> e{" "}
                <strong>caprichado</strong>, do jeitinho que a gente gosta, essa
                é a plataforma que iremos usar para todos os acompanhamento e
                desenvolvimento de aprendiz(es) e estagiário(s)!
              </p>
              <p>
                Você pode gerenciar colaboradores e acompanhar mentores e
                mentorados.
              </p>
            </div>
            </section>
          </TabPane>
      </TabContent>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <ContentDetailTrilha />
          </TabPane>
      </TabContent>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="2">
        <ContentDetailTrilha />
          </TabPane>
      </TabContent>


    </>
  );
};

export default TrilhaTabs;
