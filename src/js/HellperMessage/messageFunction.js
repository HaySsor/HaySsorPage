function welcomeMessage(text, time) {
	const message = document.querySelector(".user-name");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			message.textContent = text;
			resolve();
		}, time);
	});
}


export default welcomeMessage