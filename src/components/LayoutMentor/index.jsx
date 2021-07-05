import { Col, Container, Row } from "reactstrap";

import LeftSidePanel from "../LeftSidePanel";
import RightSidePanelMentor from "../RightSidePanelMentor";

import styles from "./styles.module.css";

const LayoutMentor = ({ children }) => {
  return (
    <Container fluid className={styles.bg}>
      <Row>
        <Col md="2" style={{ padding: "0px" }}>
          <LeftSidePanel />
        </Col>
        <Col md="8">{children}</Col>
        <Col md="2">
          <RightSidePanelMentor />
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutMentor;
