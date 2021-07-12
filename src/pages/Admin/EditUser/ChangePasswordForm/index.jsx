import { useContext, useEffect, useRef, useState } from "react";
import { Col, FormGroup, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { AuthContext } from "../../../../contexts/AuthContext";
import { api } from "../../../../services/api";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import history from "../../../../utils/history";
import { passwordsValidationSchema } from "../../../../helpers/UnformSchemas";
import styles from "../EditForm/styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";

const ChangePassword = () => {
  const { loggedUser } = useContext(AuthContext);

  const formRef = useRef(null);

  const refreshPage = () => {
    window.location.reload();
  };

  const resetErrors = () => {
    formRef.current.setErrors({});
  };

  const resetForm = () => {
    formRef.current.setErrors({});
    formRef.current.reset();
  };

  const handleSubmit = async (data) => {
    try {
      const schema = passwordsValidationSchema;

      await schema.validate(data, { abortEarly: false });

      data.id = loggedUser?.id;

      resetErrors();

      try {
        const response = await api.put(
          loggedUser?.userType === "Admin"
            ? "/usuario/update-password"
            : "/colaborador/update-password",
          data
        );

        if (response.status === 200) {
          toast.success("🎉 Senha atualizada com sucesso!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // setTimeout(() => {
          //   refreshPage();
          // }, 2000);
        }
      } catch (err) {
        console.log(err.response);
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

  if (!loggedUser) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit} onChange={resetErrors}>
        <ToastContainer />

        <section className={styles.formSection}>
          <div className={styles.header}>
            <div className={styles.circuloModal}></div>
            <p>Informações de acesso</p>
          </div>
          <Row>
            <Col lg="4">
              <FormGroup>
                <Input
                  type="password"
                  label="Nova senha*"
                  name="senha"
                  testid="fieldSenha"
                />
              </FormGroup>
            </Col>
            <Col lg="4">
              <FormGroup>
                <Input
                  type="password"
                  name="confirmar_senha"
                  label="Confirmar senha*"
                  testid="fieldConfirmarSenha"
                />
              </FormGroup>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col lg="12" className={styles.formButtons}>
              <Button
                type="light-yellow"
                text="Cancelar"
                style={{ margin: "1vh", opacity: "80%" }}
                onClick={() => history.push("/admin")}
              />
              <Button
                text="Salvar"
                onClick={handleSubmit}
                style={{ margin: "1vh", opacity: "80%" }}
              />
            </Col>
          </Row>
        </section>
      </Form>
    </>
  );
};

export default ChangePassword;
