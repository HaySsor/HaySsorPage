import welcomeMessage from "./messageFunction.js";

const name = localStorage.getItem("Name");

(async () => {
	await welcomeMessage(
		`Cześć ${
			name.charAt(0).toUpperCase() + name.slice(1)
		}! Miło mi, że odwiedzasz moją stronę. `,
		0
	);
	await welcomeMessage(`Tu znajdziesz najważniejsze informacje o mnie.`, 3000);
})();
