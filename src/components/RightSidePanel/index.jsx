import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { FaPen } from "react-icons/fa";
import userPhoto from "../../assets/images/mulher-maravilha.jpeg";

import styles from "./styles.module.css";

const RightSidePanel = () => {
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
          <span className={styles.userNome}>{loggedUser.nome}</span>
          <span className={styles.userEmail}>{loggedUser.email}</span>
          <span className={styles.userCargo}>{loggedUser.cargo}</span>
          <span className={styles.userCargo}>{loggedUser.nome_empresa}</span>
          <span className={styles.userDepartamento}>
            {loggedUser.departamento}
          </span>
        </div>

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
      </section>
    </>
  );
};

export default RightSidePanel;
