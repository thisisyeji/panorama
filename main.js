const circle = document.querySelector(".circle");
const articles = document.querySelectorAll("article");

for (let article of articles) {
    article.addEventListener("mouseenter", () => {
        circle.style.animationPlayState = "paused";
    })

    article.addEventListener("mouseleave", () => {
        circle.style.animationPlayState = "running";
    })
}