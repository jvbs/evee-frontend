import {
  Modal as BootstrapModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
} from "reactstrap";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../Button";

import styles from "./styles.module.css";

const Modal = ({
  modal,
  toggle,
  children,
  title,
  firstBtnLabel,
  secondBtnLabel,
  footerMsgOne,
  footerMsgTwo,
}) => {
  const closeBtn = (
    <button className={styles.closeBtn} onClick={toggle}>
      <AiOutlineClose />
    </button>
  );

  return (
    <>
      <BootstrapModal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {title}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter className={styles.modalFooter}>
          <Row>
            <Col xs="6">
              <span>{`${footerMsgOne}`}</span>

              <span>{footerMsgTwo}</span>
            </Col>
            <Col xs="6">
              {firstBtnLabel && (
                <Button
                  type="light-yellow"
                  text={firstBtnLabel}
                  data-testid="btnCancelar"
                />
              )}
              <Button
                type="yellow"
                text={secondBtnLabel}
                data-testid="btnEnviar"
              />
            </Col>
          </Row>
        </ModalFooter>
      </BootstrapModal>
    </>
  );
};

export default Modal;
