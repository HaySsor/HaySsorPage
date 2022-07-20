import welcomeMessage from "./messageFunction.js";

(async () => {
	await welcomeMessage(`Cześć, jestem Kacper duszek i jestem tu po to `, 0);
	await welcomeMessage("aby ciebie oprowadzić po mojej stronie", 2500);
	await welcomeMessage("zanim zaczniemy ", 2500);
	await welcomeMessage("proszę, abyś wpisał swoje imię ", 2500);
})();
