import { useContext, useRef, useState } from "react";
import { MenuItem } from "@material-ui/core";
import { Col, FormGroup, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { FaCamera } from "react-icons/fa";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { AuthContext } from "../../../../contexts/AuthContext";
import { api } from "../../../../services/api";

import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Button from "../../../../components/Button";

import userPhoto from "../../../../assets/images/evee.png";
import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";

const CreateForm = () => {
  const formRef = useRef(null);
  const [cargo, setCargo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [tipo, setTipo] = useState("");
  const [status, setStatus] = useState("");

  const { loggedUser } = useContext(AuthContext);
  console.log(loggedUser);

  const resetErrors = () => {
    formRef.current.setErrors({});
  };

  const resetForm = () => {
    formRef.current.setErrors({});
    formRef.current.reset();

    setCargo("");
    setDepartamento("");
    setStatus("");
    setTipo("");
  };

  const handleSubmit = async (data) => {
    try {
      data.cargo_id = Number(cargo);
      data.departamento_id = Number(departamento);
      data.tipo_usuario = tipo;
      data.status = Number(status);
      data.empresa_id = Number(loggedUser.empresa_id);

      const schema = Yup.object().shape({
        nome: Yup.string().required('O campo "Nome" é obrigatório.'),
        cpf: Yup.string().required('O campo "CPF" é obrigatório').length(11),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required('O campo "E-mail" é obrigatório.'),
        celular: Yup.string()
          .required('O campo "Celular" é obrigatório')
          .length(14),
        departamento_id: Yup.string().required(
          'O campo "Departamento" é obrigatório.'
        ),
        cargo_id: Yup.number().required('O campo "Cargo" é obrigatório.'),
        tipo_usuario: Yup.string().required(
          'O campo "Tipo de Usuário" é obrigatório.'
        ),
        senha: Yup.string().required('O campo "Senha" é obrigatório.'),
        confirmar_senha: Yup.string().oneOf(
          [Yup.ref("senha"), null],
          "As senhas devem coincidir"
        ),
        status: Yup.number().required('O campo "Status" é obrigatório.'),
      });

      await schema.validate(data, { abortEarly: false });

      resetErrors();

      try {
        const response = await api.post("/colaborador", data);

        if (response.status === 201) {
          resetForm();
          toast.success("🎉 Colaborador cadastrado com sucesso!", {
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

  return (
    <Form ref={formRef} onSubmit={handleSubmit} onChange={resetErrors}>
      <ToastContainer />
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
                  <Input
                    label="CPF*"
                    name="cpf"
                    testid="fieldCPF"
                    type="text"
                    inputProps={{ maxLength: 11 }}
                  />
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
                    inputProps={{ maxLength: 14 }}
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
                    name="departamento_id"
                    label="Departamento*"
                    testid="fieldDepartamento"
                    onChange={(e) => setDepartamento(e.target.value)}
                    value={departamento}
                  >
                    <MenuItem value={5}>Teste</MenuItem>
                  </Select>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Select
                    label="Cargo*"
                    name="cargo_id"
                    value={cargo}
                    testid="fieldCargo"
                    onChange={(e) => setCargo(e.target.value)}
                  >
                    <MenuItem value={28}>Administrador</MenuItem>
                  </Select>
                </FormGroup>
              </Col>
            </Row>

            <Col lg="4">
              <FormGroup>
                <Select
                  label="Tipo Usuário*"
                  name="tipo_usuario"
                  testid="fieldtipo_usuario"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
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
                    name="confirmar_senha"
                    label="Confirmar senha*"
                    testid="fieldConfirmarSenha"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Col lg="4">
              <FormGroup>
                <Select
                  label="Status*"
                  name="status"
                  testid="fieldStatus"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value={1}>Ativo</MenuItem>
                  <MenuItem value={0}>Inativo</MenuItem>
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
