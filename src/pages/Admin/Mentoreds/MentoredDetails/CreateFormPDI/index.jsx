import { useContext, useEffect, useRef, useState } from "react";
import { MenuItem } from "@material-ui/core";
import { Badge, Col, FormGroup, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { AuthContext } from "../../../../../contexts/AuthContext";
import { api } from "../../../../../services/api";
import { pdiValidationSchema } from "../../../../../helpers/UnformSchemas";
import history from "../../../../../utils/history";

import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import Button from "../../../../../components/Button";

import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";

const CreateFormTrilha = ({ mentored }) => {
  const formRef = useRef(null);
  const [tipoTrilha, setTipoTrilha] = useState("");
  const [tiposTrilhas, setTiposTrilhas] = useState([]);
  const [mentor, setMentor] = useState("");
  const [mentores, setMentores] = useState([]);
  const [competencia, setCompetencia] = useState("");
  const [tags, setTags] = useState([]);

  const [nome, setNome] = useState("");
  const [programa, setPrograma] = useState("");

  const { loggedUser } = useContext(AuthContext);

  useEffect(() => {
    if (mentored) {
      if (mentored.cargo?.nome_cargo === "Aprendiz") {
        setPrograma("Aprendizagem");
      } else {
        setPrograma("Estágio");
      }

      const fetchFormFields = async (dpto, programa, empresa) => {
        if (dpto && programa && empresa) {
          const { data: tipo_trilha } = await api.get(
            `/trilha/tipo-trilha-pdi?dpto=${dpto}&programa=${programa}&empresa=${empresa}`
          );
          const { data: mentores } = await api.get(
            `/trilha/mentores-trilha-pdi?dpto=${dpto}&empresa=${empresa}`
          );
          setTiposTrilhas(tipo_trilha);
          setMentores(mentores);
        }
      };
      fetchFormFields(
        mentored.departamento?.id,
        programa,
        mentored.empresa?.id
      );
    }
  }, [mentored]);

  const handleTrailSelect = (e) => {
    const id = e.target.value;
    setTipoTrilha(id);
    const obj = tiposTrilhas.filter((el) => {
      return el.id === id;
    });

    setNome(obj[0]["nome"]);
  };

  const addTag = () => {
    const newTag = {
      id: tags.length + 1,
      name: competencia,
    };

    setTags((tags) => [...tags, newTag]);
    setCompetencia("");
  };

  const removeTag = (id) => {
    const filteredTags = tags.filter((el) => {
      return el.id !== id;
    });

    setTags(filteredTags);
  };

  const resetErrors = () => {
    formRef.current.setErrors({});
  };

  const resetForm = () => {
    formRef.current.setErrors({});
    formRef.current.reset();

    setTipoTrilha("");
    setNome("");
    setMentor("");
    setTags([]);
  };

  const handleSubmit = async (data) => {
    try {
      data.trilha_id = Number(tipoTrilha);
      data.mentor_responsavel_id = Number(mentor);
      data.nome_programa = programa;
      data.mentorado_id = mentored.user?.id;

      const schema = pdiValidationSchema;

      await schema.validate(data, { abortEarly: false });

      if (tags.length > 0) {
        data.competencias_tags = JSON.stringify(tags);
      }

      resetErrors();

      try {
        const response = await api.post("/pdi/create", data);

        if (response.status === 201) {
          resetForm();
          toast.success("🎉 PDI cadastrado com sucesso!", {
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
                    name="nome_programa"
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
                    name="nome_trilha"
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
                  <Select
                    label="Mentor/Responsável*"
                    name="mentor_responsavel_id"
                    testid="fieldMentorTrilha"
                    value={mentor}
                    onChange={(e) => setMentor(e.target.value)}
                  >
                    {mentores.map((mentor) => (
                      <MenuItem key={mentor.id} value={mentor.id}>
                        {mentor.nome}
                      </MenuItem>
                    ))}
                  </Select>
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
                    label="Competências"
                    name="competencias_tags"
                    testid="fieldMentorTrilha"
                    value={competencia}
                    onChange={(e) => setCompetencia(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <Button
                    type="light-yellow"
                    text="Incluir"
                    onClick={() => addTag()}
                    style={{ marginTop: "3vh", opacity: "80%" }}
                    disabled={competencia.length === 0 ? true : false}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <div>
                {tags.map((tag) => {
                  return (
                    <Badge className={styles.tag}>
                      <div className={styles.text}>
                        {tag.name}{" "}
                        <span
                          className={styles.tagCloseBtn}
                          onClick={() => removeTag(tag.id)}
                        >
                          <FaTimes />
                        </span>
                      </div>
                    </Badge>
                  );
                })}
              </div>
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
