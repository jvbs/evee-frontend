import BodyContent from "../../../../components/BodyContent";
import Layout from "../../../../components/Layout";
import TabsTrilhas from "../Trilha/Tabs";

const Trilha = () => {
  return (
    <Layout>
      <BodyContent
        header={`Trilhas - Gerenciamento de Atividades & Capacitação Interna`}
        breadcrumb={`Home > Trilhas do Departamento`}
      >
        <TabsTrilhas />
      </BodyContent>
    </Layout>
  );
};

export default Trilha;
