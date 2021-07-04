import Layout from "../../../components/Layout";
import BodyContent from "../../../components/BodyContent";

import TopFilters from "./TopFilters";
import ListCollaborators from "./ListCollaborators";
import ContentSearchReturn from "../../../components/ContentSearchReturn";
import ListMentors from "./ListMentors";
import ListMentoreds from "./ListMentoreds";

import styles from "./styles.module.css";

const Collaborator = () => {
  return (
    <Layout>
      <BodyContent
        header="Gerenciamento de Colaboradores"
        breadcrumb="Home > Colaboradores"
      >
        <TopFilters />
        <ListCollaborators />
        {/* <ListMentors />
        <ListMentoreds /> */}
      </BodyContent>
    </Layout>
  );
};

export default Collaborator;
