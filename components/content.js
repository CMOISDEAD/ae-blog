// import { Box } from "./box";
import {
	cunas_links,
	entrevista_links,
	historia_links,
	podcast_links,
	radio_links,
} from "./content/utils";
import Card from "./card";
import Link from "next/link";

export const Content = () => {
	return (
		<div className="flex flex-row gap-5">
			<div className="flex flex-col flex-wrap gap-4 w-[30vw]">
				<div className="h-[42vh] bg-[url('https://globalnews.ca/wp-content/uploads/2017/09/2017-09-06t192926z_1725706480_rc143f793c70_rtrmadp_3_storm-irma.jpg?quality=85&strip=all&w=1200')] bg-cover bg-center ounded-md">
					<Card title="Cunas" links={cunas_links} />
				</div>
				<div className="h-[41vh] bg-[url('https://www.greenpeace.org/static/planet4-argentina-stateless/2022/05/edb11d3b-gpa-animales-incendios-corrientes-credito-emilio-white-7-1024x683.jpg')] bg-cover bg-center ounded-md">
					<Card title="Entrevistas" links={entrevista_links} />
				</div>
			</div>
			<div className="flex flex-col flex-wrap gap-4 w-[30vw]">
				<div className="h-[23vh] bg-[url('https://www.greenpeace.org/static/planet4-argentina-stateless/2022/05/05e4de61-gp1sub2v_medium_res_with_credit_line-1024x683.jpg')] bg-cover bg-center ounded-md">
					<Card title="Podcast" links={podcast_links} />
				</div>
				<div className="h-[23vh] bg-[url('https://yaleclimateconnections.org/wp-content/uploads/2022/06/0719_wildfire.jpg')] bg-cover bg-center ounded-md">
					<Link href="/articles/cronica">
						<div className="h-full w-full flex text-white text-center justify-center content-center items-center backdrop-blur-sm backdrop-grayscale hover:backdrop-blur-0 hover:backdrop-grayscale-0 transition-all duration-300 ease-out cursor-pointer ounded-md">
							<h3 className="text-3xl font-bold font-serif uppercase text-white">
								Cronica
							</h3>
						</div>
					</Link>
				</div>
				<div className="h-[35vh] bg-[url('https://cnr.ncsu.edu/news/wp-content/uploads/sites/10/2020/09/fire.stock_.featured.p1.jpg')] bg-cover bg-center ounded-md">
					<Card title="HCFS" links={historia_links} />
				</div>
			</div>
			<div className="flex flex-col flex-wrap gap-4 w-[30vw]">
				<div className="h-[46vh] bg-[url('https://www.greenpeace.org/static/planet4-argentina-stateless/2022/05/75d146b2-gp0stur30-1024x641.jpg')] bg-cover bg-center ounded-md">
					<Card title="Microformatos" links={[]} />
				</div>
				<div className="h-[22vh] bg-[url('https://www.iagua.es/sites/default/files/styles/thumbnail-830x455/public/inundaciones-en-nueva-orleans.jpg?itok=4FOS_Q3a')] bg-cover bg-center ounded-md">
					<Card title="Radio" links={radio_links} />
				</div>
				<div className="h-[12vh] bg-[url('https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/news/eyes.jpg?itok=R-Z0RvBS')] bg-cover bg-center ounded-md">
					<Link href="/acerca">
						<div className="h-full w-full flex text-white text-center justify-center content-center items-center backdrop-blur-sm backdrop-grayscale hover:backdrop-blur-0 hover:backdrop-grayscale-0 transition-all duration-300 ease-out cursor-pointer ounded-md">
							<h3 className="text-3xl font-bold font-serif uppercase text-white">
								Acerca
							</h3>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Content;
