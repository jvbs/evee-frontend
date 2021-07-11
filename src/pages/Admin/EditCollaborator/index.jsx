import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout";
import BodyContent from "../../../components/BodyContent";

import { api } from "../../../services/api";
import EditForm from "./EditForm";
// import styles from "./styles.module.css";

const EditCollaborator = () => {
  const { id: idUser } = useParams();
  const [collaborator, setCollaborator] = useState([{}]);

  useEffect(() => {
    const fetchCollaborator = async (id) => {
      const { data } = await api.get(`/colaborador/${id}`);

      setCollaborator(data);
    };

    fetchCollaborator(idUser);
  }, []);

  return (
    <Layout panel="mentor" data={collaborator}>
      <BodyContent
        header="Dados do Usuário"
        breadcrumb="Home > Dados do Usuário"
      >
        <EditForm collaborator={collaborator} />
      </BodyContent>
    </Layout>
  );
};

export default EditCollaborator;
