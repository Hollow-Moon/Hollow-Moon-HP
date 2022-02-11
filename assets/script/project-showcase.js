const projectShowcase = document.getElementById("project-showcase");
if (projectShowcase) {
    const activeItem = document.getElementById("active-item");
    const allItems = document.getElementById("all-items");

    // Initialize the active item
    activeItem.appendChild(allItems.children[0].cloneNode((deep = true)));

    // Handle mouse clicks
    for (let i = 0; i < allItems.children.length; ++i) {
        const child = allItems.children[i];

        child.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            activeItem.children[0].replaceWith(allItems.children[i].cloneNode((deep = true)));
        });
    }
}
