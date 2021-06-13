import userPhoto from "../../assets/images/mulher-maravilha.jpeg";
import { FaPen } from "react-icons/fa";

import styles from "./styles.module.css";

const RightSidePanel = () => {
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
          <span className={styles.userNome}>Diana Prince</span>
          <span className={styles.userEmail}>diana.prince@evee.com.br</span>
          <span className={styles.userCargo}>Gerente</span>
          <span className={styles.userDepartamento}>Recursos Humanos</span>
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
