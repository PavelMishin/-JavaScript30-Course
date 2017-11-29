const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function getTime() {
	const now = new Date();
	const sec = now.getSeconds();
	const secDeg = sec * 6 + 90;
	const min = now.getMinutes();
	const minDeg = min * 6 + 90 + 6 * sec / 60;
	const h = now.getHours();
	const hDeg = h % 12 * 30 + 90 + 30 * min / 60;
	secondHand.style.transform = `rotate(${secDeg}deg)`;
	minuteHand.style.transform = `rotate(${minDeg}deg)`;
	hourHand.style.transform = `rotate(${hDeg}deg)`;
}


setInterval(getTime, 1000);