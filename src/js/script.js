
function MobileAboutMeButtons(){
	const allAbloutMeButtons = document.querySelectorAll('.about-me__info-button')

	function clearOpenedAcordeon(){
		const infoBoxs = document.querySelectorAll('.about-me__info-button-info')
		infoBoxs.forEach(textbox =>{
			textbox.classList.remove('active-button')
		})
	}

	function openAcordeon(){
		text = this.nextElementSibling
		if (text.classList.contains("active-button")) {
			text.classList.remove("active-button");
		} else {
			clearOpenedAcordeon()
			text.classList.toggle("active-button");
		}
	}
	
	allAbloutMeButtons.forEach(button =>{
		button.addEventListener('click',openAcordeon)
	})
}

MobileAboutMeButtons()


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




