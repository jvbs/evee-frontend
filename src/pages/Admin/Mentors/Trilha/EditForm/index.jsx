import { useContext, useEffect, useRef, useState } from "react";
import { MenuItem } from "@material-ui/core";
import { Col, FormGroup, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { AuthContext } from "../../../../../contexts/AuthContext";
import { api } from "../../../../../services/api";
import { trailValidationSchema } from "../../../../../helpers/UnformSchemas";

import Input from "../../../../../components/Input";
import TextArea from "../../../../../components/TextArea";
import Select from "../../../../../components/Select";
import Button from "../../../../../components/Button";

import history from "../../../../../utils/history";
import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";
import { useParams } from "react-router-dom";

const EditFormTrilha = () => {
  const formRef = useRef(null);

  const { id } = useParams();
  const { loggedUser } = useContext(AuthContext);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const [tipoTrilha, setTipoTrilha] = useState("");
  const [tiposTrilhas, setTiposTrilhas] = useState([]);

  const [departamento, setDepartamento] = useState("");
  const [departamentos, setDepartamentos] = useState([]);

  const [prazo, setPrazo] = useState("");
  const [prazos, setPrazos] = useState([]);

  const [programa, setPrograma] = useState("");

  useEffect(() => {
    const fetchFormFields = async () => {
      const { data: departamentos } = await api.get("/departamento");
      const { data: tipo_trilha } = await api.get("/tipo-trilha");
      const { data: prazo } = await api.get("/prazo");
      const { data: trailInfo } = await api.get(`/trilha/${id}`);

      setDepartamentos(departamentos);

      setTiposTrilhas(tipo_trilha);
      setPrazos(prazo);

      setPrograma(trailInfo.programa);
      setTipoTrilha(trailInfo.trilha_id);

      setPrazo(trailInfo.prazo_id);
      setNome(trailInfo.nome);
      setDescricao(trailInfo.descricao);
      setDepartamento(trailInfo.departamento_id);
    };

    fetchFormFields();
  }, []);

  // useEffect(() => {
  //   setDepartamento(loggedUser?.departamento_id);
  // }, [loggedUser]);

  const resetErrors = () => {
    formRef.current.setErrors({});
  };

  const resetForm = () => {
    formRef.current.setErrors({});
    formRef.current.reset();

    // setDepartamento("");
    setTipoTrilha("");
    setPrazo("");
  };

  const handleSubmit = async (data) => {
    try {
      data.trilha_id = Number(tipoTrilha);
      data.departamento_id = Number(departamento);
      data.prazo_id = Number(prazo);
      data.programa = String(programa);
      data.empresa_id = loggedUser?.empresa_id;

      const schema = trailValidationSchema;

      await schema.validate(data, { abortEarly: false });

      resetErrors();

      try {
        const response = await api.put(`/trilha/edit/${id}`, data);

        if (response.status === 200) {
          // resetForm();
          toast.success("🎉 Trilha cadastrada com sucesso!", {
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

  if (!loggedUser) {
    return <h1>Loading...</h1>;
  }

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
                    name="trilha_id"
                    data-testid="fieldTrilhaNivel"
                    value={tipoTrilha}
                    onChange={(e) => setTipoTrilha(e.target.value)}
                  >
                    {tiposTrilhas.map((tipoTrilha) => (
                      <MenuItem key={tipoTrilha.id} value={tipoTrilha.id}>
                        {tipoTrilha.nome_trilha}
                      </MenuItem>
                    ))}
                  </Select>
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <Select
                    label="Programa*"
                    name="programa"
                    data-testid="fieldNomePrograma"
                    value={programa}
                    onChange={(e) => setPrograma(e.target.value)}
                    disabled
                  >
                    <MenuItem value="Aprendizagem">Aprendizagem</MenuItem>
                    <MenuItem value="Estágio">Estágio</MenuItem>
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
                    data-testid="fieldDepartamento"
                    value={departamento}
                    onChange={(e) => setDepartamento(e.target.value)}
                    disabled
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
                    name="nome"
                    data-testid="fieldNomeTrilha"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <FormGroup>
                  <TextArea
                    label="Descrição*"
                    name="descricao"
                    data-testid="fieldDescricaoTrilha"
                    rows={4}
                    inputProps={{ maxLength: 255 }}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col lg="6">
                <FormGroup>
                  <Select
                    label="Prazo*"
                    name="prazo_id"
                    data-testid="fieldPrazoTrilha"
                    value={prazo}
                    onChange={(e) => setPrazo(e.target.value)}
                  >
                    {prazos.map((prazo) => (
                      <MenuItem key={prazo.id} value={prazo.id}>
                        {prazo.nome_prazo}
                      </MenuItem>
                    ))}
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
                  onClick={() => history.push("/admin/mentors/trilha")}
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

export default EditFormTrilha;
