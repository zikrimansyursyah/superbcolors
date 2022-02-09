import Footer from "./module/Footer";
import Navbar from "./module/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[url(/bg.webp)] bg-cover bg-no-repeat">
        <div className="w-full glass">
          <div className="container mx-auto min-h-screen pt-32 pb-20">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
