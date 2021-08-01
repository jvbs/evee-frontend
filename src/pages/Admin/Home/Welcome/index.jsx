import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import history from "../../../../utils/history";

import Button from "../../../../components/Button";
import styles from "./styles.module.css";

const Welcome = () => {
  const { loggedUser } = useContext(AuthContext);

  return (
    <>
      <section className={styles.message}>
        <h2 className={styles.name}>
          Olá, <span>{loggedUser?.nome}</span>
        </h2>
        <h3 className={styles.welcome}>
          Bem-vindo(a) ao <span>EVEE!</span>
        </h3>
        {loggedUser?.userType === "Admin" && (
          <>
            <div className={styles.paragraphs}>
              <p>
                Para mantermos tudo <strong>organizado</strong> e{" "}
                <strong>caprichado</strong>, do jeitinho que a gente gosta, essa
                é a plataforma que iremos usar para todos os acompanhamentos e
                desenvolvimento de aprendiz(es) e estagiário(s)!
              </p>
              <p>
                Você pode gerenciar colaboradores e acompanhar mentores e
                mentorados.
              </p>
            </div>
            <div className={styles.btnGroup}>
              <Button
                text="Gerenciar Colaboradores"
                onClick={() => history.push("/admin/collaborator")}
              />
            </div>
          </>
        )}
        {loggedUser?.userType === "Comum" && (
          <>
            <div className={styles.paragraphs}>
              <p>
                Para mantermos tudo <strong>organizado</strong> e{" "}
                <strong>caprichado</strong>, do jeitinho que a gente gosta, essa
                é a plataforma que iremos usar para todos os acompanhamentos e
                desenvolvimento de aprendiz(es) e estagiário(s)!
              </p>
              <p>
                Você pode acompanhar os mentores e mentorados da empresa
              </p>
            </div>
          </>
        )}
        {loggedUser?.userType === "Mentor" && (
          <>
            <div className={styles.paragraphs}>
              <p>
                Para mantermos tudo <strong>organizado</strong> e{" "}
                <strong>caprichado</strong>, do jeitinho que a gente gosta, essa
                é a plataforma que iremos usar para todos os acompanhamentos e
                desenvolvimento de aprendiz(es) e estagiário(s)!
              </p>
              <p>
                Você pode acompanhar os colaboradores do departamento, verificar
                mentores e mentorados e gerenciar <strong>Trilhas e PDIs</strong>
              </p>
            </div>
            <div className={styles.btnGroup}>
              <Button
                text="Meus Mentorados"
                onClick={() => history.push("/admin/collaborator")}
              />
            </div>
          </>
        )}
        {loggedUser?.userType === "Mentorado" && (
          <>
            <div className={styles.paragraphs}>
              <p>
                Para mantermos tudo <strong>organizado</strong> e{" "}
                <strong>caprichado</strong>, do jeitinho que a gente gosta, essa
                é a plataforma que iremos usar para você acompanhar seu desenvolvimento e metas durante seu período contratual.
              </p>
              <p>Qualquer coisa é só chamar o RH!</p>
            </div>
            <div className={styles.btnGroup}>
              <Button
                text="Meu PDI"
                onClick={() => history.push("/admin/collaborator")}
              />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Welcome;
