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
              >
                <li>Home</li>
              </a>
            </div>
            <div className={styles.otherGroup}>
              <a href="/admin" data-testid="btnMenuColaboradores">
                <li>Colaboradores</li>
              </a>
              <a href="/admin" data-testid="btnMenuDepartamentos">
                <li>Departamentos</li>
              </a>
              <a
                onClick={() => history.push("/admin/create-collaborator")}
                data-testid="btnMenuCadastroColaboradores"
              >
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <span>Cadastrar</span>
                  <span>Colaboradores</span>
                </li>
              </a>
              <a href="/admin" data-testid="btnMenuMentores">
                <li>Mentores</li>
              </a>
              <a href="/admin" data-testid="btnMenuMentorados">
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
