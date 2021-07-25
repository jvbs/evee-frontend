import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../../../../contexts/AuthContext";
import { api } from "../../../../../services/api";

import BodyContent from "../../../../../components/BodyContent";
import Layout from "../../../../../components/Layout";
import CreateFormPDI from "../CreateFormPDI";

const CreatePDI = () => {
  const [mentored, setMentored] = useState([]);
  const { id: mentoredId } = useParams();
  const { loggedUser } = useContext(AuthContext);
  const empresaId = loggedUser?.empresa_id;

  useEffect(() => {
    const fetchMentoreds = async (empresaId) => {
      if (empresaId && mentoredId) {
        const { data } = await api.get(
          `/colaborador/mentorado?empresa_id=${empresaId}&mentor_id=${mentoredId}`
        );
        setMentored(data);
      }
    };

    fetchMentoreds(empresaId);
  }, [empresaId, mentoredId]);

  return (
    <Layout panel="mentor" data={mentored}>
      <BodyContent
        header={`Incluir Trilha ao Mentorado`}
        breadcrumb={`Home > Trilhas do Departamento > Cadastrar Trilha`}
      >
        <CreateFormPDI mentored={mentored} />
      </BodyContent>
    </Layout>
  );
};

export default CreatePDI;
