import { Col, Container, Row } from "reactstrap";

import LeftSidePanel from "../LeftSidePanel";
import RightSidePanel from "../RightSidePanel";

import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <Container fluid className={styles.bg}>
      <Row>
        <Col md="2" style={{ padding: "0px" }}>
          <LeftSidePanel />
        </Col>
        <Col md="8">{children}</Col>
        <Col md="2">
          <RightSidePanel />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
