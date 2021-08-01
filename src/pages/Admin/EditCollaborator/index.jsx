import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classnames from "classnames";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

import { api } from "../../../services/api";

import Layout from "../../../components/Layout";
import BodyContent from "../../../components/BodyContent";
import ChangePasswordForm from "./ChangePasswordForm";
import EditForm from "./EditForm";

const EditCollaborator = () => {
  const { id: idUser } = useParams();
  const [collaborator, setCollaborator] = useState([{}]);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    const fetchCollaborator = async (id) => {
      const { data } = await api.get(`/colaborador/${id}`);

      setCollaborator(data);
    };

    fetchCollaborator(idUser);
  }, []);

  return (
    <Layout panel="" data={collaborator}>
      <BodyContent
        header="Dados do Usuário"
        breadcrumb={`Home > Colaboradores > Dados do Usuário > ${collaborator.user?.nome}`}
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
            <EditForm collaborator={collaborator} />
          </TabPane>
          <TabPane tabId="2">
            <ChangePasswordForm />
          </TabPane>
        </TabContent>
      </BodyContent>
    </Layout>
  );
};

export default EditCollaborator;
