// definnig the variables for building the navbar
const sections = document.querySelectorAll("section");
const navMenu = document.querySelector("#navbar__list");

// a fragment for improving the performance of the build process
const fragment = document.createDocumentFragment();


// building the navbar
function buildNavListItems() {
    for (const section of sections) {
        const navListItem = document.createElement("li");
        navListItem.innerHTML = `<a href='#${section.id}' class='menu__link'>${section.dataset.nav}</a>`;

        fragment.appendChild(navListItem);
    }

    navMenu.appendChild(fragment);
}
window.addEventListener("load", buildNavListItems);


// Add class 'active' to section and the navbar links when near top of viewport
function setActive() {
    const links = document.querySelectorAll("a.menu__link");
    for (const section of sections) {
        if (
            section.getBoundingClientRect().top <= 500 &&
            section.getBoundingClientRect().top >= -50
        ) {
            section.classList.add("your-active-class");
            links.forEach((link) => {
                if (link.textContent === section.dataset.nav) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        } else {
            section.classList.remove("your-active-class");
        }
    }
}
window.addEventListener("scroll", setActive);