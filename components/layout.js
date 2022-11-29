// import Footer from "./footer";
// import Navbar from "./navbar";

export default function Layout({ children }) {
	return (
		<>
			{/* <Navbar /> */}
			<main className="container mx-auto px-16 pt-2">
				<p className="text-6xl text-center font-normal font-special text-white">
					(!BIO+SFERA)
				</p>
				{children}
				<p className="text-center italic font-serif text-white">
					Cuidar o Morir, tu decides cuidar o desaparecer.
				</p>
			</main>
			{/* <Footer /> */}
		</>
	);
}
