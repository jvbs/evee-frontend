
import { useContext, useEffect, useRef, useState } from "react";
import { MenuItem } from "@material-ui/core";
import { Col, FormGroup, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { FaCamera } from "react-icons/fa";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { AuthContext } from "../../../../../contexts/AuthContext";
import { api } from "../../../../../services/api";
import { createCollaboratorValidationSchema } from "../../../../../helpers/UnformSchemas";

import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import Button from "../../../../../components/Button";

import history from "../../../../../utils/history";
import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";

const CreateFormTrilha = () => {
  const formRef = useRef(null);
  const [cargo, setCargo] = useState("");
  const [cargos, setCargos] = useState([]);
  const [departamento, setDepartamento] = useState("");
  const [departamentos, setDepartamentos] = useState([]);
  const [tipo, setTipo] = useState("");
  const [status, setStatus] = useState("");

  const { loggedUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchFormFields = async () => {
      const { data: cargos } = await api.get("/cargo");
      const { data: departamentos } = await api.get("/departamento");

      setCargos(cargos);
      setDepartamentos(departamentos);
    };

    fetchFormFields();
  }, []);
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
      data.status = status;
      data.empresa_id = loggedUser?.empresa_id;

      console.log(data);

      const schema = createCollaboratorValidationSchema;

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
      <Col lg="12">
        <section className={styles.formSection}>
          <div className={styles.header}>
            <div className={styles.circuloModal}></div>
            <p>Informações Gerais</p>
          </div>
          <Row>
            <Col lg="6">
            <FormGroup>
              <Select
                label="Trilha*"
                name="trilha"
                testid="fieldTrilhaNivel"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <MenuItem value={"1"}>Trilha - Básico I</MenuItem>
                <MenuItem value={"2"}>Trilha - Básico II</MenuItem>
                <MenuItem value={"3"}>Trilha - Intermediario I</MenuItem>
                <MenuItem value={"4"}>Trilha - Intermediario II</MenuItem>
                <MenuItem value={"5"}>Trilha - Avancado I</MenuItem>
                <MenuItem value={"6"}>Trilha - Avancado II</MenuItem>
              </Select>
            </FormGroup>
            </Col>
            <Col lg="6">
            <FormGroup>
              <Select
                label="Programa*"
                name="programa"
                testid="fieldNomePrograma"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <MenuItem value={"1"}>Aprendizagem</MenuItem>
                <MenuItem value={"2"}>Estágio</MenuItem>
              </Select>
            </FormGroup>
            </Col>
            
          </Row>

          <Row>
              <Col lg="6">
                <FormGroup>
                  <Select
                    name="departamento_id"
                    label="Departamento*"
                    testid="fieldDepartamento"
                    onChange={(e) => setDepartamento(e.target.value)}
                    value={departamento}
                  >
                    {departamentos.map((dpto) => (
                      <MenuItem key={dpto.id} value={dpto.id}>
                        {dpto.nome_departamento}
                      </MenuItem>
                    ))}
                  </Select>
                </FormGroup>
              </Col>
            </Row>
        </section>
      </Col>

    </Row>

    <Row>
      <Col lg="12">
        <section className={styles.formSection}>
          <div className={styles.header}>
            <div className={styles.circuloModal}></div>
            <p>Descrição da Trilha</p>
          </div>
          <Row>
            <Col lg="6">
                <FormGroup>
                  <Input
                    label="Nome*"
                    name="nome_trilha"
                    testid="fieldNomeTrilha"
                  />
                </FormGroup>
              </Col>
          </Row>

          <Row>
              <Col lg="12">
                <FormGroup>
                  <Input
                    label="Descricao*"
                    name="descricao"
                    testid="fieldDescricaoTrilha"
                  />
                </FormGroup>
              </Col>
           </Row>

           <Row>
            <Col lg="6">
            <FormGroup>
              <Select
                label="Prazo*"
                name="prazo"
                testid="fieldPrazoTrilha"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <MenuItem value={"1"}>30 dias</MenuItem>
                <MenuItem value={"2"}>1 - 3 meses</MenuItem>
                <MenuItem value={"3"}>3 - 6 meses</MenuItem>
                <MenuItem value={"4"}>6 - 12 meses</MenuItem>
              </Select>
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
      </Col>
    </Row>
  </Form>
  );
};

export default CreateFormTrilha;
