import welcomeMessage from "./messageFunction.js";

const name = localStorage.getItem("Name");

(async () => {
	await welcomeMessage(`Miło mi, że tu jesteś`, 0);
	await welcomeMessage(`to oznacza, że spodobała Ci się moja strona. 😁`, 3000);
	await welcomeMessage(`Mam nadzieję, że do zobaczenie niedługo. 👋`, 3000);
})();
