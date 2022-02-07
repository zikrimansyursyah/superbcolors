import Image from "next/image";
import Link from "next/link";
import staticData from "../../data/static";

export default function Footer() {
  return (
    <div className="container mx-auto rounded-t-2xl overflow-hidden bg-[url(/bg.webp)] bg-cover">
      <div className="flex flex-col sm:flex-row gap-14 p-10 glass">
        <div className="flex flex-col gap-4 sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
          <Link href="/">
            <a className="flex gap-3 items-center w-fit pl-2 pr-5 py-1 rounded-md text-white bg-gray-800 shadow-lg shadow-gray-500 hover:bg-yellow-100 hover:text-black hover:shadow-yellow-100 motion-safe:hover:duration-200">
              <Image
                src="/logo.png"
                alt="superbcolors_logo"
                width={50}
                height={50}
              />
              <span className="text-2xl font-semibold">Superbcolors</span>
            </a>
          </Link>
          {staticData.footer_description}
        </div>
        <div className="flex gap-24 sm:gap-10">
          <div className="pt-4 flex flex-col gap-4">
            <div className="font-bold text-gray-700">Follow me on</div>
            <div className="flex flex-col gap-3">
              {(staticData.follow_me_on || []).map((list) => (
                <a
                  key={list.name}
                  href={list.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {list.name}
                </a>
              ))}
            </div>
          </div>
          <div className="pt-4 flex flex-col gap-4">
            <div className="font-bold text-gray-700">Another Project</div>
            <div className="flex flex-col gap-3">
              {(staticData.another_project || []).map((list) => (
                <a
                  key={list.name}
                  href={list.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {list.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
