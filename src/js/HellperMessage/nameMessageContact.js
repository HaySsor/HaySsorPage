import welcomeMessage from "./messageFunction.js";

const name = localStorage.getItem("Name");

(async () => {
	await welcomeMessage(
		`${name.charAt(0).toUpperCase() + name.slice(1)} tu jest do mnie kontakt,`,
		0
	);
	await welcomeMessage(`oczywiście jest on też na moim CV.`, 3000);
	await welcomeMessage(`Mam nadzieję, że do zobaczenie niedługo! 👋`, 3000);
})();
