import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { AuthContext } from "../../../../contexts/AuthContext";
import { api } from "../../../../services/api";
import history from "../../../../utils/history";

import BodyContent from "../../../../components/BodyContent";
import Layout from "../../../../components/Layout";
import UserBox from "../../../../components/UserBox";

// import styles from "./styles.module.css";

const MentorDetails = () => {
  const [mentor, setMentor] = useState([]);
  const [mentorados, setMentorados] = useState([]);

  const { id: mentorId } = useParams();
  const { loggedUser } = useContext(AuthContext);
  const empresaId = loggedUser?.empresa_id;

  useEffect(() => {
    const fetchMentors = async (empresaId) => {
      if (empresaId && mentorId) {
        const { data: mentor } = await api.get(
          `/colaborador/mentor?empresa_id=${empresaId}&mentor_id=${mentorId}`
        );

        const { data: mentorados } = await api.get(
          `/colaborador/mentorados_mentor/${mentorId}`
        );
        setMentor(mentor);
        setMentorados(mentorados);
      }
    };

    fetchMentors(empresaId);
  }, [empresaId, mentorId]);

  return (
    <Layout panel="mentor" data={mentor}>
      <BodyContent
        header={`Painel do Mentor: ${mentor.user?.nome}`}
        breadcrumb={`Home > Mentores > ${mentor.user?.nome}`}
      >
        <h1>Aprendiz</h1>
        {mentorados.filter((el) => el.nome_cargo === "Aprendiz").length ===
          0 && <span>sem aprendizes</span>}

        {mentorados
          .filter((el) => el.nome_cargo === "Aprendiz")
          .map((mentorado, index) => {
            return (
              <UserBox
                key={index}
                nome={mentorado.nome}
                cargo={mentorado.nome_cargo}
                foto={mentorado.foto}
                // departamento={user.nome_departamento}
                onClick={() =>
                  history.push(`/admin/mentoreds/details/${mentorado.id}`)
                }
              />
            );
          })}

        <h1>Estagiario</h1>
        {mentorados.filter((el) => el.nome_cargo === "Estagiário").length ===
          0 && <span>sem estagiarios</span>}

        {mentorados
          .filter((el) => el.nome_cargo === "Estagiário")
          .map((mentorado, index) => {
            return (
              <>
                <UserBox
                  key={index}
                  nome={mentorado.nome}
                  cargo={mentorado.nome_cargo}
                  foto={mentorado.foto}
                  // departamento={user.nome_departamento}
                  onClick={() =>
                    history.push(`/admin/mentoreds/details/${mentorado.id}`)
                  }
                />
              </>
            );
          })}
      </BodyContent>
    </Layout>
  );
};

export default MentorDetails;
