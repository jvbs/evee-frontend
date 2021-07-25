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

const CreateFormTrilha = ({ mentored }) => {
  const formRef = useRef(null);
  const [tipoTrilha, setTipoTrilha] = useState("");
  const [tiposTrilhas, setTiposTrilhas] = useState([]);

  const [nome, setNome] = useState("");
  const [programa, setPrograma] = useState("");

  const { loggedUser } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchFormFields = async () => {
  //     const { data: departamentos } = await api.get("/departamento");
  //     const { data: prazo } = await api.get("/prazo");

  //     setDepartamentos(departamentos);

  //     setPrazos(prazo);
  //   };

  //   fetchFormFields();
  // }, []);

  useEffect(() => {
    if (mentored) {
      if (mentored.cargo?.nome_cargo === "Aprendiz") {
        setPrograma("Aprendizagem");
      } else {
        setPrograma("Estágio");
      }

      const fetchFormFields = async (dpto, programa) => {
        if (dpto && programa) {
          const { data: tipo_trilha } = await api.get(
            `/trilha/tipo-trilha-pdi?dpto=${dpto}&programa=${programa}`
          );
          setTiposTrilhas(tipo_trilha);
          console.log(tipo_trilha);
        }
      };
      fetchFormFields(mentored.departamento?.id, programa);
    }
  }, [mentored]);

  // useEffect(() => {
  //   setDepartamento(loggedUser?.departamento_id);
  // }, [loggedUser]);

  const handleTrailSelect = (e) => {
    const id = e.target.value;
    setTipoTrilha(id);
    const obj = tiposTrilhas.filter((el) => {
      return el.id === id;
    });

    setNome(obj[0]["nome"]);
  };

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
        console.log("tentando enviar.");
        const response = await api.post("/trilha/create", data);

        if (response.status === 201) {
          resetForm();
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
              <p>Qual trilha você deseja incluir ao mentorado?</p>
            </div>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <Select
                    label="Trilha*"
                    name="trilha_id"
                    testid="fieldTrilhaNivel"
                    value={tipoTrilha}
                    onChange={(e) => handleTrailSelect(e)}
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
                    testid="fieldNomePrograma"
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
                  <Input
                    label="Nome*"
                    name="nome"
                    testid="fieldNomeTrilha"
                    value={nome}
                    disabled
                  />
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
              <p>
                Quem será o Mentor responsável pelo acompanhamento do Mentorado
                na Trilha?
              </p>
            </div>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <Input
                    label="Mentor/Responsavel*"
                    name="mentor"
                    testid="fieldMentorTrilha"
                  />
                </FormGroup>
              </Col>
            </Row>
          </section>

          <section className={styles.formSection}>
            <div className={styles.header}>
              <div className={styles.circuloModal}></div>
              <p>Quais competências o mentorado deverá desenvolver?</p>
            </div>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <Input
                    label="Competencia"
                    name="mentor"
                    testid="fieldMentorTrilha"
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

export default CreateFormTrilha;
