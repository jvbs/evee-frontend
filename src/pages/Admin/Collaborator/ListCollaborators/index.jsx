import { Row } from "reactstrap";

import UserBox from "../../../../components/UserBox";

const ListCollaborators = ({ users, filter }) => {
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
      {users
        .filter((user) => {
          if (!filter) return true;
          if (user.nome.includes(filter) || user.email.includes(filter)) {
            return true;
          }
        })
        .map((user) => (
          <ul>
            <li>{user.nome}</li>
            <li>{user.email}</li>
          </ul>
        ))}
    </Row>
  );
};

export default ListCollaborators;
