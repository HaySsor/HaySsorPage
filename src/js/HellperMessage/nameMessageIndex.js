import welcomeMessage from "./messageFunction.js";

(async () => {
	await welcomeMessage(`Cześć, jestem Kacper duszek i jestem tu po to `, 0);
	await welcomeMessage("aby ciebie oprowadzić po mojej stronie", 3000);
	await welcomeMessage("zanim zaczniemy ", 3000);
	await welcomeMessage("proszę, abyś wpisał swoje imię ", 3000);
})();
