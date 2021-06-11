import { Col, Container, Form, FormGroup, Row } from "reactstrap";
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
              <p>
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
