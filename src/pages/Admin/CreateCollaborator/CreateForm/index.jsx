import { Col, FormGroup, Row } from "reactstrap";
import { FaCamera } from "react-icons/fa";

import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

import styles from "./styles.module.css";
import userPhoto from "../../../../assets/images/mulher-maravilha.jpeg";
import Button from "../../../../components/Button";
import { MenuItem } from "@material-ui/core";

const CreateForm = () => {
  return (
    <form>
      <Row>
        <Col lg="6">
          <div className={styles.userPhotoWrapper}>
            <img src={userPhoto} alt="userPhoto" className={styles.userFoto} />
            <button type="button" data-testid="btnEditarUsuario">
              <FaCamera
                fontSize="1.3vw"
                style={{ color: "var(--yellow-gold)", opacity: "80%" }}
              />
            </button>
          </div>
          <section className={styles.formSection}>
            <span>Informações pessoais</span>
            <FormGroup>
              <Input label="Nome*" testid="fieldNome" />
            </FormGroup>
            <FormGroup>
              <Input label="CPF*" testid="fieldCPF" />
            </FormGroup>
            <FormGroup>
              <Input label="Data de Nascimento*" testid="fieldDataNascimento" />
            </FormGroup>
            <FormGroup>
              <Input label="E-mail*" testid="fieldEmail" />
            </FormGroup>
            <FormGroup>
              <Input label="Celular*" testid="fieldCelular" />
            </FormGroup>
          </section>
        </Col>
        <Col lg="6">
          <section className={styles.formSection}>
            <span>Informações adicionais</span>
            <FormGroup>
              <Select label="Departamento*" testid="fieldDepartamento"></Select>
            </FormGroup>
            <FormGroup>
              <Select label="Cargo*" testid="fieldCargo"></Select>
            </FormGroup>
            <FormGroup>
              <Select label="Tipo Usuário*" testid="fieldTipoUsuario">
                <MenuItem value={"Comum"}>Comum</MenuItem>
                <MenuItem value={"Mentor"}>Mentor</MenuItem>
                <MenuItem value={"Mentorado"}>Mentorado</MenuItem>
              </Select>
            </FormGroup>
          </section>
          <section className={styles.formSection}>
            <span>Informações de acesso</span>
            <FormGroup>
              <Input label="Senha*" testid="fieldSenha" />
            </FormGroup>
            <FormGroup>
              <Input label="Confirmar senha*" testid="fieldConfirmarSenha" />
            </FormGroup>
            <FormGroup>
              <Select label="Status*" testid="fieldStatus">
                <MenuItem value={"Ativo"}>Ativo</MenuItem>
                <MenuItem value={"Inativo"}>Inativo</MenuItem>
                <MenuItem value={"Efetivado"}>Efetivado</MenuItem>
              </Select>
            </FormGroup>
          </section>
          <section className={styles.formButtons}>
            <Button type="light-yellow" text="Cancelar" />
            <Button text="Salvar" />
          </section>
        </Col>
      </Row>
    </form>
  );
};

export default CreateForm;
