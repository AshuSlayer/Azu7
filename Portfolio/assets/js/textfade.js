const texts = ["SCROLL", "CLICK ON COMPASS"];
let index = 0;

setInterval(() => {
    const fadeText = document.getElementById('fade-text');
    fadeText.style.opacity = 0;
    setTimeout(() => {
        fadeText.textContent = texts[index];
        fadeText.style.opacity = 1;
        index = (index + 1) % texts.length;
    }, 1000);
}, 5000);
