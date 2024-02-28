const Scene1 = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center p-4 bg-lime-200">
			<p>
				Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or
				twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and
				what is the use of a book,” thought Alice “without pictures or conversations?”
			</p>
		</div>
	);
};

const Scene2 = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center p-4 bg-indigo-400">
			<p>
				So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and
				stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the
				daisies, when suddenly a White Rabbit with pink eyes ran close by her.
			</p>
		</div>
	);
};

export default function Chapter() {
	return (
		<div>
			<Scene1 />
			<Scene2 />
			<Scene1 />
			<Scene2 />
		</div>
	);
}
