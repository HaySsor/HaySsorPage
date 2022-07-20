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

//============================= DEKSTOP JAVA-SCRIPT=========================================================
const bodyIndex = document.querySelector('[data-body="index"]');
const header = document.querySelector(".header");

function showHint() {
	const questionMarks = document.querySelectorAll(".fa-question-circle");

	questionMarks.forEach(mark => {
		mark.addEventListener("mouseenter", () => {
			const modal = mark.parentElement.nextElementSibling;
			console.log(mark.parentElement.nextElementSibling);
			modal.classList.add("show-modal");
		});
		mark.addEventListener("mouseleave", () => {
			const modal = mark.parentElement.nextElementSibling;
			modal.classList.remove("show-modal");
		});
	});
}

let UserName;

if (bodyIndex) {
	const inputName = document.querySelector("[data-name]");

	function hendleLocal() {
		const hendleUserName = localStorage.getItem("Name");
		const hellper = document.querySelector(".hellper");
		const headerTitle = document.querySelector(
			".header-desktop__box-input-title"
		);
		const enter = document.querySelector(".header-desktop__box-input-link");
		const btn = document.querySelector('[data-btn="inputName"]');
		if (hendleUserName) {
			const link = document.querySelector("[data-link]");
			link.classList.add("show-link");
			header.classList.add("show-header");
			inputName.style.display = "none";
			hellper.style.opacity = "0";
			enter.style.display = "block";
			btn.style.display = "none";
			headerTitle.textContent = `${
				hendleUserName.charAt(0).toUpperCase() + hendleUserName.slice(1)
			}, wejdź do śrokda bo zmarzmiesz 🥶`;
		} else {
			setTimeout(() => {
				header.classList.add("show-header");
			}, 12000);
			setTimeout(() => {
				hellper.style.opacity = "0";
			}, 12000);
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
		const btn = document.querySelector('[data-btn="inputName"]');
		const error = document.querySelector(".error");
		const input = document.querySelector(".header-desktop__box-input-name");
		if (UserName !== "") {
			if (/[a-zA-Z]/.test(UserName)) {
				btn.classList.add("show-btn");
				input.classList.remove("error-input");
				error.textContent = "";
				showInfoIndexPage(btn);
			} else {
				error.textContent = "Oboje wiemy że nie jest to imie 👀";
				btn.classList.remove("show-btn");
				input.classList.add("error-input");
			}
		} else {
			btn.classList.remove("show-btn");
			input.classList.add("error-input");
			error.textContent = "Najpierw imie";
		}
	}
	const showInfoIndexPage = btn => {
		btn.addEventListener("click", () => {
			const info = document.querySelector(".header-desktop__box-info");
			const inputbox = document.querySelector(".header-desktop__box-input");
			const name = localStorage.getItem("Name");
			const userName = document.querySelector(".index-name");
			console.log(userName);

			userName.textContent = name.charAt(0).toUpperCase() + name.slice(1);
			inputbox.classList.add("hide-input");
			info.classList.add("show-info-card");
		});
	};
}

const bodyAboutMe = document.querySelector('[data-body="aboutme"]');

if (bodyAboutMe) {
	const mainAboutMe = document.querySelector('[data-main="aboutme"]');
	setTimeout(() => {
		mainAboutMe.style.opacity = "1";
	}, 5000);
	// about-me counter number
	const counterItems = document.querySelectorAll(
		".about-me__box-table--desktop-box-percent"
	);

	function startFill(language, procent) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				(item = document.querySelector(`.desktop-${language}`)),
					(item.style.height = `${procent}%`);
				resolve();
			}, 1000);
		});
	}

	counterItems.forEach(counter => {
		setTimeout(() => {
			function ubdateCounter() {
				const finalNumber = counter.getAttribute("data-number");
				const value = parseInt(counter.textContent);
				const speed = finalNumber / 20;

				if (value < finalNumber) {
					counter.textContent = `${Math.floor(value + speed)}`;
					setTimeout(ubdateCounter, 50);
				} else {
					counter.textContent = `${finalNumber}%`;
				}
			}
			ubdateCounter();
		}, 7000);
	});
	setTimeout(() => {
		(async () => {
			await startFill("html", 90);
			await startFill("css", 80);
			await startFill("sass", 80);
			await startFill("js", 75);
			await startFill("react", 40);
			// await startCounter();
		})();
	}, 6000);

	const hellper = document.querySelector(".hellper");
	hellper.addEventListener("dblclick", () => {
		const message = document.querySelector(".user-name");
		hellper.style.color = "tomato";
		hellper.style.opacity = "0";
		message.textContent = "Ała";
	});
	setTimeout(() => {
		hellper.style.opacity = "0";
	}, 6000);

	function DragCharacters() {
		const characteristics = document.querySelectorAll(".characteristics");
		const boxes = document.querySelectorAll(".drag-section__contener-box");
		const chosenBox = document.querySelector(
			".drag-section__contener-characteristics-box-good"
		);
		const charactersBox = document.querySelector(
			".drag-section__contener-characteristics-box"
		);

		characteristics.forEach(item => {
			item.addEventListener("dragstart", () => {
				item.classList.add("is-dragged");
			});
			item.addEventListener("dragend", () => {
				item.classList.remove("is-dragged");
			});
		});

		boxes.forEach(box => {
			box.addEventListener("dragover", e => {
				e.preventDefault();
				const isDragged = document.querySelector(".is-dragged");
				box.append(isDragged);
				characteresChosen();
				getChar();
			});
		});
		function characteresChosen() {
			const notChosenCharact =
				charactersBox.querySelectorAll(".characteristics");
			const text = document.querySelector(".drag-section-text");
			const btn = document.querySelector(".drag-section-btn");

			if (chosenBox.childElementCount > 6) {
				notChosenCharact.forEach(item => {
					item.setAttribute("draggable", "false");
					item.classList.add("characteristics-disabled");
					text.classList.add("show-text-btn");
					btn.classList.add("btn-show");
				});
			} else {
				notChosenCharact.forEach(item => {
					item.setAttribute("draggable", "true");
					item.classList.remove("characteristics-disabled");
					text.classList.remove("show-text-btn");
					btn.classList.remove("btn-show");
				});
			}
		}
	}

	DragCharacters();

	function getChar() {
		const goodBox = document.querySelector(
			".drag-section__contener-characteristics-box-good"
		);
		const chosencharacters = goodBox.querySelectorAll(".characteristics");
		const text = document.querySelector("[data-text-char]");
		const arr = [];
		chosencharacters.forEach(item => {
			arr.push(item.textContent);
		});

		text.textContent = arr.join(", ");
		text.style.fontWeight = "bold";
	}

	function showHint() {
		const questionMarks = document.querySelectorAll(".fa-question-circle");

		questionMarks.forEach(mark => {
			mark.addEventListener("mouseenter", () => {
				const modal = mark.parentElement.nextElementSibling;
				console.log(mark.parentElement.nextElementSibling);
				modal.classList.add("show-modal");
			});
			mark.addEventListener("mouseleave", () => {
				const modal = mark.parentElement.nextElementSibling;
				modal.classList.remove("show-modal");
			});
		});
	}
	showHint();
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
			const minicode = event.target.parentElement.parentElement;

			minicode.classList.remove("mini-code");
			codeWindow.classList.remove("hidden-code");
		});
	});
	const allMiniButtons = document.querySelectorAll("[data-mini]");
	allMiniButtons.forEach(button => {
		button.addEventListener("click", event => {
			const codeWindow = event.target.parentElement.parentElement;
			const codeWindowText = event.target.parentElement.nextElementSibling;

			codeWindow.classList.toggle("mini-code");
			codeWindowText.classList.toggle("hidden-code");
		});
	});
	const hellper = document.querySelector(".hellper");
	hellper.addEventListener("dblclick", () => {
		const message = document.querySelector(".user-name");
		hellper.style.color = "tomato";
		hellper.style.opacity = "0";
		message.textContent = "Ała";
	});
	setTimeout(() => {
		hellper.style.opacity = "0";
	}, 12000);

	function ShowPortfolioProject() {
		const box1 = document.querySelector(".box1");
		const box2 = document.querySelector(".box2");
		const box3 = document.querySelector(".box3");
		const box4 = document.querySelector(".box4");

		if (window.scrollY > 592) {
			box1.classList.add("move-card");
		} else {
			box1.classList.remove("move-card");
		}
		if (window.scrollY > 1200) {
			box2.classList.add("move-card");
		} else {
			box2.classList.remove("move-card");
		}
		if (window.scrollY > 1800) {
			box3.classList.add("move-card");
		} else {
			box3.classList.remove("move-card");
		}
		if (window.scrollY > 2400) {
			box4.classList.add("move-card");
		} else {
			box4.classList.remove("move-card");
		}
	}

	function changeImage(box, url) {
		const imgBox = document.querySelector(`.${box}`);

		imgBox.style.backgroundImage = `url(${url})`;
	}

	let i = 1;

	function imgRoller(delay, i) {
		setTimeout(() => {
			changeImage(
				"portfolio-desktop__projects-box-image",
				`../../dist/img/strona${i}.jpg`
			);
		}, delay);
	}
	setInterval(() => {
		imgRoller(500, i);
		i++;
		if (i > 8) {
			i = 1;
		}
	}, 3000);

	window.addEventListener("scroll", ShowPortfolioProject);
	showHint();
}

