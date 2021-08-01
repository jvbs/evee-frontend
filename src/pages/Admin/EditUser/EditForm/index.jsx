import { useContext, useEffect, useRef, useState } from "react";
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

import history from "../../../../utils/history";
import { adminValidationSchema } from "../../../../helpers/UnformSchemas";
import userPhoto from "../../../../assets/images/avatar2.png";
import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.min.css";
import Loader from "../../../../components/Loader";

const EditForm = () => {
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
  const [img, setImg] = useState("");

  const [cargos, setCargos] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

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
  }, []);

  useEffect(() => {
    if (loggedUser) {
      setNome(loggedUser?.nome);
      setCpf(loggedUser?.cpf);
      setEmail(loggedUser?.email);
      setCelular(loggedUser?.celular);

      if (loggedUser?.userType !== "Admin") {
        setDepartamento(loggedUser?.departamento_id);
        setCargo(loggedUser?.cargo_id);
        setTipo(loggedUser?.userType);
        setStatus(loggedUser?.status);
      }
    }
  }, [loggedUser]);

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

  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };

  const handleImgUpload = async () => {
    const formData = new FormData();
    formData.append("id", loggedUser?.id);
    // formData.append("img", img);
    formData.append("img", img);

    try {
      const routePrefix =
        loggedUser?.userType === "Admin" ? "/usuario" : "/colaborador";
      const response = await api.post(
        `${routePrefix}/upload-profile-picture`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("🎉 Imagem atualizada com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("🎉 Ocorreu um erro ao enviar a imagem!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmit = async (data) => {
    try {
      delete data.cargo_id;
      delete data.cpf;
      delete data.departamento_id;
      delete data.status;
      delete data.tipo_usuario;
      delete data.img;

      data.id = loggedUser?.id;

      const schema = adminValidationSchema;

      await schema.validate(data, { abortEarly: false });

      resetErrors();

      try {
        const response = await api.put(
          loggedUser?.userType === "Admin" ? "/usuario" : "/colaborador",
          data
        );

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

          if (img !== "") {
            handleImgUpload();
          }

          setTimeout(() => {
            refreshPage();
          }, 3000);
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
    return <Loader />;
  }

  return (
    <>
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
                      data-testid="fieldNome"
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
                      data-testid="fieldCPF"
                      type="text"
                      inputProps={{ maxLength: 11 }}
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      disabled
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <Input
                      label="E-mail*"
                      name="email"
                      data-testid="fieldEmail"
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
                      data-testid="fieldCelular"
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
            <Row>
              <div className={styles.userPhotoWrapper}>
                <img
                  src={loggedUser?.foto ? loggedUser?.foto : userPhoto}
                  alt="userPhoto"
                  className={styles.userFoto}
                />
                <div className={styles.blocoUploadImg}>
                  <label for="file-upload" class="custom-file-upload">
                    <div
                      className={styles.uploadImg}
                      data-testid="btnUploadImg"
                    >
                      <FaCamera
                        fontSize="1.3vw"
                        style={{ color: "var(--yellow-gold)", opacity: "80%" }}
                      />
                      <input
                        name="img"
                        type="file"
                        data-testid="fieldCelular"
                        id="file-upload"
                        accept=".png,.jpeg,.jpg"
                        onChange={handleImg}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </Row>
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
                      data-testid="fieldDepartamento"
                      onChange={(e) => setDepartamento(e.target.value)}
                      value={departamento}
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
                <Col lg="4">
                  <FormGroup>
                    <Select
                      label="Cargo*"
                      name="cargo_id"
                      value={cargo}
                      onChange={(e) => setCargo(e.target.value)}
                      data-testid="fieldCargo"
                      disabled
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
                    data-testid="fieldtipo_usuario"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    disabled
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
                    data-testid="fieldStatus"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    disabled
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
    </>
  );
};

export default EditForm;
