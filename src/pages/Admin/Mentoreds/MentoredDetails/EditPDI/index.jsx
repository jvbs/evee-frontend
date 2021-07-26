import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { AuthContext } from "../../../../../contexts/AuthContext";
import { api } from "../../../../../services/api";

import BodyContent from "../../../../../components/BodyContent";
import Layout from "../../../../../components/Layout";
import EditForm from "./EditForm";

const EditPDI = () => {
  const [mentored, setMentored] = useState([]);
  const [pdi, setPdi] = useState([]);
  const { id: mentoredId, pdi: pdiId } = useParams();
  const { loggedUser } = useContext(AuthContext);
  const empresaId = loggedUser?.empresa_id;

  useEffect(() => {
    const fetchMentoreds = async (empresaId) => {
      if (empresaId && mentoredId && pdiId) {
        const { data: mentored } = await api.get(
          `/colaborador/mentorado?empresa_id=${empresaId}&mentor_id=${mentoredId}`
        );

        const { data: pdi } = await api.get(`/pdi/${pdiId}`);

        setMentored(mentored);
        setPdi(pdi);
        console.log("pdi - fetch", pdi);
      }
    };

    fetchMentoreds(empresaId);
  }, [empresaId, mentoredId, pdiId]);

  if (Object.keys(mentored).length === 0 || Object.keys(pdi).length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout panel="mentored" data={mentored}>
      <BodyContent
        header={`Painel do Mentorado: ${mentored.user?.nome}`}
        breadcrumb={`Home > Mentorados > ${mentored.user?.nome}`}
      >
        <EditForm mentored={mentored} pdi={pdi} />
      </BodyContent>
    </Layout>
  );
};

export default EditPDI;
