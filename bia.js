const buttons = document.querySelectorAll('.word-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('clicked');
    });
});
