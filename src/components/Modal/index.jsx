import {
  Modal as BootstrapModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import Button from "../Button";

import styles from "./styles.module.css";

const Modal = (props) => {
  const history = useHistory();

  const closeBtn = (
    <button className={styles.closeBtn}>
      <AiOutlineClose />
    </button>
  );

  return (
    <>
      <BootstrapModal
        isOpen={props.modal?.isModalOpen}
        toggle={() => props?.closeModal()}
        style={{ borderRadius: "33px", border: "0px" }}
      >
        <ModalHeader
          toggle={() => props?.closeModal()}
          close={closeBtn}
          style={{
            padding: " 1.5em 0.5em",
            border: "0px",
            borderRadius: "33px",
          }}
        >
          <div className={styles.modalHeader}>
            <div
              className={styles.circuloModal}
              style={{ marginLeft: "0.5em" }}
            ></div>
            <span style={{ paddingLeft: "1em", display: "block" }}>
              {props.modal?.title}
            </span>
          </div>
        </ModalHeader>
        <ModalBody style={{ padding: " 0em 3em" }}>
          {props.modal?.type}
        </ModalBody>
        <ModalFooter
          style={{ padding: " 1em 3em", justifyContent: "flex-start" }}
        >
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div className={styles.modalFooter}>
              <span style={{ fontSize: "14px" }}>
                <b>{props.modal?.footerMsgOne}</b>
              </span>

              <a
                href="#"
                // onClick={handler}
                style={{
                  textDecoration: "none",
                  color: "var(--yellow-gold)",
                  fontSize: "14px",
                }}
              >
                <b>{props.modal?.footerMsgTwo}</b>
              </a>

              {props.modal?.firstBtnLabel && (
                <Button
                  type="light-yellow"
                  text={props.modal?.firstBtnLabel}
                  data-testid="btnCancelar"
                />
              )}
            </div>
            <div className={styles.btnEndModal}>
              <Button
                type="yellow"
                text={props.modal?.secondBtnLabel}
                data-testid="btnEnviar"
                onClick={() => history.push("/admin")}
                style={{ padding: "2% 40%", color: "black", fontSize: "14px" }}
              />
            </div>
          </div>
        </ModalFooter>
      </BootstrapModal>
    </>
  );
};

export default Modal;
