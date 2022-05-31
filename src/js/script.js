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
	const finger = document.querySelector(".header__mobile__box-finger a");
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
