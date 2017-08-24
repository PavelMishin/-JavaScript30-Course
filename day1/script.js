window.addEventListener('keydown', playTheSound);

const instruments = document.querySelectorAll('.instrument');
instruments.forEach(instrument => instrument.addEventListener('transitionend', backToDefault));


function backToDefault(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

function playTheSound(e) {
	const key = e.keyCode; // Получаем код нажимаемой клавиши
	const selector = `[data-key="${key}"]`;
	const audio = document.querySelector(`audio${selector}`);
	const visual = document.querySelector(`.instrument${selector}`);

	if (!audio) return;
	
	audio.play(); // Проигрываем звук
	audio.currentTime = 0; // Сбрасываем playback звука, чтобы не ждать пока файл проиграется до конца
	visual.classList.add('playing');
}