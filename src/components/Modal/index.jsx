import {
  Modal as BootstrapModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
      <BootstrapModal
        isOpen={modal}
        toggle={toggle}
        style={{ borderRadius: "33px", border: "0px" }}
      >
        <ModalHeader
          toggle={toggle}
          close={closeBtn}
          style={{ padding: " 1.5em 0.5em", border: "0px" }}
        >
          <div className={styles.modalHeader}>
            <div
              className={styles.circuloModal}
              style={{ marginLeft: "0.5em" }}
            ></div>
            <span style={{ paddingLeft: "1em", display: "block" }}>
              {title}
            </span>
          </div>
        </ModalHeader>
        <ModalBody style={{ padding: " 0em 3em" }}>{children}</ModalBody>
        <ModalFooter
          style={{ padding: " 1em 3em", justifyContent: "flex-start" }}
        >
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div className={styles.modalFooter}>
              <span>{footerMsgOne}</span>
              <span>{footerMsgTwo}</span>

              {firstBtnLabel && (
                <Button
                  type="light-yellow"
                  text={firstBtnLabel}
                  data-testid="btnCancelar"
                />
              )}
            </div>
            <Button
              type="yellow"
              text={secondBtnLabel}
              data-testid="btnEnviar"
            />
          </div>
        </ModalFooter>
      </BootstrapModal>
    </>
  );
};

export default Modal;
