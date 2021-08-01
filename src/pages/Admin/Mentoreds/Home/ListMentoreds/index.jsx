import { useMemo } from "react";
import { Row } from "reactstrap";
import styles from "./styles.module.css";

import UserBox from "../../../../../components/UserBox";
import ContentSearchReturn from "../../../../../components/ContentSearchReturn";
import history from "../../../../../utils/history";

function SplitName(text) {
  return text.split(" ").slice(0, 2).join(" ");
}

const ListMentoreds = ({ users, filter }) => {
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
        section="Mentorados"
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
                  foto={user.foto}
                  departamento={user.nome_departamento}
                  onClick={() =>
                    history.push(`/admin/mentoreds/details/${user.id}`)
                  }
                />
              );
            })
        ) : (
          <div className={styles.BoxTextGroup}>
            <p className={styles.BoxTextOne}>
              Ops! nenhum resultado encontrado...
            </p>
            <p className={styles.BoxTextTwo}>O que eu faço?</p>
            <p className={styles.BoxTextList}>
              Verifique se possui mentores cadastrados.
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

export default ListMentoreds;
