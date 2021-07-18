import { useContext, useEffect, useState } from "react";
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

import { api } from "../../../../../services/api";
import { AuthContext } from "../../../../../contexts/AuthContext";

import Button from "../../../../../components/Button";
import history from "../../../../../utils/history";
import ContentDetailTrilha from "../../../../../components/ContentDetailTrilha";

import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";

const TrilhaTabs = () => {
  const [activeTab, setActiveTab] = useState("0");
  const { loggedUser } = useContext(AuthContext);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    const fetchTrails = async (id) => {
      if (loggedUser) {
        const { data: aprendizagem } = await api.get("/trilha/aprendizagem", {
          empresa_id: id,
        });
        // const { data: estagio } = await api.get("/departamento");
      }
    };

    fetchTrails(loggedUser?.empresa_id);
  }, [loggedUser]);

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
          <Row>
            <Col md="12">
              <div className={styles.bloco}>
                <h1>1. Crie Trilhas</h1>
                <p>
                  Cadastre trilhas para o seu departamento e crie módulos para o
                  programa de aprendizagem ou estágio!
                </p>
                <span>Obs: Cada departamento possui suas proprias trilhas</span>
              </div>
            </Col>
            <Col md="12">
              <div className={styles.bloco}>
                <h1>2. Vincule Trilhas aos Aprendizes/Estagiários</h1>
                <p>
                  Após o departamento possuir trilhas cadastradas, o mentor
                  poderá acessar o perfil do mentorado e incluir um trilha para
                  iniciar o processo de acompanhamento e desenvolvimento.
                </p>
                <span>
                  Obs: Só é possivel vincular trilhas aos mentorados cadastrados
                  no departamento do mentor
                </span>
              </div>
            </Col>
            <Col md="12">
              <div className={styles.bloco}>
                <h1>3. Acompanhe o progresso dos mentorados</h1>
                <p>
                  O mentor deverá acompanhar o progresso de seu mentorado e
                  vincular as trilhas de forma gradual, por exemplo, módulo
                  basico, intermediário e avancado!
                </p>
                <span>
                  Obs: Sempre que o mentorado concluir um módulo da trilha, o
                  mentor deverá incluir um proximo módulo ao mentorado
                </span>
              </div>
            </Col>
          </Row>
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
