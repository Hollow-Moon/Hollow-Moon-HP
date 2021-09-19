//  Navbar scroll behaviour
const navbar = document.querySelector("#navbar");

const observer = new IntersectionObserver(function(entries, _) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    })
}, {
    threshold: [1],
});

observer.observe(navbar);