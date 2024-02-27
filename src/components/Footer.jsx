export default function Footer() {
	return (
		<>
			<footer className="h-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 items-center justify-center">
				<div className="mt-28 flex flex-1 md:flex-row md:justify-between items-center text-sm text-gray-400">
					<p className="order-2 md:order-1 mt-8 md:mt-0">
						Challenge by
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
							style={{ marginLeft: ".5rem" }}
							className="link"
						>
							Frontend Mentor
						</a>
						. Code by
						<a
							href="https://lindseyk.dev"
							style={{ marginLeft: ".5rem" }}
							className="link"
						>
							Lindsey H
						</a>
						. | Made with
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
							className="icon"
						/>
					</p>
				</div>
			</footer>
		</>
	);
}
