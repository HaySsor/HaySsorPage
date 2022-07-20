import welcomeMessage from "./messageFunction.js";

const name = localStorage.getItem("Name");

(async () => {
	await welcomeMessage(
		`${name.charAt(0).toUpperCase() + name.slice(1)} tu masz kontakt do mnie  `,
		0
	);
	await welcomeMessage(`oczywiście jest on też na moim CV`, 3000);
	await welcomeMessage(`może do zobaczenie niedługo 👋`, 3000);
})();
