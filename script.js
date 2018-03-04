var color1 = document.querySelector('input[name="color1"]');
var color2 = document.querySelector('input[name="color2"]');
var h3 = document.querySelector('#destinationtext');
var random = document.querySelector('#random');
var body = document.querySelector('body');

(() => {
    h3.innerText = `color: ${color1.value} - color2: ${color2.value}`;
})();

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.innerText = `color: ${color1.value} - color2: ${color2.value}`;
}
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

random.addEventListener('click', () => {
  color1.value ='#' + Math.random().toString(16).slice(2, 8).toUpperCase();
  color2.value = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.innerText = `color: ${color1.value} - color2: ${color2.value}`;
});
