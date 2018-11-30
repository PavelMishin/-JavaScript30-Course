let clock = document.getElementsByClassName('clock-face')[0];
let marks = [];

for (let deg = 0; deg < 360; deg += 30) {
    let mark = document.createElement('div');
    mark.classList.add('mark');

    const x = 50 * Math.cos(toRadians(deg));
    const y = 50 * Math.sin(toRadians(deg));

    mark.style.left = 50 + x + '%';
    mark.style.top = 50 - y + '%';
    mark.style.transform = `rotate(-${deg}deg)`;
    clock.appendChild(mark);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function getTime() {
	const now = new Date();

	const sec = now.getSeconds();
	const secDeg = sec * 6 + 90;
	const min = now.getMinutes();
	const minDeg = min * 6 + 90 + 6 * sec / 60;
	const hours = now.getHours();
	const hoursDeg = hours % 12 * 30 + 90 + 30 * min / 60;

	secondHand.style.transform = `rotate(${secDeg}deg)`;
	minuteHand.style.transform = `rotate(${minDeg}deg)`;
	hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}


setInterval(getTime, 1000);
