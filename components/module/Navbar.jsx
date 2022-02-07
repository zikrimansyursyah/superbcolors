import Link from "next/link";
import DropdownMenu from "../utils/Dropdown";
import InputSearch from "../utils/input/InputSearch";
import staticData from "../../data/static";
import { MENU } from "../svg";

export default function Navbar() {
  return (
    <div className="container fixed left-1/2 -translate-x-1/2 pt-5 z-10 px-6 sm:px-0">
      <nav className="flex px-10 py-5 bg-gray-800 text-white justify-between items-center rounded-2xl shadow-md bg-[url(/lightning.png)] bg-no-repeat bg-[right_top_-160px]">
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Link href="/">
            <a className="text-3xl">Superb Colors</a>
          </Link>
        </div>
        <div className="border cursor-pointer p-2 rounded-md md:hidden">
          <MENU w={20} h={20} />
        </div>
        <div className="hidden md:flex gap-5">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <DropdownMenu
            title="Follow Me"
            list={staticData.follow_me_on}
            target="_blank"
            isNav={true}
          />
          <DropdownMenu
            title="Categories"
            list={staticData.categories}
            target="_self"
            isNav={true}
          />
        </div>
        <div className="hidden lg:block">
          <InputSearch
            height="2.5rem"
            backgroundColor="white"
            placeholder="Search"
          />
        </div>
      </nav>
    </div>
  );
}
