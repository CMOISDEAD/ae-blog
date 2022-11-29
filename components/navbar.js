import Link from "next/link";

export default function Navbar() {
	const navLinks = [
		{
			name: "Cunas",
			route: "/cunas",
		},
		{
			name: "Entrevistas",
			route: "/entrevistas",
		},
		{
			name: "Radio Revista",
			route: "/radio-revista",
		},
		{
			name: "Podcasts",
			route: "/podcast",
		},
		{
			name: "Historia con efectos de sonido",
			route: "/hceds",
		},
	];

	return (
		<div>
			<div className="flex flex-col justify-center content-center align-center text-center my-4 text-white">
				<p className="font-normal uppercase font-special text-8xl">
					<Link href="/">(!Bio+sfera)</Link>
				</p>
				<p className="text-sm">
					<span className="italic">Cuidar o Morir</span>
				</p>
			</div>
		</div>
	);
}
