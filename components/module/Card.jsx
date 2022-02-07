import Link from "next/link";
import LikeBtn from "../utils/LikeBtn";
import { useState } from "react";

export default function Card({ name, image, liked, colors }) {
  const [copy, setCopy] = useState(false);
  const setColor = (key) => {
    if (key === 0) return `color`;
    if (key === 1) return `color-2`;
    if (key === 2) return `color-3`;
    if (key === 3) return `color-4`;
  };

  const copyColor = (ref) => {
    ref = ref.substring(1);
    navigator.clipboard.writeText(ref).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };

  return (
    <>
      <div
        className={`bg-cover bg-center flex flex-col-reverse h-60 rounded-3xl group`}
        style={{
          backgroundImage: `url(/pallete/${image})`,
        }}
      >
        <Link href={`/palette/${name}`}>
          <a className="glass h-12 pl-6 flex items-center text-white text-xl rounded-b-3xl capitalize">
            {name} Color
          </a>
        </Link>
        <div className="hidden group-hover:flex flex-row-reverse gap-2 p-2">
          {(colors || []).map((color, idx) => (
            <div
              key={idx}
              className={`h-10 w-10 border-2 shadow-sm rounded-md border-gray-100 tooltip cursor-pointer ${setColor(
                idx
              )}`}
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                setCopy(true);
                copyColor(color);
              }}
              onMouseLeave={() => {
                setCopy(false);
              }}
            >
              <span className="tooltiptext">{copy ? "Copied" : color}</span>
            </div>
          ))}
        </div>
        <div className="absolute -translate-y-44 translate-x-5">
          <LikeBtn likes={liked} />
        </div>
      </div>
    </>
  );
}
