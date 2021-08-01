import { useContext } from "react";
import { FaPen } from "react-icons/fa";

import userPhoto from "../../../assets/images/avatar2.png";
import { AuthContext } from "../../../contexts/AuthContext";
import history from "../../../utils/history";
import styles from "./styles.module.css";

const RightSidePanelMentored = ({ data }) => {
  const { loggedUser } = useContext(AuthContext);

  return (
    <>
      <section className={styles.sidePanel}>
        <div className={styles.userPhotoWrapper}>
          <img
            src={data.user?.foto ? data.user?.foto : userPhoto}
            alt="userPhoto"
            className={styles.userFoto}
          />
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

        <div className={styles.metricasWrapper}>
          <span className={styles.text}>Departamento</span>
          <span className={styles.textDepartamento}>
            {data.departamento?.nome_departamento}
          </span>
        </div>
      </section>
    </>
  );
};

export default RightSidePanelMentored;
