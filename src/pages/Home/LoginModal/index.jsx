import { Container, FormGroup, Row } from "reactstrap";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";

const LoginModal = ({
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
          <form>
            <Row>
              <p style={{ fontSize: "12px", color: "var(--gray)" , marginLeft: "1%"}}>
                <b>Se você já possui cadastro, utilize os mesmos dados para entrar</b>
              </p>
              <FormGroup>
                <Input label="E-mail*" testid="fieldEmail" />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Input label="Senha*" testid="fieldSenha" />
              </FormGroup>
            </Row>
            <Row>
              <p style={{ fontSize: "12px", color: "var(--gray)" }}>
                Os campos identificados com asteriscos (*) são de preenchimento
                obrigatório.
              </p>
            </Row>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default LoginModal;
