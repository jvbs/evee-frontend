import { useContext, useEffect, useRef, useState } from "react";
import { Col, FormGroup, Row } from "reactstrap";
import { Form } from "@unform/web";

import { AuthContext } from "../../../../contexts/AuthContext";
import { api } from "../../../../services/api";

import Layout from "../../../../components/Layout";
import BodyContent from "../../../../components/BodyContent";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import history from "../../../../utils/history";
import ListMentors from "./ListMentors";

const Mentors = () => {
  const { loggedUser } = useContext(AuthContext);
  const empresaId = loggedUser?.empresa_id;

  const formRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchUsers = async (empresaId) => {
      if (empresaId) {
        const { data } = await api.get(
          `/colaborador/mentores?empresa_id=${empresaId}`
        );

        setUsers(data);
      }
    };

    fetchUsers(empresaId);
  }, [empresaId]);

  return (
    <Layout>
      <BodyContent
        header="Gerenciamento de Mentores"
        breadcrumb="Home > Mentores"
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
                  label="Informe o nome ou e-mail do mentor"
                  name="pesquisa"
                  testid="fieldPesquisarColaborador"
                  style={{ marginTop: "0", marginBottom: "0" }}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </FormGroup>
            </Form>
          </Col>

          <Col lg={{ size: 3, offset: 1 }} style={{ backgroundColor: "" }}>
            {loggedUser?.userType === "Admin" && (
              <Button
                text="Cadastrar"
                onClick={() => history.push("/admin/create-collaborator")}
                style={{ width: "100%" }}
              />
            )}
          </Col>
        </Row>
        <ListMentors users={users} filter={filter} />
      </BodyContent>
    </Layout>
  );
};

export default Mentors;
