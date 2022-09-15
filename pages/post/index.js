import Link from "next/link";
import Layout from "../../components/layout";

const posts = [
  {
    title: "What is JWT?",
    link: "/post/what_is_jwt",
  },
  {
    title: "SSR with Next.js?",
    link: "/post/what_is_jwt",
  },
];

export default function Posts() {
  return (
    <Layout>
      <div>
        <ul>
          {posts.map((post) => {
            return (
              <li className="text-sky-500 hover:text-sky-600">
                <Link href={post.link}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
