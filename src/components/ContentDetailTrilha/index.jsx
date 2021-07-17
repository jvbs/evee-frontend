import { Row, Col } from "reactstrap";
import styles from "./styles.module.css";
import Button from "../Button";
import history from "../../utils/history";

const ContentDetailTrilha = () => {
  return (
    <>
     <Row>
     <div className={styles.btnGroup}>
                <Button
                  text="Trilha - Basic"
                  type="gray"
                  onClick={() => history.push("/admin/mentors/trilha/create")}
                />
      </div>

     </Row>

      <Row>
        <Col lg="12">
        <div className={styles.box} >
          <div className={styles.boxText}>  
            <div className={styles.header}>
              <div className={styles.circuloModal}></div>
              <h1>Trilha - Basico I</h1>
            </div>
          <h2><strong>Fundamentos da Programacao</strong></h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <p><strong>Prazo: 30 dias</strong></p></div>
          <div className={styles.btnEdit}>
                <Button
                  text="Editar"
                  onClick={() => history.push("/admin/mentors/trilha/create")}
                />
              </div>
        </div>
        </Col>
      </Row>
    </>
  );
};

export default ContentDetailTrilha;
