import welcomeMessage from "./messageFunction.js";

(async () => {
	await welcomeMessage("Na górze są moje projekty i ich krótki opis. ", 0);
	await welcomeMessage(
		`Na dole znajdziesz kilka zadań, które robiłem podczas kursu.`,
		3000
	);

	await welcomeMessage("Wiecej jest na moim GitHubie, ", 3000);
	await welcomeMessage("link umieściłem w zakładce kontakt :) ", 3000);
})();
