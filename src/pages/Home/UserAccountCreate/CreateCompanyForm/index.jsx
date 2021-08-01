import { useContext, useRef } from "react";
import { Col, Container, FormGroup, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { AuthContext } from "../../../../contexts/AuthContext";
import { api } from "../../../../services/api";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";

const CreateCompanyForm = () => {
  const formRef = useRef(null);

  const { handleLogin } = useContext(AuthContext);

  const resetErrors = () => {
    formRef.current.setErrors({});
  };

  const resetForm = () => {
    formRef.current.setErrors({});
    formRef.current.reset();
  };

  const handleSubmit = async (data) => {
    try {
      const schema = Yup.object().shape({
        cnpj: Yup.string().required('O campo "CNPJ" é obrigatório.'),
        empresa: Yup.string().required('O campo "Empresa" é obrigatório.'),
        nome: Yup.string().required('O campo "Nome" é obrigatório.'),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required('O campo "E-mail" é obrigatório.'),
        celular: Yup.string().required('O campo "Celular" é obrigatório.'),
        senha: Yup.string().required('O campo "Senha" é obrigatório.'),
      });

      await schema.validate(data, { abortEarly: false });

      resetErrors();

      try {
        const response = await api.post("/usuario", data);
        if (response.status === 201) {
          toast.success("🎉 Demonstração solicitada com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }

        resetForm();
        handleLogin(data.email, data.senha);
      } catch (err) {
        console.log(err.response);
        if (!err) {
          console.log("connection refused");
        }
        let message = err.response.data.error;
        if (message === "Bad Request") {
          message =
            "Ocorreu um erro interno, verifique seus dados e tente novamente.";
        }
        toast.error(`😭 ${message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
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
        <h1>Solicitar demonstração</h1>
        <p
          style={{
            fontSize: "14px",
            color: "var(--gray)",
            marginTop: "1%",
            marginBottom: "4%",
          }}
        >
          Tenha um RH cada vez mais ágil, estratégico, orientado à dados e
          centrando nas pessoas.
        </p>
        <Form
          ref={formRef}
          onChange={() => resetErrors()}
          onSubmit={handleSubmit}
        >
          <div className={styles.header}>
            <div className={styles.circuloModal}></div>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray)",
                marginTop: "3vh",
              }}
            >
              Dados da Empresa
            </p>
          </div>
          <Row>
            <Col lg="6">
              <FormGroup>
                <Input
                  label="Empresa*"
                  name="empresa"
                  data-testid="fieldEmpresa"
                />
              </FormGroup>{" "}
            </Col>
            <Col lg="6">
              <FormGroup>
                <Input
                  label="CNPJ*"
                  name="cnpj"
                  data-testid="fieldCNPJ"
                  inputProps={{ maxLength: 14 }}
                />
              </FormGroup>{" "}
            </Col>
          </Row>
          <div className={styles.header}>
            <div className={styles.circuloModal}></div>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray)",
                marginTop: "3vh",
              }}
            >
              Dados do Solicitante
            </p>
          </div>
          <Row>
            <Col lg="6">
              <FormGroup>
                <Input
                  label="Nome*"
                  name="nome"
                  data-testid="fieldNomeSolicitante"
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <Input
                  label="E-mail*"
                  name="email"
                  data-testid="fieldEmailSolicitante"
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <Input
                  label="Celular*"
                  name="celular"
                  data-testid="fieldCelularSolicitante"
                  inputProps={{ maxLength: 14 }}
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <Input
                  type="password"
                  label="Senha*"
                  name="senha"
                  data-testid="fieldSenhaSolicitante"
                />
              </FormGroup>
            </Col>
          </Row>
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
          <Row>
            <Button type="submit" text="Finalizar" onClick={handleSubmit} />
          </Row>
        </Form>
        <Row>
          <p
            style={{ fontSize: "14px", color: "var(--gray)", marginTop: "2vh" }}
          >
            Já possui cadastro?
            <Link to="/user/account/login">
              <span
                style={{ color: "var(--yellow-gold)", textDecoration: "none" }}
              >
                {" "}
                Acesse sua conta
              </span>
            </Link>
          </p>
        </Row>
      </Col>
    </Container>
  );
};

export default CreateCompanyForm;