const cvBody = document.querySelector('[data-body="cv"]');

if (cvBody) {
	const conffetiBtn = document.querySelector('[data-button="confetti"]');
	const conffetiText = document.querySelector(".cv__contener-button-box-title");
	const conffetiBox = document.querySelector(".cv__contener-button-box");

	conffetiBtn.addEventListener("click", () => {
		party.confetti(conffetiBtn);
		conffetiText.textContent = "Yeey";
		conffetiBox.classList.add("happy");
	});

	const hellper = document.querySelector(".hellper");
	setTimeout(() => {
		hellper.style.opacity = "0";
	}, 9000);
}
// ===================================CONTACT==================================================

const contactBody = document.querySelector('[data-body="contact"]');

if (contactBody) {
	const btn = document.querySelector(".contact-wrapper__btn");

	const toggleOptions = () => {
		const wrapperEl = document.querySelector(".contact-wrapper");
		const iconEL = btn.querySelector("i");

		wrapperEl.classList.toggle("active");

		if (iconEL.classList.contains("fa-share-alt")) {
			iconEL.classList.replace("fa-share-alt", "fa-times");
		} else {
			iconEL.classList.replace("fa-times", "fa-share-alt");
		}
	};

	btn.addEventListener("click", toggleOptions);

	const emailCopy = document.querySelector(".contact-contener__box h3");
	const modal = document.querySelector(".contact-contener__box .modal");

	function copy() {
		navigator.clipboard.writeText("Hayss007@gmail.com");
	}

	emailCopy.addEventListener("click", () => {
		copy();
		modal.style.opacity = "1";
		setTimeout(() => {
			modal.style.opacity = "0";
		}, 500);
	});
	const hellper = document.querySelector(".hellper");
	setTimeout(() => {
		hellper.style.opacity = "0";
	}, 9000);
}
