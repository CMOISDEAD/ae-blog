import Navbar from "./navbar";

export default function Layout({ children, sections }) {
  return (
    <>
      <Navbar />.
      <main class="container mx-auto px-4">
        <div class="flex flex-row justify-between content-center align-center gap-4">
          <div class="side w-1/6 border rounded border-gray-500 p-5">
            <h4 class="font-bold py-2">Sections:</h4>
            <ul>
              {sections.map((section) => {
                return (
                  <li className="text-sky-500 hover:text-sky-600">
                    <a href={`#${section}`}>{section}</a>
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
