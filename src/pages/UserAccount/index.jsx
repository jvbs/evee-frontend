import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CreateCompanyForm from "./CreateCompanyForm";
import LoginForm from "./LoginForm";

import styles from "./styles.module.css";

const UserAccount = () => {
  const [displayLogin, setDisplayLogin] = useState(true);

  const viewLogin = () => {
    setDisplayLogin(true);
  };

  const viewDemo = () => {
    setDisplayLogin(false);
  };

  return (
    <Container fluid>
      <Row>
        <Col lg="8" xs="12" className={styles.bgColumn}>
          aaa
        </Col>
        <Col lg="4" xs="12" className={styles.formsColumn}>
          <button type="button" onClick={viewLogin}>
            Login
          </button>
          <button type="button" onClick={viewDemo}>
            Demo
          </button>
          {displayLogin ? <LoginForm /> : <CreateCompanyForm />}
        </Col>
      </Row>
    </Container>
  );
};

export default UserAccount;
