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
        <ModalFooter>
          <span style={{ float: "" }}>Ja possui cadastro?</span>

          <span>Acesse sua conta</span>
          {firstBtnLabel && <Button type="light-yellow" text={firstBtnLabel} />}
          <Button type="yellow" text={secondBtnLabel} />
        </ModalFooter>
      </BootstrapModal>
    </>
  );
};

export default Modal;
