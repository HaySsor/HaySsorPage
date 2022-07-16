import welcomeMessage from "./messageFunction.js";

const name = localStorage.getItem("Name");

(async () => {
	await welcomeMessage(`Miło mi że tu jesteś`, 0);
	await welcomeMessage(`to oznacza że spodobała ci się moja strona 😁`, 3000);
	await welcomeMessage(`może do zobaczenie niedługo 👋`, 3000);
})();
