import { useContext } from "react";
import { FaPen } from "react-icons/fa";

import userPhoto from "../../../assets/images/aquaman.jpg";
import { AuthContext } from "../../../contexts/AuthContext";
import history from "../../../utils/history";
import styles from "./styles.module.css";

const RightSidePanelMentored = ({ data }) => {
  const { loggedUser } = useContext(AuthContext);

  return (
    <>
      <section className={styles.sidePanel}>
        <div className={styles.userPhotoWrapper}>
          <img src={userPhoto} alt="userPhoto" className={styles.userFoto} />
          {loggedUser?.userType !== "Mentor" ||
          (loggedUser?.userType === "Mentor" &&
            loggedUser?.departamento === "RH") ? (
            <button
              type="button"
              data-testid="btnEditarUsuario"
              onClick={() =>
                history.push(`/admin/mentors/edit/${data.user?.id}`)
              }
            >
              <FaPen
                fontSize="1.3vw"
                style={{ color: "var(--yellow-gold)", opacity: "80%" }}
              />
            </button>
          ) : (
            ""
          )}
        </div>
        <div className={styles.userInfoWrapper}>
          <span className={styles.userNome}>{data.user?.nome}</span>
          <span className={styles.userEmail}>{data.user?.email}</span>
          <span className={styles.userCargo}>{data.cargo?.nome_cargo}</span>
          <span className={styles.userCargo}>{data.empresa?.nome_empresa}</span>
          {loggedUser?.userType !== "Admin" ? (
            <span className={styles.userDepartamento}>
              {loggedUser?.nome_departamento}
            </span>
          ) : (
            ""
          )}
        </div>

        {loggedUser?.userType !== "Admin" ? (
          <div className={styles.metricasWrapper}>
            <span className={styles.text}>Meus Mentorados</span>
            <span className={styles.mentoreds}>
              <b>6</b>
            </span>

            <span className={styles.text}>Métricas do Departamento</span>
            <div className={styles.groupMentoreds}>
              <span className={styles.aprendizes}>
                <b>6 </b>Aprendizes
              </span>
              <span className={styles.estagiarios}>
                <b>6 </b>Estagiários
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
                <b>6 </b>Estagiários
              </span>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default RightSidePanelMentored;
