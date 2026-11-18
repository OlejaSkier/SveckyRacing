(() => {
    "use strict";
    const images = [
        "./ratrak.jpg",
        "./shlift.jpg",
        "./skier.jpg",
        "./snow.jpeg",
        "./stanok.jpeg",
        "./night.jpg"
    ];
    const image = document.getElementById("main-image");
    if (!image || images.length < 2) return;

    let index = 0;
    window.setInterval(() => {
        index = (index + 1) % images.length;
        image.classList.add("is-changing");
        const nextImage = new Image();
        nextImage.onload = () => {
            image.src = images[index];
            image.classList.remove("is-changing");
        };
        nextImage.onerror = () => image.classList.remove("is-changing");
        nextImage.src = images[index];
    }, 3500);
})();
