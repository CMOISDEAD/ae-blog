import Head from "next/head";
import Layout from "../components/layout";
import Content from "../components/content";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Biosfera.</title>
				<meta name="description" content="Cuida o muere." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Content />
		</Layout>
	);
}
