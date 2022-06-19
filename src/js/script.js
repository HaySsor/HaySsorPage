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
const bodyIndex = document.querySelector('[data-body="index"]');
let UserName;

if (bodyIndex) {
	const inputName = document.querySelector("[data-name]");

	function hendleLocal() {
		const hendleUserName = localStorage.getItem("Name");
		const printName = document.querySelector("[data-user]");
		if (hendleUserName) {
			const link = document.querySelector("[data-link]");
			link?.classList.add("show-link");
			inputName.style.display = "none";
			printName.textContent = `${localStorage.getItem("Name")}`;
		}
	}
	hendleLocal();
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
				link?.classList.add("show-link");
				error.textContent = "";
			} else {
				error.textContent = "Oboje wiemy że nie jest to imie 👀";
				link?.classList.remove("show-link");
			}
		} else {
			link?.classList.remove("show-link");
			error.textContent = "Najpierw imie";
		}
	}
}

const bodyAboutMe = document.querySelector('[data-body="aboutme"]');

if (bodyAboutMe) {
	// about-me counter number
	const counterItems = document.querySelectorAll(
		".about-me__box-table--desktop-box-percent"
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

	setTimeout(() => {
		startCounter();
		startFill();
	}, 6000);

	setTimeout(() => {
		const hellper = document.querySelector(".hellper");
		hellper.style.opacity = "0";
	}, 5000);
}

const bodyPortfolio = document.querySelector('[data-body="portfolio"]');

if (bodyPortfolio) {
	const allExitButtons = document.querySelectorAll("[data-exit]");
	allExitButtons.forEach(button => {
		button.addEventListener("click", event => {
			const codeWindow = event.target.parentElement.nextElementSibling;
			codeWindow.classList.add("hidden-code");
		});
	});
	const allShowButtons = document.querySelectorAll("[data-full]");
	allShowButtons.forEach(button => {
		button.addEventListener("click", event => {
			const codeWindow = event.target.parentElement.nextElementSibling;
			codeWindow.classList.remove("hidden-code");
		});
	});
	const allMiniButtons = document.querySelectorAll("[data-mini]");
	allMiniButtons.forEach(button => {
		button.addEventListener("click", event => {
			const codeWindow = event.target.parentElement.parentElement;
			const codeWindowText = event.target.parentElement.nextElementSibling;
			console.log(codeWindow);
			codeWindow.classList.toggle("mini-code");
			codeWindowText.classList.toggle("hidden-code");
		});
	});
	setTimeout(() => {
		const hellper = document.querySelector(".hellper");
		hellper.style.opacity = "0";
	}, 22000);

	function ShowPortfolioProject() {
		const firstFoto = document.querySelector('[data-foto="first"]');
		const firstInfo = document.querySelector('[data-info="first-info"]');
		const secondtInfo = document.querySelector('[data-info="second-info"]');
		const secondtFoto = document.querySelector('[data-foto="second"]');

		if (window.scrollY > 1622) {
			firstFoto.classList.add("move-card");
			firstInfo.classList.add("move-card");
		}
		if (window.scrollY > 2052) {
			secondtInfo.classList.add("move-card");
			secondtFoto.classList.add("move-card");
		}
	}

	window.addEventListener("scroll", ShowPortfolioProject);
}
