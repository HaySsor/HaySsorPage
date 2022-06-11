function MobileAboutMeButtons() {
	const allAbloutMeButtons = document.querySelectorAll(
		".about-me__info-button"
	);

	function clearOpenedAcordeon() {
		const infoBoxs = document.querySelectorAll(".about-me__info-button-info");
		infoBoxs.forEach(textbox => {
			textbox.classList.remove("active-button");
		});
	}

	function openAcordeon() {
		text = this.nextElementSibling;
		if (text.classList.contains("active-button")) {
			text.classList.remove("active-button");
		} else {
			clearOpenedAcordeon();
			text.classList.toggle("active-button");
		}
	}

	allAbloutMeButtons.forEach(button => {
		button.addEventListener("click", openAcordeon);
	});
}
MobileAboutMeButtons();

function MobilePorftolioButtons() {
	const allporftolioButtons = document.querySelectorAll(
		".portfolio-mobile__contener-box-button"
	);
	const allPorftolioText = document.querySelectorAll(
		".portfolio-mobile__contener-box-info"
	);

	function clear(array, cl) {
		array.forEach(element => {
			element.classList.remove(cl);
		});
	}

	allporftolioButtons.forEach(button => {
		button.addEventListener("click", () => {
			const text = button.nextElementSibling;

			if (button.matches(".active-portfolio")) {
				button.classList.remove("active-portfolio");
				text.classList.remove("active-portfolio-info");
			} else {
				clear(allporftolioButtons, "active-portfolio");
				clear(allPorftolioText, "active-portfolio-info");
				button.classList.add("active-portfolio");
				text.classList.add("active-portfolio-info");
			}
		});
	});
}

MobilePorftolioButtons();

function delay(URL) {
	const unlock = document.querySelector('[data="unlock"]');
	const finger = document.querySelector(".header-mobile__box-finger a");
	finger.classList.add("active");
	unlock.textContent = "Sprawdzanie";
	setTimeout(function () {
		unlock.textContent = "Udało się odblokować !";
		finger.classList.remove("active");
	}, 800);
	setTimeout(function () {
		window.location = URL;
	}, 1200);
}

//================================================ DEKSTOP JAVA-SCRIPT=========================================================

let UserName;

const inputName = document.querySelector("[data-name]");

inputName?.addEventListener("change", () => {
	takeUserName();
	showLinkToGo();
	setLocalItem();
});
function setLocalItem() {
	localStorage.setItem("Name", UserName);
}
function takeUserName() {
	UserName = inputName.value;
	console.log(UserName);
}
function showLinkToGo() {
	const link = document.querySelector("[data-link]");
	const error = document.querySelector(".error");
	if (UserName !== "") {
		if (/[a-zA-Z]/.test(UserName)) {
			link.classList.add("show-link");
			error.textContent = "";
		} else {
			error.textContent = "Oboje wiemy że nie jest to imie 👀";
			link.classList.remove("show-link");
		}
	} else {
		link.classList.remove("show-link");
		error.textContent = "Najpierw imie";
	}
}

// about-me counter number
const counterItems = document.querySelectorAll(
	".about-me__box-table--desktop-box-percent"
);
const counterBtn = document.querySelector(
	".about-me__box-table--desktop-button"
);

function startFill() {
	const html = document.querySelector(".desktop-html");
	const css = document.querySelector(".desktop-css");
	const sass = document.querySelector(".desktop-sass");
	const js = document.querySelector(".desktop-js");
	const react = document.querySelector(".desktop-react");

	html.style.height = "90" + "%";
	css.style.height = "80" + "%";
	sass.style.height = "80" + "%";
	js.style.height = "75" + "%";
	react.style.height = "40" + "%";
}

function startCounter() {
	counterItems.forEach(counter => {
		function ubdateCounter() {
			const finalNumber = counter.getAttribute("data-number");
			const value = parseInt(counter.textContent);
			const speed = finalNumber / 30;

			if (value < finalNumber) {
				counter.textContent = `${Math.floor(value + speed)}`;
				setTimeout(ubdateCounter, 10);
			} else {
				counter.textContent = `${finalNumber}%`;
			}
		}

		ubdateCounter();
	});
}

counterBtn?.addEventListener("click", () => {
	startCounter();
	startFill();
});

// ====================helllper========================

setTimeout(() => {
	const hellper = document.querySelector(".hellper");
	hellper.style.opacity = "0";
}, 20000);
