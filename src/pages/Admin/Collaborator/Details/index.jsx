import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { AuthContext } from "../../../../contexts/AuthContext";
import { api } from "../../../../services/api";

import BodyContent from "../../../../components/BodyContent";
import Layout from "../../../../components/Layout";

import styles from "./styles.module.css";

const Details = () => {
  const [defaults, setDefaults] = useState([]);
  const { id } = useParams();
  const { loggedUser } = useContext(AuthContext);
  const empresaId = loggedUser?.empresa_id;

  useEffect(() => {
    const fetchDefaults = async (empresaId) => {
      if (empresaId && id) {
        const { data } = await api.get(
          `/colaborador/comum?empresa_id=${empresaId}&comum_id=${id}`
        );
        setDefaults(data);
      }
    };

    fetchDefaults(empresaId);
  }, [empresaId, id]);

  return (
    <Layout panel="comum" data={defaults}>
      <BodyContent
        header={`Painel do Colaborador: ${defaults.user?.nome}`}
        breadcrumb={`Home > Colaborador > ${defaults.user?.nome}`}
      >
        <p>Comum details {id}</p>
      </BodyContent>
    </Layout>
  );
};

export default Details;
