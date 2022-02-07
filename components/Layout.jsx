import Header from "./Header";
import Footer from "./module/Footer";
import Navbar from "./module/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header pageTitle="Pick your Fav Colors" />
      <Navbar />
      <div className="min-h-screen bg-[url(/bg.webp)] bg-cover bg-no-repeat">
        <div className="w-full min-h-screen glass">
          <div className="container mx-auto pt-32 pb-20">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}
