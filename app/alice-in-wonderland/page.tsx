import "./styles.css";

const BackgroundLayer = () => {
	return <div className="background" />;
};

const BackdropLayer = () => {
	return <div className="backdrop" />;
};

const TextLayer = () => {
	return <p className="text">Alice's Adventures in Wonderland</p>;
};

export default function Home() {
	return (
		<div className="flex w-full h-full justify-center items-center">
			<TextLayer />
			{/* <BackdropLayer /> */}
			<BackgroundLayer />
		</div>
	);
}
