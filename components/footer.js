const Footer = () => {
	return (
		<div className="text-center inline-flex justify-center content-center items-center gap-20">
			<a href="https://www.uniquindio.edu.co/" className="w-2/6">
				<img src="/comunicacion.png" alt="logo comunicacion" />
			</a>
			<div className="logo flex flex-col justify-center content-center items-center gap-2">
				<a
					rel="license"
					href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
				>
					<img
						alt="Licencia Creative Commons"
						style={{ borderWidth: 0 }}
						src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
					/>
				</a>
				<div className="text-sm text-[#f1c40f]">Copyright © 2022 Biosfera.</div>
			</div>
		</div>
	);
};

export default Footer;
