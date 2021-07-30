import { useEffect, useState } from "react";
import { Row, Col, Badge } from "reactstrap";
import styles from "./styles.module.css";
import Button from "../Button";
import history from "../../utils/history";
import defaultPhoto from "../../assets/images/evee.png";
import { FaTimes } from "react-icons/fa";

const ContentDetailPDI = ({ pdi }) => {
  const [tags, setTags] = useState();

  useEffect(() => {
    setTags(JSON.parse(JSON.parse(JSON.stringify(pdi.competencias_tags))));
  }, [pdi]);

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
            </div>
          </div>
        </Col>
      </Row>
      <Col lg="12">
        <div className={styles.box}>
          <div className={styles.boxText}>
            <div className={styles.header}>
              <div className={styles.circuloModal}></div>
              <h1>{pdi?.tipo_trilha}</h1>
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
          <Button
            text="Editar"
            onClick={() =>
              history.push(
                `/admin/mentoreds/${pdi?.mentorado_id}/pdi/edit/${pdi?.id}`
              )
            }
          />
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
