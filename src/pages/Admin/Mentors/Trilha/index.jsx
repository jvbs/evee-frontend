import { useContext, useEffect, useState } from "react";

import { api } from "../../../../services/api";
import { AuthContext } from "../../../../contexts/AuthContext";

import BodyContent from "../../../../components/BodyContent";
import Layout from "../../../../components/Layout";
import TabsTrilhas from "../Trilha/Tabs";

const Trilha = () => {
  const [aprendizagem, setAprendizagem] = useState([]);
  const [estagio, setEstagio] = useState([]);
  const { loggedUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchTrails = async (id) => {
      if (loggedUser) {
        const { data: aprendizagem } = await api.get(
          `/trilha/aprendizagem/${id}`,
          {
            empresa_id: id,
          }
        );
        const { data: estagio } = await api.get(`/trilha/estagio/${id}`, {
          empresa_id: id,
        });

        setAprendizagem(aprendizagem);
        setEstagio(estagio);
      }
    };

    fetchTrails(loggedUser?.empresa_id);
  }, [loggedUser]);

  return (
    <Layout>
      <BodyContent
        header={`Trilhas - Gerenciamento de Atividades & Capacitação Interna`}
        breadcrumb={`Home > Trilhas do Departamento`}
      >
        <TabsTrilhas aprendizagem={aprendizagem} estagio={estagio} />
      </BodyContent>
    </Layout>
  );
};

export default Trilha;
