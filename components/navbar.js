import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mb-6 flex justify-between content-center align-center px-3">
      <Link href="/">Blog</Link>
      <div className="nav">
        <div className="inline-block px-5">
          <Link href="/post/">Docs</Link>
        </div>
        <div className="inline-block px-5">
          <Link href="/podcast">Podcast</Link>
        </div>
        <div className="inline-block pl-5">
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
