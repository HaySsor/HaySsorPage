const message = document.querySelector(".user-name");

function wellcome() {
	const name = localStorage.getItem("Name");
	message.textContent = `Cześć ${
		name.charAt(0).toUpperCase() + name.slice(1)
	} miło mi że odwiedzasz moją strone `;
	setTimeout(() => {
		message.textContent = "Do zobaczenia za chwilkę";
	}, 4000);
}

wellcome();
