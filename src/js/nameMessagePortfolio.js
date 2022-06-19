const message = document.querySelector(".user-name");

function wellcome() {
	const name = localStorage.getItem("Name");
	message.textContent = `Tutaj jest kilka zadań które robiłem podczas kurus`;
	setTimeout(() => {
		message.textContent = "po prawej treść zadania";
	}, 4000);
	setTimeout(() => {
		message.textContent = "po lewej kod do tego zadania";
	}, 8000);
	setTimeout(() => {
		message.textContent = "Na dole zaś już moje projekty ";
	}, 12000);
	setTimeout(() => {
		message.textContent = "Wiecej jest na moim GitHubie ";
	}, 16000);
	setTimeout(() => {
		message.textContent = "Link jest na dole lub w zakładce konatkt :) ";
	}, 20000);
}

wellcome();
