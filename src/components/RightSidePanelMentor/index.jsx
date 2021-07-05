import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { FaPen } from "react-icons/fa";
import userPhoto from "../../assets/images/aquaman.jpg";
import Button from "../../components/Button";
import history from "../../utils/history";

import styles from "./styles.module.css";

const RightSidePanelMentor = () => {
  const { loggedUser } = useContext(AuthContext);

  return (
    <>
      <section className={styles.sidePanel}>
        <div className={styles.userPhotoWrapper}>
          <img src={userPhoto} alt="userPhoto" className={styles.userFoto} />
          <button type="button" data-testid="btnEditarUsuario">
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
          <span className={styles.userCargo}>{loggedUser?.nome_empresa}</span>
          {loggedUser?.userType !== "Admin" ? (
            <span className={styles.userDepartamento}>
              {loggedUser?.departamentologgedUser?.departamento}
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
            <span className={styles.textDepartamento}>Complice</span>

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

export default RightSidePanelMentor;
