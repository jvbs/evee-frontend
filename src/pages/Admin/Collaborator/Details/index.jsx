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
        <div className={styles.boxOneInfomation}>
            <h1><strong style={{ color: "var(--gray)"}}>Recadinho da Evee!</strong></h1>
            <h1>Você acessou o perfil de um colaborador do tipo <strong style={{ color: "var(--yellow-gold)"}}>Comum</strong>, esse tipo de usuário não podem ter mentorados</h1>
            <p> Obs: É possivel vincular mentorados para o usuário comum, apenas após a alteração para o tipo mentor</p>
            <h2> O que eu faço? </h2> 
            <p>- Acesse a área de mentores e visualize os mentorados vinculados para cada mentor</p>
            <p>- Acesse a área de mentorados e visualize os PDIs de cada mentorado</p>
            </div>
            <div className={styles.boxTwoInfomation}>
            <h3>Ainda com dúvidas?</h3>
            <h4>Solicite suporte ao time de RH ou procure o responsável do Departamento</h4>
            </div>
      </BodyContent>
    </Layout>
  );
};

export default Details;
