const textinput = document.querySelector('#textinput');
const output = document.querySelector('#output');
textinput.addEventListener(
    "keydown",
    (e) => (output.textContent = `Pressionaste "${e.key}".`)
);