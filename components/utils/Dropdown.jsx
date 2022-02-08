import Link from "next/link";
import { CHEVRON_FILL_DOWN } from "../svg";

export default function DropdownMenu({
  title,
  list,
  activeMenu,
  target,
  isNav,
}) {
  return (
    <div className="group cursor-pointer">
      <a className="flex">
        {title}
        {isNav && <CHEVRON_FILL_DOWN width={24} height={24} />}
      </a>
      <div
        className={`hidden group-hover:absolute group-hover:flex flex-col gap-2 p-3 bg-white border rounded-md text-black text-sm shadow-lg scale-up-ver-top cursor-default group-hover:-translate-x-10`}
      >
        {(list || []).map((li) => (
          <Link key={li.name} href={li.link}>
            <a
              target={target}
              className={`p-2 rounded-md hover:bg-gray-100 ${
                activeMenu === li.name && "bg-gray-100"
              }`}
              rel="noreferrer"
            >
              {li.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
