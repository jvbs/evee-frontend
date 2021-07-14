import BodyContent from "../../../../components/BodyContent";
import Layout from "../../../../components/Layout";
import TabsTrilhas from "../Trilha/Tabs";
import Button from "../../../../components/Button";

import history from "../../../../utils/history";
import styles from "./styles.module.css";

const Trilha = () => {
  return (
    <Layout>
      <BodyContent
        header={`Trilhas - Gerenciamento de Atividades & Capacitação Interna`}
        breadcrumb={`Home > Trilhas do Departamento`}
      >   
      <TabsTrilhas/>
       
      </BodyContent>
    </Layout>
  );
};

export default Trilha;
