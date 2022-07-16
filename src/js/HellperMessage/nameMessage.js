import welcomeMessage from "./messageFunction.js";

const name = localStorage.getItem("Name");

(async () => {
	await welcomeMessage(
		`Cześć ${
			name.charAt(0).toUpperCase() + name.slice(1)
		} miło mi że odwiedzasz moją strone `,
		0
	);
	await welcomeMessage(`Tu znajdziesz krótkie informacje o mnie`, 3000);
})();
