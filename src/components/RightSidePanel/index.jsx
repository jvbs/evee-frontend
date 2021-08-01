import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { FaPen } from "react-icons/fa";
import userPhoto from "../../assets/images/evee.gif";

import styles from "./styles.module.css";
import history from "../../utils/history";
import { api } from "../../services/api";
import Loader from "../Loader";

const RightSidePanel = () => {
  const [metricas, setMetricas] = useState([]);
  const { loggedUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchMetricas = async (loggedUser) => {
      const query =
        loggedUser?.userType === "Mentor"
          ? `/metrica/mentor?empresa_id=${loggedUser?.empresa_id}&departamento_id=${loggedUser?.departamento_id}&id=${loggedUser?.id}`
          : `/metrica/admin-comum?empresa_id=${loggedUser?.empresa_id}`;
      const { data } = await api.get(query);
      setMetricas(data);
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
            src={loggedUser?.foto ? loggedUser?.foto : userPhoto}
            alt="userPhoto"
            className={styles.userFoto}
          />
          <button
            type="button"
            data-testid="btnEditarUsuario"
            onClick={() => history.push("/admin/edit-user")}
          >
            <FaPen
              fontSize="1.3vw"
              style={{ color: "var(--yellow-gold)", opacity: "80%" }}
            />
          </button>
        </div>
        <div className={styles.userInfoWrapper}>
          <span className={styles.userNome}>{loggedUser?.nome}</span>
          <span className={styles.userEmail}>{loggedUser?.email}</span>
          <span className={styles.userCargo}>{loggedUser?.cargo}</span>
          {loggedUser?.userType !== "Admin" ? (
            <span className={styles.userDepartamento}>
              {loggedUser?.departamento}
            </span>
          ) : (
            ""
          )}
          <span className={styles.groupNameTitle}>
            {loggedUser?.nome_empresa}
          </span>
        </div>

        {loggedUser?.userType === "Mentor" ? (
          <div className={styles.metricasWrapper}>
            <span className={styles.text}>Meus Mentorados</span>
            <span className={styles.mentoreds}>
              <b>{metricas?.meus_mentorados}</b>
            </span>

            <span className={styles.text}>Métricas do Departamento</span>
            <div className={styles.groupMentoreds}>
              <span className={styles.aprendizes}>
                <b>{metricas?.aprendizes} </b>Aprendizes
              </span>
              <span className={styles.estagiarios}>
                <b>{metricas?.estagiarios} </b>Estagiários
              </span>
              <span className={styles.estagiarios}>
                <b>{metricas?.mentores} </b>Mentores
              </span>
            </div>
          </div>
        ) : (
          <div className={styles.metricasWrapper}></div>
        )}

        {loggedUser?.userType === "Admin" ||
        loggedUser?.userType === "Comum" ? (
          <div className={styles.metricasWrapper}>
            <span className={styles.text}>
              Métricas <br></br> Organizacionais
            </span>
            <span className={styles.aprendizes}>
              <b>{metricas[0]?.aprendizes} </b>Aprendizes
            </span>
            <span className={styles.estagiarios}>
              <b>{metricas[0]?.estagiarios} </b>Estagiários
            </span>
            <span className={styles.efetivacoes}>
              <b>{metricas[0]?.mentores} </b>Mentores
            </span>
          </div>
        ) : (
          <div className={styles.metricasWrapper}></div>
        )}
      </section>
    </>
  );
};

export default RightSidePanel;
