import { useRef } from "react";
import { MenuItem } from "@material-ui/core";
import { Col, FormGroup, Row } from "reactstrap";
import { FaCamera } from "react-icons/fa";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { FaSearch } from "react-icons/fa";

import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import ContentSearchReturn from "../../../../components/ContentSearchReturn";
import styles from "./styles.module.css";

import userPhoto from "../../../../assets/images/evee.png";
import Button from "../../../../components/Button";


const TopFilters = () => {
  const formRef = useRef(null);
  return (

    <Form ref={formRef} style={{ marginBottom: "3vh" }}>
    <Row>
  
       <Col lg="7" style={{ backgroundColor: "" }}>
          <FormGroup>
              <Input label="Informe o nome ou e-mail do colaborador" name="pesquisa" testid="fieldPesquisarColaborador" style={{ marginTop: "0", marginBottom: "0" }}/>
          </FormGroup>
       </Col>

       <Col lg="2" style={{ backgroundColor: "" }}>
        <button type="button" data-testid="btnPesquisar" className={styles.btnSearch}>
              <FaSearch
                fontSize="1.3vw"
                style={{ color: "var(--yellow-gold)", opacity: "80%" }}
              />
        </button>
       </Col>

       <Col lg="3" style={{ backgroundColor: "" }} >
        <Button
                    text="Cadastrar"
                    onClick="  "
                    style={{ width: "100%"}}
          />
       </Col>

    </Row>
    </Form>
  );
  
};

export default TopFilters;