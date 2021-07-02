import { useRef } from "react";
import { MenuItem } from "@material-ui/core";
import { Col, FormGroup, Row } from "reactstrap";
import { FaCamera } from "react-icons/fa";
import { Form } from "@unform/web";
import * as Yup from "yup";

import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

import styles from "./styles.module.css";
import userPhoto from "../../../../assets/images/evee.png";
import Button from "../../../../components/Button";

const CreateForm = () => {
  const formRef = useRef(null);

  const resetErrors = () => {
    formRef.current.setErrors({});
  };

  // const resetForm = () => {
  //   formRef.current.setErrors({});
  //   formRef.current.reset();
  // };

  const handleSubmit = async (data) => {
    try {
      console.log(data);
      // const schema = Yup.object().shape({
      //   nome: Yup.string().required('O campo "Nome" é obrigatório.'),
      //   cpf: Yup.string().required('O campo "CPF" é obrigatório').length(11),
      //   email: Yup.string()
      //     .email("Digite um e-mail válido")
      //     .required('O campo "E-mail" é obrigatório.'),
      //   celular: Yup.string()
      //     .required('O campo "Celular" é obrigatório')
      //     .length(14),
      //   departamento: Yup.string().required(
      //     'O campo "Departamento" é obrigatório.'
      //   ),
      //   cargo: Yup.string().required('O campo "Cargo" é obrigatório.'),
      //   tipousuario: Yup.string().required(
      //     'O campo "Tipo de Usúario" é obrigatório.'
      //   ),
      //   senha: Yup.string().required('O campo "Departamento" é obrigatório.'),
      //   confirmarsenha: Yup.string().oneOf(
      //     [Yup.ref("senha"), null],
      //     "As senhas devem coincidir"
      //   ),
      //   status: Yup.string().required('O campo "Departamento" é obrigatório.'),
      // });
      // await schema.validate(data, { abortEarly: false });
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
    <Form ref={formRef} onSubmit={handleSubmit} onChange={resetErrors}>
      <Row>
        <Col lg="8">
          <section className={styles.formSection}>
            <div className={styles.header}>
              <div className={styles.circuloModal}></div>
              <p>Informações pessoais</p>
            </div>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <Input label="Nome*" name="nome" testid="fieldNome" />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <Input label="CPF*" name="cpf" testid="fieldCPF" />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <Input label="E-mail*" name="email" testid="fieldEmail" />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <Input
                    label="Celular*"
                    name="celular"
                    testid="fieldCelular"
                  />
                </FormGroup>
              </Col>
            </Row>
          </section>
        </Col>

        <Col lg="4">
          <div className={styles.userPhotoWrapper}>
            <img src={userPhoto} alt="userPhoto" className={styles.userFoto} />
            <button type="button" data-testid="btnEditarUsuario">
              <FaCamera
                fontSize="1.3vw"
                style={{ color: "var(--yellow-gold)", opacity: "80%" }}
              />
            </button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <section className={styles.formSection}>
            <div className={styles.header}>
              <div className={styles.circuloModal}></div>
              <p>Informações adicionais</p>
            </div>
            <Row>
              <Col lg="4">
                <FormGroup>
                  <Select
                    name="departamento"
                    label="Departamento*"
                    testid="fieldDepartamento"
                  ></Select>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Select
                    label="Cargo*"
                    name="cargo"
                    testid="fieldCargo"
                  ></Select>
                </FormGroup>
              </Col>
            </Row>

            <Col lg="4">
              <FormGroup>
                <Select
                  label="Tipo Usuário*"
                  name="tipousuario"
                  testid="fieldTipoUsuario"
                >
                  <MenuItem value={"Comum"}>Comum</MenuItem>
                  <MenuItem value={"Mentor"}>Mentor</MenuItem>
                  <MenuItem value={"Mentorado"}>Mentorado</MenuItem>
                </Select>
              </FormGroup>
            </Col>
          </section>

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
                    label="Senha*"
                    name="senha"
                    testid="fieldSenha"
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Input
                    type="password"
                    name="confirmarsenha"
                    label="Confirmar senha*"
                    testid="fieldConfirmarSenha"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Col lg="4">
              <FormGroup>
                <Select label="Status*" name="status" testid="fieldStatus">
                  <MenuItem value={"Ativo"}>Ativo</MenuItem>
                  <MenuItem value={"Inativo"}>Inativo</MenuItem>
                </Select>
              </FormGroup>
            </Col>
          </section>
          <section>
            <Row>
              <Col lg="12" className={styles.formButtons}>
                <Button
                  type="light-yellow"
                  text="Cancelar"
                  style={{ margin: "1vh", opacity: "80%" }}
                />
                <Button
                  text="Salvar"
                  onClick={handleSubmit}
                  style={{ margin: "1vh", opacity: "80%" }}
                />
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateForm;
