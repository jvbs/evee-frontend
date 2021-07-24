import { useContext, useEffect, useState } from "react";
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

import Button from "../../../../../components/Button";
import history from "../../../../../utils/history";
import ContentDetailTrilha from "../../../../../components/ContentDetailTrilha";

import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";

const TabsPDI = ({ aprendizagem, estagio }) => {
  const [activeTab, setActiveTab] = useState("1");

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
                PDI
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                PDI Finalizados
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col lg="4">
          <div className={styles.btnCreatePDI}>
            <Button
              text="Adicionar PDI"
              style={{ width: "90%" }}
              onClick={() => history.push("/admin/mentoreds/pdi/create")}
            />
          </div>
        </Col>
      </Row>
     
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
       <h1>teste</h1>
        </TabPane>
      </TabContent>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="2">
        <h1>teste2</h1>
        </TabPane>
      </TabContent>
    </>
  );
};

export default TabsPDI;
