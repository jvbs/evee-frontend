import { Col } from "reactstrap";
import styles from "./styles.module.css";

import defaultPhoto from "../../assets/images/evee.png";

const UserBox = ({ nome, cargo, departamento, userPhoto }) => {
  return (
    <Col xl="4" md="6" sm="12" style={{ marginBottom: "2vh" }}>
      <div className={styles.bloco}>
        <div className={styles.userPhotoWrapper}>
          <img
            src={userPhoto ? userPhoto : defaultPhoto}
            alt="userPhoto"
            className={styles.userFoto}
          />
        </div>

        <div className={styles.text}>
          <p>{nome}</p>
          <p>{cargo}</p>
          <p>{departamento}</p>
        </div>
      </div>
    </Col>
  );
};

export default UserBox;
