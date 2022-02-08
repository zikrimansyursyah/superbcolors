import { useRouter } from "next/router";
import Header from "../../components/Header";
import colorData from "../../data/color";
import NotFound from "../../components/module/404";

export default function DetailPallete() {
  const router = useRouter();
  const { name } = router.query;

  const isAny = colorData.data.some((e) => e.name === name);

  if (!isAny) return <NotFound />;

  return <div>{name}</div>;
}
