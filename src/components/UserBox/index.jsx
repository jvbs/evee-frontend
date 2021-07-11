import { Col } from "reactstrap";
import styles from "./styles.module.css";

import defaultPhoto from "../../assets/images/evee.png";

const UserBox = ({ nome, cargo, departamento, userPhoto, tipo, ...rest }) => {
  return (
    <Col xl="4" md="6" sm="6" style={{ marginBottom: "2vh" }}>
      <div className={styles.bloco} {...rest}>
        <div className={styles.userPhotoWrapper}>
          <img
            src={userPhoto ? userPhoto : defaultPhoto}
            alt="userPhoto"
            className={styles.userFoto}
          />
        </div>

        <div className={styles.BoxTextCollaborator}>
          <div className={styles.BoxTextCollaboratorName}>
            <p>{nome}</p>
          </div>

          <div className={styles.BoxTextCollaboratorInformation}>
            <p>{tipo}</p>
            <p>{cargo}</p>
            <p>{departamento}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default UserBox;
