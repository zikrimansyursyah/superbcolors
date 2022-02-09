import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import colorData from "../../data/color";
import NotFound from "../../components/module/404";
import DropdownMenu from "../../components/utils/Dropdown";
import staticData from "../../data/static";
import Footer from "../../components/module/Footer";
import BackBtn from "../../components/utils/BackBtn";
import hexToRgb from "../../components/utils/hexToRgb";
import LikeBtn from "../../components/utils/LikeBtn";
import ContentCard from "../../components/ContentCard";
import CategoriesBtn from "../../components/utils/CategoriesBtn";
import { DOWNLOAD, LINK } from "../../components/svg";
import Link from "next/link";

export default function DetailPallete() {
  const [payload, setPayload] = useState(null);
  const [copy, setCopy] = useState(false);
  const [onShare, setOnShare] = useState(false);
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    const ref = colorData.data.find((e) => e.name === name);
    setPayload(ref);
  }, [name]);

  const copyColor = (ref) => {
    ref = ref.substring(1);
    navigator.clipboard.writeText(ref);
  };

  const isAny = colorData.data.some((e) => e.name === name);
  if (!isAny) return <NotFound />;

  return (
    <>
      <Header
        pageTitle={`${name.charAt(0).toUpperCase() + name.slice(1)} Pallete`}
      />
      <div className="container absolute left-1/2 -translate-x-1/2 pt-5 z-10 px-6 sm:px-0">
        <nav className="flex px-10 py-5 bg-gray-800 text-white justify-center md:justify-between items-center rounded-2xl shadow-md bg-[url(/lightning.png)] bg-no-repeat bg-[right_top_-160px]">
          <div className="flex gap-3 items-center">
            <div className="hidden md:flex">
              <BackBtn w={24} h={24} />
            </div>
            <div className="text-3xl md:border-l pl-3 capitalize">{`${name} Palette`}</div>
          </div>
          <div className="hidden md:block">
            <DropdownMenu
              title="Follow Me"
              list={staticData.follow_me_on}
              target="_blank"
              isNav={true}
            />
          </div>
        </nav>
      </div>
      <div className="min-h-screen bg-[url(/bg.webp)] bg-cover bg-no-repeat">
        <div className="w-full min-h-screen glass">
          <div className="container flex flex-col lg:flex-row mx-auto pt-32 pb-20 px-6 sm:px-0">
            <div className="lg:w-[50%] xl:w-[60%]">
              <div className="lg:w-[95%] md:h-[50vh] overflow-hidden rounded-2xl">
                {payload && (
                  <Image
                    src={`/pallete/${payload.image}`}
                    alt={payload.name}
                    width={100}
                    height={100}
                    layout="responsive"
                    className="object-cover object-center"
                  />
                )}
              </div>
            </div>
            <div className="pt-6 lg:w-[50%] xl:w-[40%]">
              <div className="grid grid-cols-4 bg-white rounded-2xl pt-5 shadow-xl lg:shadow-none">
                {payload &&
                  (payload.colors || []).map((color) => (
                    <div
                      key={color}
                      className="flex justify-center items-center border-b pb-5 mb-5"
                    >
                      <div
                        className="w-10 h-10 rounded-full"
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                  ))}
                {payload &&
                  (payload.colors || []).map((color) => (
                    <div
                      key={color}
                      className="flex justify-center items-center border-b pb-5 mb-5"
                    >
                      <div
                        data-tooltip={copy ? "Copied" : "Click to Copy"}
                        data-flow="top"
                        onClick={() => {
                          setCopy(true);
                          copyColor(color);
                        }}
                        onMouseLeave={() => {
                          setCopy(false);
                        }}
                        className="px-3 py-2 text-xs md:text-base rounded-lg cursor-pointer hover:bg-gray-100 active:bg-gray-200"
                      >
                        {color}
                      </div>
                    </div>
                  ))}
                {payload &&
                  (payload.colors || []).map((color) => (
                    <div
                      key={color}
                      className="hidden md:flex justify-center items-center lg:border-b pb-5"
                    >
                      <div
                        data-tooltip={copy ? "Copied" : "Click to Copy"}
                        data-flow="top"
                        onClick={() => {
                          setCopy(true);
                          navigator.clipboard.writeText(hexToRgb(color));
                        }}
                        onMouseLeave={() => {
                          setCopy(false);
                        }}
                        className="px-3 py-2 text-xs md:text-base lg:text-xs 2xl:text-base rounded-lg cursor-pointer hover:bg-gray-100 active:bg-gray-200"
                      >
                        {hexToRgb(color)}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex justify-between items-center pr-5 my-6">
                <div>
                  <div>
                    Image by{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Unsplash
                    </a>{" "}
                  </div>
                </div>
                <div>{payload && <LikeBtn likes={payload.liked} />}</div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start pr-5">
                <div className="mb-7 md:mb-0">
                  <div className="mb-4">Category</div>
                  {payload && <CategoriesBtn name={payload.categories} />}
                </div>
                <div>
                  <div className="flex flex-col-reverse md:flex-row gap-4">
                    <button
                      onClick={() => {
                        setOnShare((prev) => (prev ? false : true));
                      }}
                      className="flex bg-white gap-2 border-2 text-gray-700 px-5 py-3 rounded-lg hover:border-blue-300 hover:shadow-lg"
                    >
                      <LINK w={24} h={24} />
                      <div className="text-black">Share this</div>
                    </button>
                    <a
                      href="https://unsplash.com/photos/azIPH6AkNZc/download?ixid=MnwxMjA3fDB8MXxhbGx8NXx8fHx8fDJ8fDE2NDQ0MTA5MTY&force=true"
                      className="flex bg-white gap-2 border-2 text-gray-700 px-5 py-3 rounded-lg hover:border-blue-300 hover:shadow-lg"
                    >
                      <DOWNLOAD w={24} h={24} />
                      <div className="text-black">Download Image</div>
                    </a>
                  </div>
                  <div className={`mt-5 ${onShare ? "" : "hidden"}`}>
                    <div className="mb-4">where do you wanna share?</div>
                    <div className="flex gap-5">
                      <Link href="#">
                        <a
                          data-tooltip="Share to Facebook"
                          data-flow="top"
                          className="color"
                        >
                          <Image
                            src="/facebook.svg"
                            alt="logo_fb"
                            width={40}
                            height={40}
                          />
                        </a>
                      </Link>
                      <Link href="#">
                        <a
                          data-tooltip="Share to Twitter"
                          data-flow="top"
                          className="color-2"
                        >
                          <Image
                            src="/twitter.svg"
                            alt="logo_fb"
                            width={40}
                            height={40}
                          />
                        </a>
                      </Link>
                      <Link href="#">
                        <a
                          data-tooltip="Share to Instagram"
                          data-flow="top"
                          className="color-3"
                        >
                          <Image
                            src="/instagram.svg"
                            alt="logo_fb"
                            width={40}
                            height={40}
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-col pb-5 mb-20">
            <div className="text-3xl capitalize text-center mb-6">{`More ${
              payload && payload.categories
            } Palette`}</div>
            {payload && (
              <ContentCard categories={payload.categories} except={name} />
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
