import Button from "../Button";

import logo from "../../assets/images/logo.png";
import styles from "./styles.module.css";

const LeftSidePanel = () => {
  return (
    <>
      <div className={styles.panel}>
        <section className="text-center">
          <img className={styles.logo} src={logo} alt="Logo" />
        </section>
        <nav>
          <ul>
            <div className={styles.homeGroup}>
              <a>
                <li>Home</li>
              </a>
            </div>
            <div className={styles.otherGroup}>
              <a>
                <li>Colaboradores</li>
              </a>
              <a>
                <li>Departamentos</li>
              </a>
              <a>
                <li>Cadastrar Colaboradores</li>
              </a>
              <a>
                <li>Mentores</li>
              </a>
              <a>
                <li>Mentorados</li>
              </a>
            </div>
          </ul>
        </nav>
        <section className={styles.logoutButton}>
          <Button text="Sair" />
        </section>
      </div>
    </>
  );
};

export default LeftSidePanel;
