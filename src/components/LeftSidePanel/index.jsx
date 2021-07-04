import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import Button from "../Button";
import history from "../../utils/history";

import logo from "../../assets/images/logo.png";
import styles from "./styles.module.css";

const LeftSidePanel = () => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <>
      <div className={styles.panel}>
        <section className="text-center">
          <img className={styles.logo} src={logo} alt="Logo" />
        </section>
        <nav>
          <ul>
            <div className={styles.homeGroup}>
              <a
                onClick={() => history.push("/admin")}
                data-testid="btnMenuHome"
                href="#/"
              >
                <li>Home</li>
              </a>
            </div>
            <div className={styles.otherGroup}>
              <a
                onClick={() => history.push("/admin/collaborator")}
                data-testid="btnMenuColaboradores"
                href="#/"
              >
                <li>Colaboradores</li>
              </a>
              <a
                onClick={() => history.push("/admin/create-collaborator")}
                data-testid="btnMenuDepartamentos"
                href="#/"
              >
                <li>Departamentos</li>
              </a>
              <a
                onClick={() => history.push("/admin/create-collaborator")}
                data-testid="btnMenuCadastroColaboradores"
                href="#/"
              >
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <span>Cadastrar</span>
                  <span>Colaboradores</span>
                </li>
              </a>
              <a
                onClick={() => history.push("/admin/mentors")}
                data-testid="btnMenuMentores"
                href="#/"
              >
                <li>Mentores</li>
              </a>
              <a
                onClick={() => history.push("/admin/create-collaborator")}
                data-testid="btnMenuMentorados"
                href="#/"
              >
                <li>Mentorados</li>
              </a>
            </div>
          </ul>
        </nav>
        <section className={styles.logoutButton}>
          <Button
            text="Sair"
            data-testid="btnMenuSair"
            onClick={handleLogout}
          />
        </section>
      </div>
    </>
  );
};

export default LeftSidePanel;
