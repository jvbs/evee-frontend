import { Col, FormGroup, Row } from "reactstrap";
import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";

import BodyContent from "../../../../components/BodyContent";
import Layout from "../../../../components/Layout";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import history from "../../../../utils/history";
import ListMentoreds from "./ListMentoreds";

import styles from "./styles.module.css";
import { api } from "../../../../services/api";

const MentorDetails = () => {
  const formRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await api.get("/colaborador/mentorados");

      setUsers(data);
    };

    fetchUsers();
  }, []);
  return (
  <Layout>
    <BodyContent
      header="Painel do Colaborador: Celso Donato"
      breadcrumb="Home > Mentores > Mentor"
    >
      <Row>
          <Col lg="8" style={{ backgroundColor: "" }}>
            <Form
              ref={formRef}
              style={{ marginBottom: "3vh" }}
              onSubmit={() => {}}
            >
              <FormGroup>
                <Input
                  label="Informe o nome ou e-mail do mentorado"
                  name="pesquisa"
                  testid="fieldPesquisarColaborador"
                  style={{ marginTop: "0", marginBottom: "0" }}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </FormGroup>
            </Form>
          </Col>

        </Row>
        <ListMentoreds users={users} filter={filter} />
    </BodyContent>
  </Layout>
);
};

export default MentorDetails;
