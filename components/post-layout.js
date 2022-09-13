import Navbar from "./navbar";

const sections = ["What is JWT?", "Whar Are Tokens?", "How JWT Works"];

export default function Layout({ children }) {
  return (
    <>
      <Navbar />.
      <main class="container mx-auto px-5">
        <div class="flex flex-row justify-between content-center align-center">
          <div class="side w-1/6">
            <ul>
              {sections.map((section) => {
                return (
                  <li className="text-sky-500 hover:text-sky-600">
                    <a href="#">{section}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="content w-5/6">{children}</div>
        </div>
      </main>
    </>
  );
}
