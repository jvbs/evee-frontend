import Layout from "../../../components/Layout";
import BodyContent from "../../../components/BodyContent";
import Welcome from "./Welcome";

const Home = () => (
  <Layout>
    <BodyContent header="Meu Painel" breadcrumb="Home">
      <Welcome />
    </BodyContent>
  </Layout>
);

export default Home;
