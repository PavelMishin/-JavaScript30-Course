const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', changeCssVariable);
});

function changeCssVariable() {
    const units = this.dataset.units || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + units);
}
