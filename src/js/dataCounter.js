function setTime() {
	const time = document.querySelector("[data-time]");
	const usersTime = "2022-01-01 00:00:00";
	let date = new Date(usersTime);
	const currentTime = new Date();

	if (Number.isNaN(date.getMonth())) {
		let arr = usersTime.split(/[- :]/);
		date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
	}
	const result = currentTime - date;

	const month = Math.floor(result / 1000 / 60 / 60 / 24 / 30);
	// const hours = Math.floor(result / 1000 / 60 / 60) % 24;
	// const minuts = Math.floor(result / 1000 / 60) % 60;
	// const seconds = Math.floor(result / 1000) % 60;

	time.textContent = `${month} miesięcy`;
}

setInterval(setTime, 1000);
