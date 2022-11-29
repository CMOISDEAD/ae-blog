export default function Header() {
	return (
		<div className="mb-5">
			<div
				className="flex flex-col align-center justify-center text-center backdrop-blur-sm bg-[url('/mountain.jpg')] bg-cover bg-center bg-fixed"
				style={{ height: "89vh" }}
			>
				<div className="text-5xl font-semibold mb-5 text-zinc-100">Blog</div>
				<div className="text-zinc-300 italic">
					Amet dolores enim alias fuga voluptatem accusantium? Accusantium at
					numquam tenetur iusto sapiente, similique sed aperiam totam Accusamus
					in enim beatae aperiam exercitationem. Sed dicta quisquam sunt dolor
					commodi laboriosam
				</div>
			</div>
			<p className="text-sm text-center">Scroll down</p>
		</div>
	);
}
