const projectShowcase = document.getElementById("project-showcase");

if (projectShowcase) {
    const activeItem = document.getElementById("active-item");
    const allItems = document.getElementById("all-items");
    let currentActiveItem = null;
    let timerCancelled = false;

    // Poll to check if the user is watching a video every second and cancel the timer
    setInterval(() => {
        if (document.activeElement && document.activeElement.tagName == "IFRAME") {
            timerCancelled = true;
        }
    }, 500);

    const setCurrentActiveItem = (i) => {
        if (currentActiveItem != null) {
            activeItem.children[0].style.opacity = "0";
            activeItem.children[0].addEventListener("transitionend", () => {
                // Get rid of old element
                activeItem.children[0].remove();
                allItems.children[currentActiveItem].classList.remove("all-items__active");

                // Add new element at 0 opacity
                const child = allItems.children[i].cloneNode((deep = true));
                child.style.opacity = "0";
                activeItem.appendChild(child);
                allItems.children[i].classList.add("all-items__active");
                currentActiveItem = i;

                // Set its opacity to 1 a tick later:
                setTimeout(() => (activeItem.children[0].style.opacity = "1"), 100);
            });
        } else {
            const child = allItems.children[i].cloneNode((deep = true));
            activeItem.appendChild(child);
            currentActiveItem = i;
        }
    };

    const scrollToNextItem = () => {
        if (!timerCancelled) setCurrentActiveItem((currentActiveItem + 1) % allItems.children.length);
    };
    const createCarouselTimer = () => {
        timerCancelled = false;
        return setInterval(scrollToNextItem, 10_000);
    };

    // Initialize the active item
    setCurrentActiveItem(0);
    let carouselTimer = createCarouselTimer();
    const resetTimer = () => {
        clearInterval(carouselTimer);
        carouselTimer = createCarouselTimer();
    };

    // Handle mouse clicks
    for (let i = 0; i < allItems.children.length; ++i) {
        const child = allItems.children[i];

        child.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            setCurrentActiveItem(i);
            resetTimer();
        });
    }
}
