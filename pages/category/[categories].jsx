import { useRouter } from "next/router";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import staticData from "../../data/static";
import ContentCard from "../../components/ContentCard";
import NotFound from "../../components/module/404";

export default function ListByCategories() {
  const router = useRouter();
  const { categories } = router.query;

  const isAny = staticData.categories.some(
    (e) => e.name.toLowerCase() === categories
  );

  if (!isAny) return <NotFound />;

  return (
    <Layout>
      <Header
        pageTitle={`${
          categories.charAt(0).toUpperCase() + categories.slice(1)
        } Pallete`}
      />
      <ContentCard categories={categories} />
    </Layout>
  );
}
