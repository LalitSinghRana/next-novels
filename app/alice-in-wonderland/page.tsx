import "./styles.css";

const BackgroundLayer = () => {
	return (
		<div className="w-screen h-screen absolute">
			<div className="absolute w-full h-full opacity-40 backdrop-blur-[10px]">
				<div className="absolute w-full h-3/6 bg-gradient-to-t from-lime-200" />
				<div className="absolute w-full h-3/6 bottom-0 bg-gradient-to-b from-lime-200" />
			</div>
			<div className="background" />
		</div>
	);
};

const TextLayer = () => {
	return (
		<div className="w-full z-10 p-4 text-center drop-shadow-[0_0px_10px_rgba(255,255,255,1)]">
			<p className="font-['Love_Light'] text-9xl font-black">Alice's</p>
			<p className="font-['Comfortaa'] text-2xl font-black">Adventures in Wonderland</p>
		</div>
	);
};

export default function Home() {
	return (
		<div className="flex w-screen h-screen justify-center items-center">
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Love+Light&family=Comfortaa&display=swap" rel="stylesheet" />
			<TextLayer />
			<BackgroundLayer />
		</div>
	);
}
