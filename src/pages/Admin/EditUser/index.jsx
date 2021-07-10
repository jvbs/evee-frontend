import Layout from "../../../components/Layout";
import BodyContent from "../../../components/BodyContent";

// import styles from "./styles.module.css";
import EditForm from "./EditForm";

const EditUser = () => {
  return (
    <Layout>
      <BodyContent
        header="Dados do Usuário"
        breadcrumb="Home > Dados do Usuário"
      >
        <EditForm />
      </BodyContent>
    </Layout>
  );
};

export default EditUser;
