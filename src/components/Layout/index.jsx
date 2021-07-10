import { Col, Container, Row } from "reactstrap";

import LeftSidePanel from "../LeftSidePanel";
import RightSidePanel from "../RightSidePanel";
import RightSideMentorPanel from "../RightSidePanel/Mentor";
import RightSideMentoredPanel from "../RightSidePanel/Mentored";

import styles from "./styles.module.css";

const Layout = ({ children, panel, data }) => {
  return (
    <Container fluid className={styles.bg}>
      <Row>
        <Col md="2" style={{ padding: "0px" }}>
          <LeftSidePanel />
        </Col>
        <Col md="8">{children}</Col>
        <Col md="2">
          {!panel && <RightSidePanel />}
          {panel === "mentor" && data && <RightSideMentorPanel data={data} />}
          {panel === "mentored" && data && (
            <RightSideMentoredPanel data={data} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
