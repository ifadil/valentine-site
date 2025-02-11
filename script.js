function answerYes() {
    window.location.href = "yes.html";
}

function answerNo() {
    let noButton = document.querySelector(".buttons button:last-child");
    let randomX = Math.floor(Math.random() * 200) - 100;
    let randomY = Math.floor(Math.random() * 200) - 100;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
