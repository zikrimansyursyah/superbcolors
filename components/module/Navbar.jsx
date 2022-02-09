import Link from "next/link";
import DropdownMenu from "../utils/Dropdown";
import InputSearch from "../utils/input/InputSearch";
import staticData from "../../data/static";
import { CLOSE, MENU } from "../svg";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [hide, setHide] = useState("hidden");
  const [roundedNav, setRoundedNav] = useState("rounded-2xl");

  const [openCategories, setOpenCategories] = useState(false);
  const [hideCategories, setHideCategories] = useState("hidden");
  const [roundedCategories, setRoundedCategories] = useState("rounded-md");

  const [openFollowMe, setOpenFollowMe] = useState(false);
  const [hideFollowMe, setHideFollowMe] = useState("hidden");
  const [roundedFollowMe, setRoundedFollowMe] = useState("rounded-md");

  useEffect(() => {
    if (openNav) {
      setRoundedNav("rounded-t-2xl");
      setHide("");
    } else {
      setTimeout(() => {
        setRoundedNav("rounded-2xl");
        setHide("hidden");
      }, 500);
    }
  }, [openNav]);

  useEffect(() => {
    if (openCategories) {
      setRoundedCategories("rounded-t-md");
      setHideCategories("");
    } else {
      setTimeout(() => {
        setRoundedCategories("rounded-md");
        setHideCategories("hidden");
      }, 500);
    }
  }, [openCategories]);

  useEffect(() => {
    if (openFollowMe) {
      setRoundedFollowMe("rounded-t-md");
      setHideFollowMe("");
    } else {
      setTimeout(() => {
        setRoundedFollowMe("rounded-md");
        setHideFollowMe("hidden");
      }, 500);
    }
  }, [openFollowMe]);

  return (
    <div className="container fixed left-1/2 -translate-x-1/2 pt-5 z-10 px-6 sm:px-0">
      <nav
        className={`flex px-10 py-5 bg-gray-800 text-white justify-between items-center ${roundedNav} md:rounded-2xl shadow-md bg-[url(/lightning.png)] bg-no-repeat bg-[right_top_-160px]`}
      >
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Link href="/">
            <a className="text-3xl">Superb Colors</a>
          </Link>
        </div>
        <div
          onClick={() => {
            setOpenNav((prev) => (prev ? false : true));
          }}
          className="border cursor-pointer p-2 rounded-md md:hidden"
        >
          {openNav ? <CLOSE w={20} h={20} /> : <MENU w={20} h={20} />}
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
      <div
        className={`bg-gray-700 rounded-b-2xl flex flex-col gap-5 p-10 md:hidden text-white ${
          openNav ? "scale-up-ver-top flex" : "scale-up-ver-top-rev"
        } ${hide}`}
      >
        <Link href="/">
          <a className="bg-gray-500 rounded-md text-center py-4 shadow-xl active:bg-gray-400 color">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="bg-gray-500 rounded-md text-center py-4 shadow-xl active:bg-gray-400 color-2">
            About
          </a>
        </Link>
        <div>
          <button
            onClick={() => {
              setOpenCategories((prev) => (prev ? false : true));
            }}
            className={`w-full bg-gray-500 text-center py-4 shadow-xl cursor-pointer active:bg-gray-400 color-3 ${roundedCategories}`}
          >
            Categories
          </button>
          <div
            className={`h-40 overflow-y-scroll overflow-list bg-white flex flex-col gap-2 text-black p-5 rounded-b-md ${
              openCategories ? "scale-up-ver-top flex" : "scale-up-ver-top-rev"
            } ${hideCategories}`}
          >
            {(staticData.categories || []).map((category, idx) => (
              <Link key={category.name} href={category.link}>
                <a
                  className={`${
                    idx % 2 === 0 && "bg-gray-100"
                  } px-6 py-2 rounded-md active:bg-gray-200`}
                >
                  {category.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setOpenFollowMe((prev) => (prev ? false : true));
            }}
            className={`w-full bg-gray-500 text-center py-4 shadow-xl cursor-pointer active:bg-gray-400 color-4 ${roundedFollowMe}`}
          >
            Follow Me
          </button>
          <div
            className={`h-40 overflow-y-scroll overflow-list bg-white flex flex-col gap-2 text-black p-5 rounded-b-md ${
              openFollowMe ? "scale-up-ver-top flex" : "scale-up-ver-top-rev"
            } ${hideFollowMe}`}
          >
            {(staticData.follow_me_on || []).map((e, idx) => (
              <Link key={e.name} href={e.link}>
                <a
                  className={`${
                    idx % 2 === 0 && "bg-gray-100"
                  } px-6 py-2 rounded-md active:bg-gray-200`}
                >
                  {e.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <InputSearch
          height="3.5rem"
          width="100%"
          backgroundColor="white"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
