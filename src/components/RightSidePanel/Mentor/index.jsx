import { useContext, useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";

import userPhoto from "../../../assets/images/evee.gif";
import { AuthContext } from "../../../contexts/AuthContext";
import { api } from "../../../services/api";
import history from "../../../utils/history";
import Loader from "../../Loader";
import styles from "./styles.module.css";

const RightSidePanelMentor = ({ data }) => {
  const { loggedUser } = useContext(AuthContext);
  const [metricas, setMetricas] = useState([]);

  useEffect(() => {
    const fetchMetricas = async (loggedUser) => {
      const query =
        loggedUser?.userType === "Mentor"
          ? `/metrica/mentor?empresa_id=${loggedUser?.empresa_id}&departamento_id=${loggedUser?.departamento_id}`
          : `/metrica/admin-comum?empresa_id=${loggedUser?.empresa_id}`;
      const { data } = await api.get(query);
      setMetricas(data);
      console.log(data);
    };

    if (loggedUser) {
      fetchMetricas(loggedUser);
    }
  }, [loggedUser]);

  if (!loggedUser) {
    return <Loader />;
  }

  return (
    <>
      <section className={styles.sidePanel}>
        <div className={styles.userPhotoWrapper}>
          <img
            src={data.user?.foto ? data.user?.foto : userPhoto}
            alt="userPhoto"
            className={styles.userFoto}
          />
          <button
            type="button"
            data-testid="btnEditarUsuario"
            onClick={() => history.push(`/admin/mentors/edit/${data.user?.id}`)}
          >
            <FaPen
              fontSize="1.3vw"
              style={{ color: "var(--yellow-gold)", opacity: "80%" }}
            />
          </button>
        </div>
        <div className={styles.userInfoWrapper}>
          <span className={styles.userNome}>{data.user?.nome}</span>
          <span className={styles.userEmail}>{data.user?.email}</span>
          <span className={styles.userCargo}>{data.cargo?.nome_cargo}</span>
          {loggedUser?.userType !== "Admin" ? (
            <span className={styles.userDepartamento}>
              {loggedUser?.nome_departamento}
            </span>
          ) : (
            ""
          )}
          <span className={styles.groupNameTitle}>
            {loggedUser?.nome_empresa}
          </span>
        </div>

        {loggedUser?.userType === "Admin" &&
        loggedUser?.userType === "Comum" ? (
          <div className={styles.metricasWrapper}>
            <span className={styles.text}>Meus Mentorados</span>
            <span className={styles.mentoreds}>
              <b>6</b>
            </span>

            <span className={styles.text}>M??tricas do Departamento</span>
            <div className={styles.groupMentoreds}>
              <span className={styles.aprendizes}>
                <b>6 </b>Aprendizes
              </span>
              <span className={styles.estagiarios}>
                <b>6 </b>Estagi??rios
              </span>
              <hr></hr>
              <span className={styles.estagiarios}>
                <b>2 </b>Mentores
              </span>
            </div>
          </div>
        ) : (
          <div className={styles.metricasWrapper}>
            <span className={styles.text}>Departamento</span>
            <span className={styles.textDepartamento}>
              {data.departamento?.nome_departamento}
            </span>

            <span className={styles.text}>Mentorados</span>
            <div className={styles.groupMentoreds}>
              <span className={styles.aprendizes}>
                <b>6 </b>Aprendizes
              </span>
              <span className={styles.estagiarios}>
                <b>6 </b>Estagi??rios
              </span>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default RightSidePanelMentor;
