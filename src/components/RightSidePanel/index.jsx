import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { FaPen } from "react-icons/fa";
import userPhoto from "../../assets/images/evee.gif";

import styles from "./styles.module.css";
import history from "../../utils/history";

const RightSidePanel = () => {
  const { loggedUser } = useContext(AuthContext);

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
          <span className={styles.groupNameTitle}>{loggedUser?.nome_empresa}</span>
        </div>


        {loggedUser?.userType === "Mentor" ? (
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
          
          </div>
        )}

          {loggedUser?.userType === "Admin" ||
              (loggedUser?.userType === "Comum") ? (
           <div className={styles.metricasWrapper}>
            <span className={styles.text}>Métricas</span>
            <span className={styles.aprendizes}>
              <b>6 </b>Aprendizes
            </span>
            <span className={styles.estagiarios}>
              <b>6 </b>Estagiários
            </span>
            <span className={styles.efetivacoes}>
              <b>6 </b>Efetivações
            </span>
          </div>
        ) : (
          <div className={styles.metricasWrapper}>
        
          </div>
        )}
          
      </section>
    </>
  );
};

export default RightSidePanel;
