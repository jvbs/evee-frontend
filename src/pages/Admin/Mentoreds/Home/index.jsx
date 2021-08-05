import { useContext, useEffect, useRef, useState } from "react";
import { Col, FormGroup, Row } from "reactstrap";
import { Form } from "@unform/web";

import { api } from "../../../../services/api";
import history from "../../../../utils/history";

import Layout from "../../../../components/Layout";
import BodyContent from "../../../../components/BodyContent";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import ListMentoreds from "./ListMentoreds";
import { AuthContext } from "../../../../contexts/AuthContext";

const Mentoreds = () => {
  const { loggedUser } = useContext(AuthContext);

  const formRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchUsers = async (loggedUser) => {
      if (loggedUser?.empresa_id) {
        const { data } = await api.get(
          loggedUser?.userType === "Mentor"
            ? `/colaborador/mentorados?empresa_id=${loggedUser?.empresa_id}&departamento_id=${loggedUser?.departamento_id}`
            : `/colaborador/mentorados/all?empresa_id=${loggedUser?.empresa_id}`
        );

        setUsers(data);
      }
    };

    if (loggedUser) {
      fetchUsers(loggedUser);
    }
  }, [loggedUser]);

  return (
    <Layout>
      <BodyContent
        header="Gerenciamento de Mentorados"
        breadcrumb="Home > Mentorados"
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
                  data-testid="fieldPesquisarColaborador"
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
        <ListMentoreds users={users} filter={filter} />
      </BodyContent>
    </Layout>
  );
};

export default Mentoreds;
