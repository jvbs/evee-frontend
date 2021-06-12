import { Container, FormGroup } from "reactstrap";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";

const SolicitacaoDemoModal = ({
  modal,
  toggle,
  title,
  firstBtnLabel,
  secondBtnLabel,
  footerMsgOne,
  footerMsgTwo,
}) => {
  return (
    <>
      <Modal
        modal={modal}
        toggle={toggle}
        title={title}
        firstBtnLabel={firstBtnLabel}
        secondBtnLabel={secondBtnLabel}
        footerMsgOne={footerMsgOne}
        footerMsgTwo={footerMsgTwo}
      >
        <Container fluid>
          <p
            style={{ fontSize: "12px", color: "var(--gray)", marginLeft: "1%" }}
          >
            <b>
              Um RH cada vez mais ágil, estratégico, orientado à dados e
              centrando nas pessoas.
            </b>
          </p>
          <form action="">
            <FormGroup>
              <Input label="Empresa*" testid="fieldEmpresa" />
            </FormGroup>{" "}
            <FormGroup>
              <Input label="CNPJ*" testid="fieldCNPJ" />
            </FormGroup>{" "}
            <FormGroup>
              <Input label="Nome*" testid="fieldNomeSolicitante" />
            </FormGroup>
            <FormGroup>
              <Input label="Cargo*" testid="fieldCargoSolicitante" />
            </FormGroup>
            <FormGroup>
              <Input label="E-mail*" testid="fieldEmailSolicitante" />
            </FormGroup>
            <FormGroup>
              <Input label="Telefone*" testid="fieldTelefoneSolicitante" />
            </FormGroup>
            <FormGroup>
              <Input label="Senha*" testid="fieldSenhaSolicitante" />
            </FormGroup>
          </form>
          <p style={{ fontSize: "12px", color: "var(--gray)" }}>
            Os campos identificados com asteriscos (*) são de preenchimento
            obrigatório.
          </p>
        </Container>
      </Modal>
    </>
  );
};

export default SolicitacaoDemoModal;
