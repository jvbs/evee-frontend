import { Col, FormGroup, Row } from "reactstrap";
import { FaCamera } from "react-icons/fa";

import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

import styles from "./styles.module.css";
import userPhoto from "../../../../assets/images/evee.png";
import Button from "../../../../components/Button";
import { MenuItem } from "@material-ui/core";

const CreateForm = () => {
  return (
    <form>
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
              <Input label="Nome*" testid="fieldNome" />
            </FormGroup> 
            </Col>
            <Col lg="6">
            <FormGroup>
              <Input label="CPF*" testid="fieldCPF" />
            </FormGroup>
           </Col>
           <Col lg="6">
            <FormGroup>
              <Input label="E-mail*" testid="fieldEmail" />
            </FormGroup>
            </Col>
            <Col lg="6">
            <FormGroup>
              <Input label="Celular*" testid="fieldCelular" />
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
              <Select label="Departamento*" testid="fieldDepartamento"></Select>
            </FormGroup>
            </Col>
            <Col lg="4">
            <FormGroup>
              <Select label="Cargo*" testid="fieldCargo"></Select>
            </FormGroup>
            </Col>
            </Row>

            <Col lg="4">
            <FormGroup>
              <Select label="Tipo Usuário*" testid="fieldTipoUsuario">
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
              <Input type="password" label="Senha*" testid="fieldSenha" />
            </FormGroup>
            </Col>
            <Col lg="4">
            <FormGroup>
              <Input  type="password" label="Confirmar senha*" testid="fieldConfirmarSenha" />
            </FormGroup>
            </Col>
            </Row> 
            <Col lg="4">
            <FormGroup>
              <Select label="Status*" testid="fieldStatus">
                <MenuItem value={"Ativo"}>Ativo</MenuItem>
                <MenuItem value={"Inativo"}>Inativo</MenuItem>
              </Select>
            </FormGroup>
            </Col>
          </section>
          <section >
          <Row>
            <Col lg="12" className={styles.formButtons}>
            <Button type="light-yellow" text="Cancelar" style={{ margin: "1vh", opacity: "80%" }}/>
            <Button text="Salvar" style={{ margin: "1vh", opacity: "80%" }} />
            </Col>
          </Row>
          </section>
        </Col>
      </Row>
    </form>
  );
};

export default CreateForm;
