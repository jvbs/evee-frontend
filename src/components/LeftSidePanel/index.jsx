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
              <a href="/colaborador" data-testid="btnMenuHome">
                <li>Home</li>
              </a>
            </div>
            <div className={styles.otherGroup}>
              <a href="/colaborador" data-testid="btnMenuColaboradores">
                <li>Colaboradores</li>
              </a>
              <a href="/colaborador" data-testid="btnMenuDepartamentos">
                <li>Departamentos</li>
              </a>
              <a href="/colaborador" data-testid="btnMenuCadastroColaboradores">
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <span>Cadastrar</span>
                  <span>Colaboradores</span>
                </li>
              </a>
              <a href="/colaborador" data-testid="btnMenuMentores">
                <li>Mentores</li>
              </a>
              <a href="/colaborador" data-testid="btnMenuMentorados">
                <li>Mentorados</li>
              </a>
            </div>
          </ul>
        </nav>
        <section className={styles.logoutButton}>
          <Button text="Sair" data-testid="btnMenuSair" />
        </section>
      </div>
    </>
  );
};

export default LeftSidePanel;
