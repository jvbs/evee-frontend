import Modal from "../../../components/Modal";

const SolicitacaoDemoModal = ({
  modal,
  toggle,
  title,
  firstBtnLabel,
  secondBtnLabel,
  children,
}) => {
  return (
    <>
      <Modal
        modal={modal}
        toggle={toggle}
        title={title}
        firstBtnLabel={firstBtnLabel}
        secondBtnLabel={secondBtnLabel}
      >
        {children}
      </Modal>
    </>
  );
};

export default SolicitacaoDemoModal;
