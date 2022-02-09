import { CHEVRON_LEFT } from "../../components/svg";
import { useRouter } from "next/router";

export default function BackBtn({ w, h }) {
  const router = useRouter();
  return (
    <a
      onClick={() => {
        router.back();
      }}
      className="border p-2 rounded-md cursor-pointer hover:bg-[#FFDC64] hover:border-transparent hover:text-gray-800 motion-safe:hover:duration-300"
    >
      <CHEVRON_LEFT w={w} h={h} />
    </a>
  );
}
