import ContentCard from "../components/ContentCard";
import Header from "../components/Header";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Header pageTitle="Pick your fav Color" />
      <ContentCard />
    </Layout>
  );
}
