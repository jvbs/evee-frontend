import { useMemo } from "react";
import { Row } from "reactstrap";

import UserBox from "../../../../components/UserBox";
import ContentSearchReturn from "../../../../components/ContentSearchReturn";

import styles from "./styles.module.css";
import history from "../../../../utils/history";

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
                  tipo={user.tipo_usuario}
                  onClick={() => {
                    switch (user.tipo_usuario) {
                      case "Comum":
                        history.push(`/admin/default/details/${user.id}`);
                        break;
                      case "Mentor":
                        history.push(`/admin/mentors/details/${user.id}`);
                        break;
                      case "Mentorado":
                        history.push(`/admin/mentoreds/details/${user.id}`);
                        break;
                    }
                  }}
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
