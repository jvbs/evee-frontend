import { Row } from "reactstrap";
import styles from "./styles.module.css";

import UserBox from "../../../../components/UserBox";
import ContentSearchReturn from "../../../../components/ContentSearchReturn";

function SplitName(text) {
  return text.split(' ').slice(0, 3).join(' ')
}

const ListMentors = ({ users, filter }) => {
  return (
    <>
      <ContentSearchReturn section="Mentores" qtdUsers={users.length} />
      <Row>
        {users.length > 0 ? (
          users
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
          <p className={styles.BoxTextOne}>Ops! nenhum resultado encontrado...</p>
          <p className={styles.BoxTextTwo}>O que eu faço?</p>
          <p className={styles.BoxTextList}>Verifique se possui mentores cadastrados.</p>
          <p className={styles.BoxTextList}>Verifique os termos digitados ou os filtros selecionados.</p>
        </div>
        )}
      </Row>
    </>
  );
};

export default ListMentors;
