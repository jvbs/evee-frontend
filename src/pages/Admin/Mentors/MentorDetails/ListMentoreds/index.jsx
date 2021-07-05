import { useMemo } from "react";
import { Row } from "reactstrap";
import styles from "./styles.module.css";
import history from "../../../../../utils/history";

import UserBox from "../../../../../components/UserBox";
import ContentSearchReturn from "../../../../../components/ContentSearchReturn";

const ListMentoreds = ({ users, filter }) => {
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (!filter) return true;
      if (user.nome.includes(filter) || user.email.includes(filter)) {
        return true;
      }
    });
  }, [users, filter]);

  const splitName = (text) => {
    return text.split(" ").slice(0, 3).join(" ");
  };

  return (
    <>
      <ContentSearchReturn section="Aprendizes" qtdUsers={filteredUsers.length} />
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
                  nome={splitName(user.nome)}
                  cargo={user.nome_cargo}
                  departamento={user.nome_departamento}
                  onClick={() => history.push("/admin/create-collaborator")}
                />
              );
            })
        ) : (
          <div className={styles.BoxTextGroup}>
            <p className={styles.BoxTextOne}>
            Ops! Nenhum <strong>Aprendiz</strong> encontrado...
            </p>
          </div>
        )}
      </Row>
      
      <ContentSearchReturn section="Estagiarios" qtdUsers={filteredUsers.length} />
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
                  nome={splitName(user.nome)}
                  cargo={user.nome_cargo}
                  departamento={user.nome_departamento}
                  onClick={() => history.push("/admin/create-collaborator")}
                />
              );
            })
        ) : (
          <div className={styles.BoxTextGroup}>
            <p className={styles.BoxTextOne}>
              Ops! Nenhum <strong>Estagiário</strong> encontrado...
            </p>
          </div>
        )}
      </Row>
    </>
  );
};

export default ListMentoreds;
