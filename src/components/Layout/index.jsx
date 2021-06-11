import { Col, Container, Row } from "reactstrap";

import LeftSidePanel from "../LeftSidePanel";
import RightSidePanel from "../RightSidePanel";

import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <Container fluid className={styles.bg}>
      <Row>
        <Col md="2">
          <LeftSidePanel />
        </Col>
        <Col md="8" style={{ backgroundColor: "green" }}>
          <Row>
            <h1>Oi</h1>
          </Row>
          <Row>{children}</Row>
        </Col>
        <Col md="2" style={{ backgroundColor: "yellow" }}>
          <RightSidePanel />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
