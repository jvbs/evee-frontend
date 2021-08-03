import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Row } from "reactstrap";

import { AuthContext } from "../../../../contexts/AuthContext";
import { api } from "../../../../services/api";
import history from "../../../../utils/history";

import BodyContent from "../../../../components/BodyContent";
import Layout from "../../../../components/Layout";
import UserBox from "../../../../components/UserBox";
import styles from "./styles.module.css";

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
        <div className={styles.header}>
            <div className={styles.circuloModal}></div> 
            <div className={styles.BoxText}>
              <h1>Aprendiz</h1> 
            </div>
        </div>
       
        {mentorados.filter((el) => el.nome_cargo === "Aprendiz").length ===
          0 &&  
          <div className={styles.BoxTextGroup}>
          <p className={styles.BoxTextOne}>
          Ops! Nenhum <strong>Aprendiz</strong> encontrado...
          </p>
          </div>
          }
      <Row>
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
       </Row>  
         <div className={styles.header}>
            <div className={styles.circuloModal}></div> 
            <div className={styles.BoxText}>
              <h1>Estagiário</h1> 
            </div>
        </div>
        
        {mentorados.filter((el) => el.nome_cargo === "Estagiário").length ===
          0 && 
          <div className={styles.BoxTextGroup}>
          <p className={styles.BoxTextOne}>
          Ops! Nenhum <strong>Estagiário</strong> encontrado...
          </p>
          </div>
          }
      <Row>
        {mentorados
          .filter((el) => el.nome_cargo === "Estagiário")
          .map((mentorado, index) => {
            return (
              <>
              <Col xl="4" md="6" sm="6" style={{ marginBottom: "2vh" }}>
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
                </Col>
              </>
            );
          })}
        </Row>  
      </BodyContent>
    </Layout>

  );
};

export default MentorDetails;
