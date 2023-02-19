const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const redlabel = document.getElementById("redlabel");
const greenlabel = document.getElementById("greenlabel");
const bluelabel = document.getElementById("bluelabel");
const cont = document.getElementById("container");
const hex = document.getElementById("hex");

function valueToHex(c) {
  let hex = c.toString(16);
  return hex;
}

// convert one rgb to hex
function rgbToHex(r, g, b) {
  return valueToHex(r) + valueToHex(g) + valueToHex(b);
}

let rgb = {
  red: 0,
  green: 0,
  blue: 0,
};

function colorBackground() {
  document.body.style.background = `rgba(${rgb.red}, ${rgb.green} , ${rgb.blue})`;
  cont.style.background = `rgb (${rgb.red}, ${rgb.green} , ${rgb.blue}) `;
  hex.innerText = `#${rgbToHex(rgb.red, rgb.green, rgb.blue)}`;
}

red.addEventListener("input", (e) => {
  redlabel.innerText = `${e.target.value}%`;
  //   console.log(Math.round(255 * e.target.value) / 100);
  let percentValue = e.target.value / 100;
  rgb.red = Math.round(255 * percentValue);
  colorBackground();
});

green.addEventListener("input", (e) => {
  greenlabel.innerText = `${e.target.value}%`;
  //   console.log(Math.round(255 * e.target.value) / 100);
  let percentValue = e.target.value / 100;
  rgb.green = Math.round(255 * percentValue);
  colorBackground();
});

blue.addEventListener("input", (e) => {
  bluelabel.innerText = `${e.target.value}%`;
  //   console.log(Math.round(255 * e.target.value) / 100);
  let percentValue = e.target.value / 100;
  rgb.blue = Math.round(255 * percentValue);
  colorBackground();
});
// kopirovani barvy
hex.addEventListener("click", () => {
  console.log(hex.innerText);
  navigator.clipboard.writeText(hex.innerText);
  console.log(navigator.clipboard.readText());
  alert(`${hex.innerText} has been copied to clipboard`);
});
