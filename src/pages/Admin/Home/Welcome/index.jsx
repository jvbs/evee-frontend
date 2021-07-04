import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";

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
        <div className={styles.paragraphs}>
          <p>
            Para mantermos tudo <strong>organizado</strong> e{" "}
            <strong>caprichado</strong>, do jeitinho que a gente gosta, essa é a
            plataforma que iremos usar para todos os acompanhamento e
            desenvolvimento de aprendiz(es) e estagiário(s)!
          </p>
          <p>
            Você pode gerenciar colaboradores e acompanhar mentores e
            mentorados.
          </p>
        </div>
        <div className={styles.btnGroup}>
          <Button text="Gerenciar Colaboradores" />
        </div>
      </section>
    </>
  );
};

export default Welcome;
