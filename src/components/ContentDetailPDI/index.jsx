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
import defaultPhoto from "../../assets/images/evee.png";

const ContentDetailPDI = () => {
  // const [toggleQuestion, setToggequestion] = useState(1);

  // if (!data) {
  //   <h1>Loading...</h1>;
  // }

  return (
    <Row>
      <Row>
        <Col lg="6">
          
          <div className={styles.bloco}>
            <div className={styles.userPhotoWrapper}>
              <img
                src={defaultPhoto}
                alt="userPhoto"
                className={styles.userFoto}
              />
            </div>

            <div className={styles.BoxTextCollaborator}>
              <div className={styles.BoxTextCollaboratorName}>
                <span>Acacio</span>
              </div>

              <div className={styles.BoxTextCollaboratorInformation}>
                <span style={{ color: "gray" }}>Desenvolvimento</span>
                <p>Mentor</p>
              </div>
              
            </div>
          </div>
        </Col>

        <Col>
        <div className={styles.blocoStatus}>

            <div className={styles.BoxTextStatus}>
                <span  style={{fontWeight: "bold", color: "#495458"  }}>Status: <strong style={{ color: "#a4861e" }}>Em andamento</strong></span>
                <span style={{fontWeight: "bold", color: "#495458"  }}>Avaliacao: <strong style={{ color: "gray" }}>Nao Iniciado</strong> </span>
            </div>
          </div>
        </Col>
      </Row>
      <Col lg="12">
        <div className={styles.box}>
          <div className={styles.boxText}>
            <div className={styles.header}>
              <div className={styles.circuloModal}></div>
              <h1>Trilha 1 - Basico</h1>
            </div>

            <h2>
              <strong>Conceitos Técnicos Iniciais</strong>
            </h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <p>
              <strong>Prazo: 01 - 03 meses</strong>
            </p>
          </div>
         
        </div>
      </Col>

      <Col>
        <div className={styles.boxCompetencias}>
          <div className={styles.boxTextCompetencias}>
            <div className={styles.header}>
              <div className={styles.circuloModal}></div>
              <h1>Competencias</h1>
            </div>
            <p>Processo seletivo</p>
          </div>
        </div> 
        <div className={styles.btnEdit}>
            <Button
              text="Editar"
              onClick={() => history.push(`/admin/mentors/trilha/edit/1`)}
            />
          </div>
      </Col>
    </Row>
  );
};

export default ContentDetailPDI;
