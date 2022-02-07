import Header from "../components/Header";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [val, setVal] = useState(10);

  if (val < 1) window.location = "/";

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((v) => v - 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <Header pageTitle="404 Not Found" />
      <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
        <div className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="superbcolors-logo"
            width={100}
            height={100}
          />
          <div className=" text-gray-700 text text-4xl font-thin">
            Superbcolors
          </div>
        </div>
        <div className="text-lg font-thin">
          you will automatic redirect to home on
        </div>
        <div className="time font-semibold text-lg">{val}</div>
        <Image src="/404.svg" alt="404-not-found" width={400} height={400} />
        <h1 className=" text-5xl font-semibold">OOPS.</h1>
        <div className="text-gray-700 text-2xl text-center">
          We can&apos;t seem to find the page you are looking for
        </div>
      </div>
    </>
  );
}
