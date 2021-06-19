import { Col, Container, Row } from "reactstrap";
import CreateCompanyForm from "../UserAccountCreate/CreateCompanyForm";
import userPhoto from "../../assets/images/fundo-create-branco.svg";
import styles from "./styles.module.css";

const UserAccountCreate = () => (
  <Container fluid>
    <Row>
      <Col lg="5" xs="12" className={styles.bgColumn}>
        <img src={userPhoto} alt="userPhoto" className={styles.userFoto} />
      </Col>
      <Col lg="7" xs="12" className={styles.formsColumn}>
        <CreateCompanyForm />
      </Col>
    </Row>
  </Container>
);

export default UserAccountCreate;
