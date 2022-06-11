const message = document.querySelector(".user-name");

function wellcome() {
	const name = localStorage.getItem("Name");
	console.log(name);
	message.textContent = name;
	setTimeout(() => {
		message.textContent = "Do zobaczenia za chwilkę";
	}, 18000);
}

wellcome();
