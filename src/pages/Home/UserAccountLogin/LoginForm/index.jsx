import { useContext, useRef } from "react";
import { Col, Container, FormGroup, Row } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import { AuthContext } from "../../../../contexts/AuthContext";

import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";

const LoginForm = () => {
  const formRef = useRef(null);
  const { handleLogin } = useContext(AuthContext);

  const resetErrors = () => {
    formRef.current.setErrors({});
  };

  // const resetForm = () => {
  //   formRef.current.setErrors({});
  //   formRef.current.reset();
  // };

  const handleSubmit = async (data) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required('O campo "E-mail" é obrigatório.'),
        senha: Yup.string().required('O campo "Senha" é obrigatório.'),
      });

      await schema.validate(data, { abortEarly: false });

      resetErrors();

      handleLogin(data.email, data.senha);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  };

  return (
    <Container fluid className={styles.container}>
      <ToastContainer />
      <Col lg="8" xs="12" className={styles.formsColumn}>
        <h1>Acesse sua conta</h1>
        <Form ref={formRef} onSubmit={handleSubmit} onChange={resetErrors}>
          <Row>
            <p
              style={{
                fontSize: "14px",
                color: "var(--gray)",
                marginTop: "1%",
                marginBottom: "8%",
              }}
            >
              Se você já possui cadastro, utilize seu e-mail e senha para entrar
            </p>
            <FormGroup>
              <Input label="E-mail*" name="email" data-testid="fieldEmail" />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Input
                type="password"
                label="Senha*"
                name="senha"
                data-testid="fieldSenha"
              />
            </FormGroup>
          </Row>
          <Row>
            <p
              style={{
                fontSize: "12px",
                color: "var(--gray)",
                marginTop: "4vh",
                marginBottom: "4vh",
              }}
            >
              Os campos identificados com asteriscos (*) são de preenchimento
              obrigatório.
            </p>
          </Row>
          <Row>
            <Button
              type="submit"
              onClick={handleSubmit}
              text="Entrar"
              style={{ width: "100%" }}
              data-testid="loginBtnEntrar"
            />
          </Row>
        </Form>
        <Row>
          <p
            style={{ fontSize: "14px", color: "var(--gray)", marginTop: "3vh" }}
          >
            Você não possui cadastro?
            <Link to="/user/account/create">
              <span style={{ color: "var(--yellow-gold)" }}>
                {" "}
                Crie sua conta
              </span>
            </Link>
          </p>
        </Row>
      </Col>
    </Container>
  );
};

export default LoginForm;
