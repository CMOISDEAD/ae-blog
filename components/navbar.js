import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky z-10 top-0 flex justify-between content-center align-center p-3 bg-white">
      <p className="font-bold uppercase">
        <Link href="/">Blog.</Link>
      </p>
      <div className="nav">
        <div className="inline-block px-5 text-gray-700 hover:text-gray-500">
          <Link href="/post/">Docs</Link>
        </div>
        <div className="inline-block px-5 text-gray-700 hover:text-gray-500">
          <Link href="/podcast">Podcast</Link>
        </div>
        <div className="inline-block pl-5 text-gray-700 hover:text-gray-500">
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
