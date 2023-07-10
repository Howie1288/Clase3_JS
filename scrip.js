const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');

textBox.addEventListener('keydown', (e) => {
    output.textContent = `Presionaste "${e.key}".`;
});
