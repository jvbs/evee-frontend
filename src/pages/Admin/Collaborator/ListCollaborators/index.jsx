import { useEffect, useState } from "react";
import { Row } from "reactstrap";

import { api } from "../../../../services/api";

import UserBox from "../../../../components/UserBox";

const ListCollaborators = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await api.get("/colaborador");

      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <Row>
      {users.length > 0 ? (
        users.map((user, index) => {
          return (
            <UserBox
              key={index}
              nome={user.nome}
              cargo={user.nome_cargo}
              departamento={user.nome_departamento}
            />
          );
        })
      ) : (
        <h1>Sem usuários</h1>
      )}
    </Row>
  );
};

export default ListCollaborators;
