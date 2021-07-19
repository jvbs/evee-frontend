import { Row, Col } from "reactstrap";
import styles from "./styles.module.css";
import Button from "../Button";
import history from "../../utils/history";

const ContentDetailTrilha = ({ data }) => {
  if (!data) {
    <h1>Loading...</h1>;
  }

  console.log(data);

  return (
    <>
      <Row>
        <div className={styles.btnGroup}>
          {data.map((dados) => {
            return <Button text={dados.nome_trilha} type="gray" />;
          })}
        </div>
      </Row>

      <Row>
        {data.map((dados) => {
          return (
            <Col lg="12">
              <div className={styles.box}>
                <div className={styles.boxText}>
                  <div className={styles.header}>
                    <div className={styles.circuloModal}></div>
                    <h1>{dados.nome_trilha}</h1>
                  </div>
                  <h2>
                    <strong>{dados.nome}</strong>
                  </h2>
                  <p>{dados.descricao}</p>
                  <p>
                    <strong>Prazo: {dados.nome_prazo}</strong>
                  </p>
                </div>
                <div className={styles.btnEdit}>
                  <Button
                    text="Editar"
                    onClick={() => history.push("/admin/mentors/trilha/create")}
                  />
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ContentDetailTrilha;
