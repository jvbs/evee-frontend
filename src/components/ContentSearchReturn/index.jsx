import { Col, Row } from "reactstrap";
import styles from "./styles.module.css";


const ContentSearchReturn = () => {
  return (
    <Row>
      <div className={styles.BoxText}>
      <h1>Colaboradores</h1>
      <h2><strong style={{ color: "var(--yellow-gold)" }}>4</strong> Resultado(s) encontrados</h2>
      </div>
    </Row>
  );
};

export default ContentSearchReturn;
