import Layout from "../../../components/Layout";
import BodyContent from "../../../components/BodyContent";

// import styles from "./styles.module.css";
import CreateForm from "./CreateForm";

const CreateCollaborator = () => {
  return (
    <Layout>
      <BodyContent
        header="Cadastro de Colaboradores"
        breadcrumb="Home > Cadastro de Colaboradores"
      >
        <CreateForm />
      </BodyContent>
    </Layout>
  );
};

export default CreateCollaborator;
