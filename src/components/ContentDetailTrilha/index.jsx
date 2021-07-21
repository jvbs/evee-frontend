import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Collapse,
  UncontrolledCollapse,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import styles from "./styles.module.css";
import Button from "../Button";
import history from "../../utils/history";

const ContentDetailTrilha = ({ data }) => {
  const [toggleQuestion, setToggequestion] = useState(1);

  if (!data) {
    <h1>Loading...</h1>;
  }

  return (
    <>
      {data.map((dados) => {
        return (
          <Card>
            <CardHeader onClick={() => setToggequestion(dados.id)}>
              <span className="font-weight-bold">{dados.nome_trilha}</span>
            </CardHeader>
            <Collapse isOpen={toggleQuestion === dados.id ? true : false}>
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
                      onClick={() =>
                        history.push("/admin/mentors/trilha/create")
                      }
                    />
                  </div>
                </div>
              </Col>
            </Collapse>
          </Card>
        );
      })}

      {/* <Row>
        <div className={styles.btnGroup}>
          {data.map((dados) => {
            return (
              <Button
                text={dados.nome_trilha}
                type="gray"
                id={`toggler${dados.id}`}
              />
            );
          })}
        </div>
      </Row>

      <Row>
        {data.map((dados) => {
          return (
            <UncontrolledCollapse toggler={`#toggler${dados.id}`}>
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
                      onClick={() =>
                        history.push("/admin/mentors/trilha/create")
                      }
                    />
                  </div>
                </div>
              </Col>
            </UncontrolledCollapse>
          );
        })}
      </Row> */}
    </>
  );
};

export default ContentDetailTrilha;
