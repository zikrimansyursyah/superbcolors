import { LOVE } from "../svg";

export default function LikeBtn({ likes }) {
  return (
    <div className="bg-white pl-2 py-1.5 pr-3 flex items-center gap-2 rounded-lg text-gray-700 shadow-lg hover:scale-105 motion-safe:hover:duration-300">
      <div className="text-gray-400 border rounded-md p-1 cursor-pointer">
        <LOVE w={24} h={24} />
      </div>
      {likes}
    </div>
  );
}
