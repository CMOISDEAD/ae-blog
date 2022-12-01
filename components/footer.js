const Footer = () => {
	return (
		<div className="text-center inline-flex justify-center content-center items-center gap-20">
			<img src="/logo.png" alt="logo uq" className="w-1/6" />
			<div class="logo flex flex-col justify-center content-center items-center gap-2">
				<div className="text-sm text-[#f1c40f]">Copyright © 2022 Biosfera.</div>
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
			</div>
		</div>
	);
};

export default Footer;
