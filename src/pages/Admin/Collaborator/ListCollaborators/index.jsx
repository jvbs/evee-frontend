import { useMemo } from "react";
import { Row } from "reactstrap";

import UserBox from "../../../../components/UserBox";
import ContentSearchReturn from "../../../../components/ContentSearchReturn";

import styles from "./styles.module.css";

function SplitName(text) {
  return text.split(" ").slice(0, 3).join(" ");
}

const ListCollaborators = ({ users, filter }) => {
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (!filter) return true;
      if (user.nome.includes(filter) || user.email.includes(filter)) {
        return true;
      }
    });
  }, [users, filter]);
  return (
    <>
      <ContentSearchReturn
        section="Colaboradores"
        qtdUsers={filteredUsers.length}
      />
      <Row>
        {filteredUsers.length > 0 ? (
          filteredUsers
            .filter((user) => {
              if (!filter) return true;
              if (user.nome.includes(filter) || user.email.includes(filter)) {
                return true;
              }
            })
            .map((user, index) => {
              return (
                <UserBox
                  key={index}
                  nome={SplitName(user.nome)}
                  cargo={user.nome_cargo}
                  departamento={user.nome_departamento}
                />
              );
            })
        ) : (
          <div className={styles.BoxTextGroup}>
            <p className={styles.BoxTextOne}>
              Ops! nenhum resultado encontrado...
            </p>
            <p className={styles.BoxTextTwo}>O que eu faço?</p>
            <p className={styles.BoxTexList}>
              Verifique se possui colaboradores cadastrados.
            </p>
            <p className={styles.BoxTextList}>
              Verifique os termos digitados ou os filtros selecionados.
            </p>
          </div>
        )}
      </Row>
    </>
  );
};

export default ListCollaborators;
