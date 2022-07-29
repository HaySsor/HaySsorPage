import welcomeMessage from "./messageFunction.js";

(async () => {
	await welcomeMessage(`Cześć, jestem Kacper Duszek i jestem tu po to, `, 0);
	await welcomeMessage("aby Cię oprowadzić po mojej stronie.", 3000);
	await welcomeMessage("Zanim zaczniemy, wpisz swoje imię.", 2500);
})();
