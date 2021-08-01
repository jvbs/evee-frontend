import { useState, useContext } from "react";
import classnames from "classnames";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../../contexts/AuthContext";

import Button from "../../../../../components/Button";
import history from "../../../../../utils/history";
import ContentDetailPDI from "../../../../../components/ContentDetailPDI";

import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";

const TabsPDI = ({ pdiHistory, activePdi }) => {
  const [activeTab, setActiveTab] = useState("1");
  const { id } = useParams();
  const { loggedUser } = useContext(AuthContext);

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
                Plano de Desenvolvimento Individual - PDI
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Histórico
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        {loggedUser?.userType === "Mentor" && (
          <Col lg="4">
            <div className={styles.btnCreatePDI}>
              <Button
                text="Adicionar PDI"
                style={{ width: "90%" }}
                onClick={() =>
                  history.push(`/admin/mentoreds/${id}/pdi/create`)
                }
              />
            </div>
          </Col>
        )}
      </Row>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {activePdi !== "" ? (
            <ContentDetailPDI pdi={activePdi} />
          ) : (
            <>
              <div className={styles.boxOneInfomation}>
                <h1>
                  Ops! O{" "}
                  <strong style={{ color: "var(--yellow-gold)" }}>
                    Mentorado
                  </strong>{" "}
                  não possui nenhum PDI ativo{" "}
                </h1>
                <h2>O que eu faço? </h2>
                <p>
                  - Verifique o histórico do mentorado e visualize os PDI(s){" "}
                  <span style={{ color: "green", fontWeight: "bolder" }}>
                    {" "}
                    Concluídos{" "}
                  </span>
                  e{" "}
                  <span style={{ color: "red", fontWeight: "bolder" }}>
                    {" "}
                    Não Concluídos
                  </span>
                </p>
                <p>
                  - Caso não encontre nenhum PDI é possível que o Mentor ainda
                  não tenha vinculado nenhum PDI ao Mentorado!
                </p>
              </div>
              <div className={styles.boxTwoInfomation}>
                <h3>Ainda com dúvidas?</h3>
                <h4>
                  Solicite suporte ao time de RH ou procure o responsável do
                  Departamento
                </h4>
              </div>
            </>
          )}
        </TabPane>
      </TabContent>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="2">
          <>
            <div className={styles.boxOneInfomation}>
              <h1>
                Ops! O{" "}
                <strong style={{ color: "var(--yellow-gold)" }}>
                  Mentorado
                </strong>{" "}
                não possui nenhum PDI arquivado{" "}
              </h1>
              <h2>O que eu faço? </h2>
              <p>- Verifique se o Mentorado possui algum PDI em andamento</p>
              <p>
                - Caso não encontre nenhum PDI, é possível que o Mentor ainda
                não tenha vinculado ao Mentorado
              </p>
            </div>
            <div className={styles.boxTwoInfomation}>
              <h3>Ainda com dúvidas?</h3>
              <h4>
                Solicite suporte ao time de RH ou procure o responsável do
                Departamento
              </h4>
            </div>
          </>
          {/* {pdiHistory !== "" ? (
            <ContentDetailPDI pdi={pdiHistory} />
          ) : (
            <h2>test</h2>
          )} */}
        </TabPane>
      </TabContent>
    </>
  );
};

export default TabsPDI;
