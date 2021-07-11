import { useContext, useEffect, useRef, useState } from "react";
import { MenuItem } from "@material-ui/core";
import classnames from "classnames";
import {
  Col,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { FaCamera } from "react-icons/fa";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { AuthContext } from "../../../../contexts/AuthContext";
import { api } from "../../../../services/api";

import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Button from "../../../../components/Button";

import history from "../../../../utils/history";
import { collaboratorValidationSchema } from "../../../../helpers/UnformSchemas";
import userPhoto from "../../../../assets/images/evee.png";
import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";

const EditForm = ({ collaborator }) => {
  const { loggedUser } = useContext(AuthContext);

  const formRef = useRef(null);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [cpf, setCpf] = useState("");
  const [cargo, setCargo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [tipo, setTipo] = useState("");
  const [status, setStatus] = useState("");

  const [cargos, setCargos] = useState("");
  const [departamentos, setDepartamentos] = useState("");

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const fetchFormFields = async () => {
      const { data: cargos } = await api.get("/cargo");
      const { data: departamentos } = await api.get("/departamento");

      setCargos(cargos);
      setDepartamentos(departamentos);
    };

    fetchFormFields();
    if (collaborator) {
      refreshFormFields(collaborator);
    }
  }, []);

  useEffect(() => {
    if (collaborator) {
      refreshFormFields(collaborator);
    }
  }, [collaborator]);

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

  const refreshFormFields = (collaborator) => {
    console.log(collaborator);
    setNome(collaborator.user?.nome);
    setCpf(collaborator.user?.cpf);
    setEmail(collaborator.user?.email);
    setCelular(collaborator.user?.celular);
    setDepartamento(collaborator.departamento?.id);
    setCargo(collaborator.cargo?.id);
    setTipo(collaborator.user?.tipo_usuario);
    setStatus(collaborator.user?.status);
  };

  const handleSubmit = async (data) => {
    try {
      data.cargo_id = Number(cargo);
      data.departamento_id = Number(departamento);
      data.tipo_usuario = tipo;
      data.status = status;

      const schema = collaboratorValidationSchema;

      await schema.validate(data, { abortEarly: false });

      data.id = collaborator.user?.id;

      resetErrors();

      try {
        const response = await api.put("/colaborador/admin", data);

        if (response.status === 200) {
          toast.success("🎉 Usuário atualizado com sucesso!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            refreshPage();
          }, 2000);
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

  if (!collaborator || !loggedUser || !departamentos || !cargos) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Dados Cadastrais
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Alterar senha
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
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
                        <Input
                          label="Nome*"
                          name="nome"
                          testid="fieldNome"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                        />
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
                          value={cpf}
                          onChange={(e) => setCpf(e.target.value)}
                          // disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Input
                          label="E-mail*"
                          name="email"
                          testid="fieldEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Input
                          label="Celular*"
                          name="celular"
                          testid="fieldCelular"
                          inputProps={{ maxLength: 14 }}
                          value={celular}
                          onChange={(e) => setCelular(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </section>
              </Col>

              <Col lg="4">
                <div className={styles.userPhotoWrapper}>
                  <img
                    src={userPhoto}
                    alt="userPhoto"
                    className={styles.userFoto}
                  />
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
                          // disabled
                        >
                          {departamentos.map((dpto) => (
                            <MenuItem key={dpto.id} value={dpto.id}>
                              {dpto.nome_departamento}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <Select
                          label="Cargo*"
                          name="cargo_id"
                          value={cargo}
                          onChange={(e) => setCargo(e.target.value)}
                          testid="fieldCargo"
                          // disabled
                        >
                          {cargos.map((cargo) => (
                            <MenuItem key={cargo.id} value={cargo.id}>
                              {cargo.nome_cargo}
                            </MenuItem>
                          ))}
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
                        // disabled
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
                  <Col lg="4">
                    <FormGroup>
                      <Select
                        label="Status*"
                        name="status"
                        testid="fieldStatus"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        // disabled
                      >
                        <MenuItem value={0}>Inativo</MenuItem>
                        <MenuItem value={1}>Ativo</MenuItem>
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
              </Col>
            </Row>
          </Form>
        </TabPane>
        {/* <TabPane tabId="2">
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
        </TabPane> */}
      </TabContent>
    </>
  );
};

export default EditForm;