import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-5">{children}</main>
    </>
  );
}
