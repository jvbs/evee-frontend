import { useEffect, useRef, useState } from "react";
import { Col, FormGroup, Row } from "reactstrap";
import { Form } from "@unform/web";

import { api } from "../../../services/api";

import Layout from "../../../components/Layout";
import BodyContent from "../../../components/BodyContent";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import history from "../../../utils/history";
import ListMentors from "./ListMentors";

const Mentors = () => {
  const formRef = useRef(null);
  const [users, setUsers] = useState([]);
  // const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await api.get("/colaborador/mentores");

      setUsers(data);
      // setFilteredUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <Layout>
      <BodyContent
        header="Gerenciamento de Mentores"
        breadcrumb="Home > Mentores"
      >
        {/* <TopFilters /> */}
        <Form ref={formRef} style={{ marginBottom: "3vh" }}>
          <Row>
            <Col lg="8" style={{ backgroundColor: "" }}>
              <FormGroup>
                <Input
                  label="Informe o nome ou e-mail do mentor"
                  name="pesquisa"
                  testid="fieldPesquisarColaborador"
                  style={{ marginTop: "0", marginBottom: "0" }}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col lg={{ size: 3, offset: 1 }} style={{ backgroundColor: "" }}>
              <Button
                text="Cadastrar"
                onClick={() => history.push("/admin/create-collaborator")}
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Form>
        <ListMentors users={users} filter={filter} />
      </BodyContent>
    </Layout>
  );
};

export default Mentors;
