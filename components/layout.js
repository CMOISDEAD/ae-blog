import Footer from "./footer";
// import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="container mx-auto px-16 pt-2">
        <p className="text-8xl text-center font-normal font-special text-[#f1c40f]">
          (!BIO+SFERA)
        </p>
        <p className="text-center font-extrabold text-[#f1c40f] mb-3">
          Medio ambiente o muerte inminente, tu decides cuidar o desaparecer
        </p>
        {children}
        <Footer />
      </main>
    </>
  );
}
