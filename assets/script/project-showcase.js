const projectShowcase = document.getElementById("project-showcase");

if (projectShowcase) {
    const activeItem = document.getElementById("active-item");
    const allItems = document.getElementById("all-items");

    let currentActiveItem = null;
    const setCurrentActiveItem = (newActiveItem) => {
        newActiveItem.classList.add("all-items__active");
        if (currentActiveItem) {
            currentActiveItem.classList.remove("all-items__active");
            activeItem.children[0].replaceWith(newActiveItem.cloneNode((deep = true)));
        } else {
            activeItem.appendChild(newActiveItem.cloneNode((deep = true)));
        }
        currentActiveItem = newActiveItem;
    };

    // Initialize the active item
    setCurrentActiveItem(allItems.children[0]);

    // Handle mouse clicks
    for (let i = 0; i < allItems.children.length; ++i) {
        const child = allItems.children[i];

        child.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            setCurrentActiveItem(allItems.children[i]);
        });
    }
}
