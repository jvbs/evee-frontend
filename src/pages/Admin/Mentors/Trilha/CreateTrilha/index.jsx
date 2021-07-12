import BodyContent from "../../../../../components/BodyContent";
import Layout from "../../../../../components/Layout";
import CreateFormTrilha from "../CreateForm";

const CreateTrilha = () => {
  return (
    <Layout>
      <BodyContent
        header={`Cadastro de Trilhas`}
        breadcrumb={`Home > Trilhas do Departamento > Cadastar Trilha`}
      >
        <CreateFormTrilha />
      </BodyContent>
    </Layout>
  );
};

export default CreateTrilha;
