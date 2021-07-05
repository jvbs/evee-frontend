import { useEffect, useRef, useState } from "react";
import { Col, FormGroup, Row } from "reactstrap";
import { Form } from "@unform/web";

import { api } from "../../../services/api";

import Layout from "../../../components/Layout";
import BodyContent from "../../../components/BodyContent";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import history from "../../../utils/history";
import ListCollaborators from "./ListCollaborators";

const Collaborator = () => {
  const formRef = useRef(null);
  const [users, setUsers] = useState([]);
  // const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await api.get("/colaborador");

      setUsers(data);
      // setFilteredUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <Layout>
      <BodyContent
        header="Gerenciamento de Colaboradores"
        breadcrumb="Home > Colaboradores"
      >
        {/* <TopFilters /> */}
        <Row>
          <Col lg="8" style={{ backgroundColor: "" }}>
            <Form
              ref={formRef}
              style={{ marginBottom: "3vh" }}
              onSubmit={() => {}}
            >
              <FormGroup>
                <Input
                  label="Informe o nome ou e-mail do colaborador"
                  name="pesquisa"
                  testid="fieldPesquisarColaborador"
                  style={{ marginTop: "0", marginBottom: "0" }}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </FormGroup>
            </Form>
          </Col>
          <Col lg={{ size: 3, offset: 1 }} style={{ backgroundColor: "" }}>
            <Button
              text="Cadastrar"
              onClick={() => history.push("/admin/create-collaborator")}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <ListCollaborators users={users} filter={filter} />
        {/* <ListMentors /> */}
        {/* <ListMentoreds /> */}
      </BodyContent>
    </Layout>
  );
};

export default Collaborator;
