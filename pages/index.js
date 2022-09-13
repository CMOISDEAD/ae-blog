import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Main blog page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </Layout>
  );
}
