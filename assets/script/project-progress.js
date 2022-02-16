const projectProgress = document.getElementById("project-progress");

if (projectProgress) {
    console.assert(
        projectProgressStats,
        'No progress info defined in the "projectProgressStats" variable as expected.'
    );

    const createProgressBar = (percent, extraClasses = null) => {
        // Inner progress bar (actual %, coloured)
        const progressBarInner = document.createElement("DIV");
        progressBarInner.classList.add("progress-bar__inner");
        if (extraClasses) progressBarInner.classList.add(...extraClasses);

        // Set percentage
        progressBarInner.style.width = `${percent}%`;

        return progressBarInner;
    };

    for (const chapter in projectProgressStats) {
        // Extract info
        const totalChapterPages = projectProgressStats[chapter]["totalPages"];
        const chapterProgressStats = projectProgressStats[chapter]["progress"];
        const progressDiff = projectProgressStats[chapter]["diff"];

        // Overall chapter progress box
        const chapterProgress = document.createElement("DIV");
        chapterProgress.classList.add("chapter-progress");

        // Rendering the title
        const chapterTitle = document.createElement("p");
        chapterTitle.appendChild(document.createTextNode(chapter));
        chapterProgress.appendChild(chapterTitle);

        // Rendering the progress bars
        const chapterProgressBars = document.createElement("DIV");
        chapterProgressBars.classList.add("chapter-progress-bars");

        for (const stage in chapterProgressStats) {
            // Process the stage name into a CSS class
            const stageClass = stage.toLowerCase().replace("(", "").replace(")", "").replace(" ", "-");

            // Wrapper for bar + % indicator
            const div = document.createElement("DIV");
            div.classList.add("progress-bar-wrapper", `progress-bar__${stageClass}`);

            // Mine % & instantiate
            // Progress bar wrapper (grey etc)
            const progressBar = document.createElement("DIV");
            progressBar.classList.add("progress-bar");

            let percent = Math.round((chapterProgressStats[stage] / totalChapterPages) * 100);
            let newPercent = null;
            if (progressDiff && progressDiff[stage]) {
                const newPageCount = chapterProgressStats[stage] - progressDiff[stage];
                percent = Math.round((newPageCount / totalChapterPages) * 100);

                newPercent = Math.round((chapterProgressStats[stage] / totalChapterPages) * 100);
                progressBar.appendChild(createProgressBar(newPercent, [stageClass, "diff"]));
            }
            progressBar.appendChild(createProgressBar(percent, [stageClass]));

            // Tooltip
            const tooltip = document.createElement("span");
            tooltip.innerText = `${chapterProgressStats[stage]} / ${totalChapterPages}`;
            tooltip.classList.add("tooltip", stageClass);
            progressBar.appendChild(tooltip);

            div.appendChild(progressBar);

            // Instantiate progress % render
            const percentIndicator = document.createElement("span");
            percentIndicator.innerText = `${percent}%`;
            if (progressDiff && progressDiff[stage]) {
                percentIndicator.innerHTML = `${newPercent}% (<span class="diff-text ${stageClass}__text">+${
                    newPercent - percent
                }%</span>)`;
            }

            div.appendChild(percentIndicator);

            chapterProgressBars.appendChild(div);
        }

        // Render it onto the page
        chapterProgress.appendChild(chapterProgressBars);

        if (!progressDiff) {
            chapterProgress.classList.add("no-progress");
            chapterProgress.style.display = "none";
        }

        projectProgress.appendChild(chapterProgress);
    }

    const viewAllButton = document.createElement("p");
    viewAllButton.innerText = "View All Progress";
    viewAllButton.id = "view-all-btn";

    // Toggle view all progress
    let allToggled = false;
    const noProgressChapters = document.getElementsByClassName("no-progress");
    for (let i = 0; i < noProgressChapters.length; ++i) {
        // When fade out ends, set display none
        noProgressChapters[i].addEventListener("transitionend", () => {
            if (!allToggled) noProgressChapters[i].style.display = "none";
        });
    }

    viewAllButton.addEventListener("click", (e) => {
        allToggled = !allToggled;

        for (let i = 0; i < noProgressChapters.length; ++i) {
            // Change opacity and maybe display on click
            if (allToggled) noProgressChapters[i].style.display = "flex";
            setTimeout(() => (noProgressChapters[i].style.opacity = allToggled ? "1" : "0"), 100);
        }

        viewAllButton.innerText = `${allToggled ? "Hide" : "View"} All Progress`;
    });

    projectProgress.appendChild(viewAllButton);

    // Legend interactivity
    const legend = document.getElementById("legend");
    const toggleStatus = {}; // Keep track of which categories are toggled
    for (let i = 0; i < legend.children.length; ++i) {
        const button = legend.children[i];
        toggleStatus[button.classList[0]] = true;

        // When a bar fades out, set display none
        const elements = document.getElementsByClassName(`progress-bar__${button.classList[0]}`);
        for (let j = 0; j < elements.length; ++j) {
            elements[j].addEventListener("transitionend", () => {
                if (!toggleStatus[button.classList[0]]) {
                    elements[j].style.display = "none";
                }
            });
        }

        button.addEventListener("click", () => {
            const elements = document.getElementsByClassName(`progress-bar__${button.classList[0]}`);
            toggleStatus[button.classList[0]] = !toggleStatus[button.classList];
            for (let j = 0; j < elements.length; ++j) {
                // On click, if toggle on, set properties and fade in
                if (toggleStatus[button.classList[0]]) {
                    elements[j].style.display = "flex";
                    setTimeout(() => {
                        elements[j].style.opacity = "1";
                    }, 100);
                } else {
                    // if toggle off, just set opacity and let the transitionend take care of it
                    elements[j].style.opacity = "0";
                }
            }
            // Change the button visibility
            button.classList.toggle("muted");
        });
    }
}
