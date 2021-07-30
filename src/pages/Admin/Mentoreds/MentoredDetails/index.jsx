import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { AuthContext } from "../../../../contexts/AuthContext";
import { api } from "../../../../services/api";

import BodyContent from "../../../../components/BodyContent";
import Layout from "../../../../components/Layout";
import TabsPDI from "../MentoredDetails/Tabs";

import styles from "./styles.module.css";

const MentoredDetails = () => {
  const [mentored, setMentored] = useState([]);
  const [activePdi, setActivePdi] = useState([]);
  const [pdiHistory, setPdiHistory] = useState([]);
  const { id: mentoredId } = useParams();
  const { loggedUser } = useContext(AuthContext);
  const empresaId = loggedUser?.empresa_id;
  const [aprendizagem, setAprendizagem] = useState([]);
  const [estagio, setEstagio] = useState([]);

  useEffect(() => {
    const fetchMentoreds = async (empresaId) => {
      if (empresaId && mentoredId) {
        const { data: mentored } = await api.get(
          `/colaborador/mentorado?empresa_id=${empresaId}&mentor_id=${mentoredId}`
        );

        const { data: activePdi } = await api.get(
          `/pdi/mentored/active/${mentoredId}`
        );

        const { data: history } = await api.get(`/pdi/mentored/${mentoredId}`);

        setMentored(mentored);
        setActivePdi(activePdi);
        setPdiHistory(history);
      }
    };

    fetchMentoreds(empresaId);
  }, [empresaId, mentoredId]);

  return (
    <Layout panel="mentored" data={mentored}>
      <BodyContent
        header={`Painel do Mentorado: ${mentored.user?.nome}`}
        breadcrumb={`Home > Mentorados > ${mentored.user?.nome}`}
      >
        <TabsPDI activePdi={activePdi} pdiHistory={pdiHistory} />
      </BodyContent>
    </Layout>
  );
};

export default MentoredDetails;
