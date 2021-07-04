import { useRef } from "react";
import { Col, FormGroup, Row } from "reactstrap";
import { Form } from "@unform/web";
import { FaSearch } from "react-icons/fa";
import history from "../../../../utils/history";

import Input from "../../../../components/Input";

import styles from "./styles.module.css";
import Button from "../../../../components/Button";
import history from "../../../../utils/history";

const TopFilters = () => {
  const formRef = useRef(null);
  return (

    <Form ref={formRef} style={{ marginBottom: "3vh" }}>
      <Row>
        <Col lg="8" style={{ backgroundColor: "" }}>
          <FormGroup>
            <Input
              label="Informe o nome ou e-mail do colaborador"
              name="pesquisa"
              testid="fieldPesquisarColaborador"
              style={{ marginTop: "0", marginBottom: "0" }}
            />
          </FormGroup>
        </Col>

        {/* <Col lg="2" style={{ backgroundColor: "" }}>
          <button
            type="button"
            data-testid="btnPesquisar"
            className={styles.btnSearch}
          >
            <FaSearch
              fontSize="1.3vw"
              style={{ color: "var(--yellow-gold)", opacity: "80%" }}
            />
          </button>
        </Col> */}

        <Col lg={{ size: 3, offset: 1 }} style={{ backgroundColor: "" }}>
          <Button
            text="Cadastrar"
            onClick={() => history.push("/admin/create-collaborator")}
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default TopFilters;
