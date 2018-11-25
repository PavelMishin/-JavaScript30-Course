window.addEventListener('keydown', playTheSound); // On each key press

const instruments = document.querySelectorAll('.instrument');
instruments.forEach(instrument => instrument.addEventListener('transitionend', backToDefault)); // On the end of transition remove playing style
instruments.forEach(instrument => instrument.addEventListener('click', playTheSound)); // Play sound on click


function backToDefault(e) {
	if (e.propertyName !== 'transform') return; // if transition not transform property skip it
	this.classList.remove('playing');
}

function playTheSound(e) {
	let key;
    // Getting pressed key code
	if (e.type === 'click') {
		key = e.target.parentNode.dataset.key;
	} else {
		key = e.keyCode;
	}

	const selector = `[data-key="${key}"]`;
	const audio = document.querySelector(`audio${selector}`); // Get audio element
	const visual = document.querySelector(`.instrument${selector}`); // Get button element

	if (!audio) return;
	
	audio.play();
	audio.currentTime = 0; // Reset track playback time to start
	visual.classList.add('playing');
}