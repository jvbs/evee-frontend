import { Col, Container, Row } from "reactstrap";
import LoginForm from "./LoginForm";
import userPhoto from "../../../assets/images/fundo-login1.svg";
import styles from "./styles.module.css";

const UserAccountLogin = () => (
  <Container fluid>
    <Row>
      <Col lg="5" xs="12" className={styles.formsColumn}>
        <LoginForm />
      </Col>
      <Col lg="7" xs="12" className={styles.bgColumn}>
        <img src={userPhoto} alt="userPhoto" className={styles.userFoto} />
      </Col>
    </Row>
  </Container>
);

export default UserAccountLogin;
