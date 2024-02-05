import "./styles.css";

const BackgroundLayer = () => {
	return <div className="background" />;
};

const TextLayer = () => {
	return <p className="text">Alice's Adventures in Wonderland</p>;
};

export default function Home() {
	return (
		<div className="flex w-full h-full justify-center items-center">
			<TextLayer />
			<BackgroundLayer />
		</div>
	);
}
