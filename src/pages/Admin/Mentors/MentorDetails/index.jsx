import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { AuthContext } from "../../../../contexts/AuthContext";
import { api } from "../../../../services/api";

import BodyContent from "../../../../components/BodyContent";
import Layout from "../../../../components/Layout";

// import styles from "./styles.module.css";

const MentorDetails = () => {
  const [mentor, setMentor] = useState([]);
  const { id: mentorId } = useParams();
  const { loggedUser } = useContext(AuthContext);
  const empresaId = loggedUser?.empresa_id;

  useEffect(() => {
    const fetchMentors = async (empresaId) => {
      if (empresaId && mentorId) {
        const { data } = await api.get(
          `/colaborador/mentor?empresa_id=${empresaId}&mentor_id=${mentorId}`
        );
        setMentor(data);
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
        <p>Mentor details {mentorId}</p>
      </BodyContent>
    </Layout>
  );
};

export default MentorDetails;
