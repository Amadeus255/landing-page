// definnig the variables for building the navbar
const sections = document.querySelectorAll("section");
const navMenu = document.querySelector("#navbar__list");

// a fragment for improving the performance of the build process
const fragment = document.createDocumentFragment();

/*building the navbar: I created a new li element to add it to the navabr for each section,
inside it i created a new a element and added the section-id for it
so when you click on the link it scrolls for the specified section,
added the class 'menu-link' for styling the links and inside the a element i added the section name using section.dataset.nav*/
function buildNavListItems() {
    for (const section of sections) {
        const navListItem = document.createElement("li");
        navListItem.innerHTML = `<a href='#${section.id}' data-section-id='${section.id}' class='menu__link'>${section.dataset.nav}</a>`;

        fragment.appendChild(navListItem);
    }

    navMenu.appendChild(fragment);
}
window.addEventListener("load", buildNavListItems);

/* Add class 'active' to section and the navbar links when near top of viewport: Used getBoundingClientRect() as specified in the project rubric,
to make the section and the link active at the same time using the your-active-class styling for sections and the active styling for links,
I set the bounding to between 500 and -50 because that was the best while testing it.*/
function setActive() {
    const links = document.querySelectorAll("a");
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

//used scrollIntoView to scroll to a section when a link is clicked.
navMenu.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.dataset.sectionId) {
        document.getElementById(event.target.dataset.sectionId).scrollIntoView({ behavior: "smooth" });
    }
});
