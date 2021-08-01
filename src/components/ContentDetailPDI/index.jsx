import { useContext } from "react";
import { useEffect, useState } from "react";
import { Row, Col, Badge } from "reactstrap";

import { AuthContext } from "../../contexts/AuthContext";
import history from "../../utils/history";
import Button from "../Button";

import defaultPhoto from "../../assets/images/evee.png";
import styles from "./styles.module.css";

const ContentDetailPDI = ({ pdi }) => {
  const [tags, setTags] = useState([]);

  const { loggedUser } = useContext(AuthContext);

  useEffect(() => {
    if (pdi && pdi?.competencias_tags !== undefined) {
      pdi?.competencias_tags !== ""
        ? setTags(
            JSON.parse(JSON.parse(JSON.stringify(pdi?.competencias_tags)))
          )
        : setTags([]);
    }
  }, [pdi]);

  if (pdi?.competencias_tags === undefined || !loggedUser) {
    return <h1>Loading...</h1>;
  }

  return (
    <Row>
      <Row>
        <Col lg="6">
          <div className={styles.bloco}>
            <div className={styles.userPhotoWrapper}>
              <img
                src={pdi?.foto !== "" ? pdi?.foto : defaultPhoto}
                alt="userPhoto"
                className={styles.userFoto}
              />
            </div>

            <div className={styles.BoxTextCollaborator}>
              <div className={styles.BoxTextCollaboratorName}>
                <span>{pdi?.mentor_responsavel_nome}</span>
              </div>

              <div className={styles.BoxTextCollaboratorInformation}>
                {/* <span style={{ color: "gray" }}>Desenvolvimento</span> */}
                <p>{pdi?.tipo_usuario}</p>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className={styles.blocoStatus}>
            <div className={styles.BoxTextStatus}>
              <span style={{ fontWeight: "bold", color: "#495458" }}>
                Status:{" "}
                <strong style={{ color: "#a4861e" }}>{pdi?.status}</strong>
              </span>
              <span style={{ fontWeight: "bold", color: "#495458" }}>
                Avaliacao:{" "}
                <strong style={{ color: "gray" }}>{pdi?.avaliacao}</strong>{" "}
              </span>
              <span style={{ fontWeight: "bold", color: "#495458" }}>
                Departamento:{" "}
                <strong style={{ color: "gray" }}>
                  {pdi?.nome_departamento}
                </strong>{" "}
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Col lg="12">
        <div className={styles.box}>
          <div className={styles.boxText}>
            <div className={styles.header}>
              <div className={styles.circuloModal}></div>
              <h1>
                {pdi?.tipo_trilha} - {pdi?.nome_programa}
              </h1>
            </div>

            <h2>
              <strong>{pdi?.nome_trilha}</strong>
            </h2>
            <p>{pdi?.descricao}</p>
            <p>
              <strong>Prazo: {pdi?.nome_prazo}</strong>
            </p>
          </div>
        </div>
      </Col>

      <Col>
        <div className={styles.boxCompetencias}>
          <div className={styles.boxTextCompetencias}>
            <div className={styles.header}>
              <div className={styles.circuloModal}></div>
              <h1>Competências</h1>
            </div>
            {tags.map((tag) => {
              return (
                <Badge key={tag.id} className={styles.tag}>
                  <div className={styles.text}>{tag.name} </div>
                </Badge>
              );
            })}
          </div>
        </div>
        <div className={styles.btnEdit}>
          {loggedUser?.userType === "Mentor" &&
            pdi?.status !== "Concluído" &&
            pdi?.status !== "Não concluído" && (
              <Button
                text="Editar"
                onClick={() =>
                  history.push(
                    `/admin/mentoreds/${pdi?.mentorado_id}/pdi/edit/${pdi?.id}`
                  )
                }
              />
            )}
        </div>
        {/* {tags.map((tag) => {
          return (
            <Badge>
              <div>{tag.name}</div>
            </Badge>
          );
        })} */}
      </Col>
    </Row>
  );
};

export default ContentDetailPDI;
