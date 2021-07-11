import BodyContent from "../../../../../components/BodyContent";
import Layout from "../../../../../components/Layout";

const CreatePdi = () => {
  return (
    <Layout>
      <BodyContent
        header={`PDI - Plano de Desenvolvimento Individual`}
        breadcrumb={`Home > Novo PDI`}
      >
        <p>Create PDI</p>
      </BodyContent>
    </Layout>
  );
};

export default CreatePdi;
