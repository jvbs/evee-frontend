import { Row } from "reactstrap";

import UserBox from "../../../../components/UserBox";
import ContentSearchReturn from "../../../../components/ContentSearchReturn";

const ListCollaborators = ({ users, filter }) => {
  return (
    <>
      <ContentSearchReturn qtdUsers={users.length} />
      <Row>
        {users.length > 0 ? (
          users.map((user, index) => {
            return (
              <>
                <UserBox
                  key={index}
                  nome={user.nome}
                  cargo={user.nome_cargo}
                  departamento={user.nome_departamento}
                />
              </>
            );
          })
        ) : (
          <div>
            <h1>Ops! nenhum resultado encontrado...</h1>
            <h2>O que eu faço?</h2>
            <h3>Verifique se possui colaboradores cadastrados.</h3>
            <h3>
              Verifique os termos digitados ou os filtros selecionados. Utilize
              termos genéricos na busca.
            </h3>
          </div>
        )}
      </Row>
    </>
  );
};

export default ListCollaborators;
