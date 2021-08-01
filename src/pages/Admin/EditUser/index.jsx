import { useState } from "react";
import classnames from "classnames";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

import Layout from "../../../components/Layout";
import BodyContent from "../../../components/BodyContent";

// import styles from "./styles.module.css";
import EditForm from "./EditForm";
import ChangePassword from "./ChangePasswordForm";

const EditUser = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Layout>
      <BodyContent
        header="Dados do Usuário"
        breadcrumb="Home > Dados do Usuário"
      >
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Dados Cadastrais
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Alterar senha
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <EditForm />
          </TabPane>
          <TabPane tabId="2">
            <ChangePassword />
          </TabPane>
        </TabContent>
      </BodyContent>
    </Layout>
  );
};

export default EditUser;
