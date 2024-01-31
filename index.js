document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#aboutme"]');

    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();

        const aboutSection = document.getElementById("aboutme");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToContinue = document.querySelector('.learnmore');

    scrollToContinue.addEventListener("click", function () {
        const aboutSection = document.getElementById("aboutme");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToContinue = document.querySelector('.learnmore');
    const homeLink = document.getElementById('homelink');

    scrollToContinue.addEventListener("click", function () {
        const aboutSection = document.getElementById("aboutme");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#resume"]');

    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();

        const aboutSection = document.getElementById("resume");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#projects"]');

    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();

        const aboutSection = document.getElementById("projects");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#contact"]');

    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();

        const aboutSection = document.getElementById("contact");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

