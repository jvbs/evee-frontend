import BodyContent from "../../../../../components/BodyContent";
import Layout from "../../../../../components/Layout";
import CreateFormPDI from "../CreateFormPDI";

const CreatePDI = () => {
  return (
    <Layout>
      <BodyContent
        header={`Incluir Trilha ao Mentorado`}
        breadcrumb={`Home > Trilhas do Departamento > Cadastrar Trilha`}
      >
        <CreateFormPDI />
      </BodyContent>
    </Layout>
  );
};

export default CreatePDI;
