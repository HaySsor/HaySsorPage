import welcomeMessage from "./messageFunction.js";

(async () => {
	await welcomeMessage("Na górze są moje projekty i krótki opis ", 0);
	await welcomeMessage(
		`Na dole jest kilka zadań które robiłem podczas kursu`,
		3000
	);

	await welcomeMessage("Wiecej jest na moim GitHubie ", 3000);
	await welcomeMessage("Link jest w zakładce konatkt :) ", 3000);
})();
