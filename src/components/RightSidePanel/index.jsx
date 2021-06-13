import userPhoto from "../../assets/images/homem-de-ferro.jpg";

import styles from "./styles.module.css";

const RightSidePanel = () => {
  return (
    <>
      <section>
        <div className={styles.userPhotoWrapper}>
          <img src={userPhoto} alt="userPhoto" className={styles.userFoto} />
        </div>
        <div className={styles.userInfoWrapper}>
          <span className={styles.userNome}>Pillar Serrani</span>
          <span className={styles.userEmail}>acacio.duarte@evee.com.br</span>
          <span className={styles.userCargo}>Gerente</span>
          <span className={styles.userDepartamento}>Recursos Humanos</span>
        </div>

        <div className={styles.metricasWrapper}>
          <span className={styles.text}>Métricas</span>
          <span className={styles.aprendizes}>
            <strong>6 </strong>Aprendizes
          </span>
          <span className={styles.estagiarios}>
            <strong>6 </strong>Estagiários
          </span>
          <span className={styles.efetivacoes}>
            <strong>6 </strong>Efetivações
          </span>
        </div>
      </section>
    </>
  );
};

export default RightSidePanel;
