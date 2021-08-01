import BodyContent from "../../../../../components/BodyContent";
import Layout from "../../../../../components/Layout";
import EditFormTrilha from "../EditForm";

const EditTrilha = () => {
  return (
    <Layout>
      <BodyContent
        header={`Editar trilha`}
        breadcrumb={`Home > Trilhas do Departamento > Editar trilha`}
      >
        <EditFormTrilha />
      </BodyContent>
    </Layout>
  );
};

export default EditTrilha;
