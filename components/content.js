// import { Box } from "./box";
import {
	cunas_links,
	entrevista_links,
	historia_links,
	podcast_links,
	piloto_links,
} from "./content/utils";
import Card from "./card";
import Link from "next/link";

export const Content = () => {
	return (
		<>
			<div className="border border-[#f1c40f] p-5 text-[#f1c40f] my-3">
				Biosfera es un proyecto radial dedicado a la comunidad quindiana para
				sensibilizarlos de las diferentes problemáticas ambientales que rodean
				nuestra región, a través de diferentes secciones con un mismo fin,
				informar, entretener, educar todo plasmado por manos universitarias.
			</div>
			<div className="grid grid-cols-3 grid-flow-row gap-5 ">
				<div className="h-[23vh] bg-[url('https://globalnews.ca/wp-content/uploads/2017/09/2017-09-06t192926z_1725706480_rc143f793c70_rtrmadp_3_storm-irma.jpg?quality=85&strip=all&w=1200')] bg-cover bg-center ounded-md">
					<Card title="Cuñas" links={cunas_links} />
				</div>
				<div className="h-[23vh] bg-[url('https://www.greenpeace.org/static/planet4-argentina-stateless/2022/05/edb11d3b-gpa-animales-incendios-corrientes-credito-emilio-white-7-1024x683.jpg')] bg-cover bg-center ounded-md">
					<Card title="Entrevistas" links={entrevista_links} />
				</div>
				<div className="h-[23vh] bg-[url('https://www.iagua.es/sites/default/files/styles/thumbnail-830x455/public/inundaciones-en-nueva-orleans.jpg?itok=4FOS_Q3a')] bg-cover bg-center ounded-md">
					<Link href="/articles/revista">
						<div className="h-full w-full flex text-[#f1c40f] text-center justify-center content-center items-center backdrop-blur-sm backdrop-grayscale hover:backdrop-blur-0 hover:backdrop-grayscale-0 transition-all duration-300 ease-out cursor-pointer ounded-md">
							<h3 className="text-3xl font-bold capitalize text-[#f1c40f]">
								Radio Revista
							</h3>
						</div>
					</Link>
				</div>
				<div className="h-[23vh] bg-[url('https://www.greenpeace.org/static/planet4-argentina-stateless/2022/05/05e4de61-gp1sub2v_medium_res_with_credit_line-1024x683.jpg')] bg-cover bg-center ounded-md">
					<Card title="Podcast" links={podcast_links} />
				</div>
				<div className="h-[23vh] bg-[url('https://yaleclimateconnections.org/wp-content/uploads/2022/06/0719_wildfire.jpg')] bg-cover bg-center ounded-md">
					<Link href="/articles/cronica">
						<div className="h-full w-full flex text-[#f1c40f] text-center justify-center content-center items-center backdrop-blur-sm backdrop-grayscale hover:backdrop-blur-0 hover:backdrop-grayscale-0 transition-all duration-300 ease-out cursor-pointer ounded-md">
							<h3 className="text-3xl font-bold capitalize text-[#f1c40f]">
								Crónica
							</h3>
						</div>
					</Link>
				</div>
				<div className="h-[23vh] bg-[url('https://cnr.ncsu.edu/news/wp-content/uploads/sites/10/2020/09/fire.stock_.featured.p1.jpg')] bg-cover bg-center ounded-md">
					<Card title="HCES" links={historia_links} />
				</div>
				<div className="h-[23vh] bg-[url('https://www.greenpeace.org/static/planet4-argentina-stateless/2022/05/75d146b2-gp0stur30-1024x641.jpg')] bg-cover bg-center ounded-md">
					<Card title="Programa Piloto" links={piloto_links} />
				</div>
				<div className="h-[23vh] bg-[url('https://www.iagua.es/sites/default/files/styles/thumbnail-830x455/public/inundaciones-en-nueva-orleans.jpg?itok=4FOS_Q3a')] bg-cover bg-center ounded-md">
					<Link href="/articles/radio">
						<div className="h-full w-full flex text-[#f1c40f] text-center justify-center content-center items-center backdrop-blur-sm backdrop-grayscale hover:backdrop-blur-0 hover:backdrop-grayscale-0 transition-all duration-300 ease-out cursor-pointer ounded-md">
							<h3 className="text-3xl font-bold capitalize text-[#f1c40f]">
								Noticiero Radiofonico
							</h3>
						</div>
					</Link>
				</div>
				<div className="h-[23vh] bg-[url('https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/news/eyes.jpg?itok=R-Z0RvBS')] bg-cover bg-center ounded-md">
					<Link href="/articles/reportaje">
						<div className="h-full w-full flex text-[#f1c40f] text-center justify-center content-center items-center backdrop-blur-sm backdrop-grayscale hover:backdrop-blur-0 hover:backdrop-grayscale-0 transition-all duration-300 ease-out cursor-pointer ounded-md">
							<h3 className="text-3xl font-bold capitalize text-[#f1c40f]">
								Reportaje
							</h3>
						</div>
					</Link>
				</div>
				<div className="col-span-full h-[23vh] bg-[url('https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/news/eyes.jpg?itok=R-Z0RvBS')] bg-cover bg-center ounded-md">
					<Link href="/articles/proyectos">
						<div className="h-full w-full flex text-[#f1c40f] text-center justify-center content-center items-center backdrop-blur-sm backdrop-grayscale hover:backdrop-blur-0 hover:backdrop-grayscale-0 transition-all duration-300 ease-out cursor-pointer ounded-md">
							<h3 className="text-3xl font-bold capitalize text-[#f1c40f]">
								Proyectos
							</h3>
						</div>
					</Link>
				</div>
			</div>
			<p className="tex-sm text-gray-300 italic">
				Fotos tomadas de:{" "}
				<a
					href="https://www.greenpeace.org/colombia/"
					className="text-sky-300 underline hover:text-sky-500"
				>
					Greenpeace
				</a>
			</p>
		</>
	);
};

export default Content;
