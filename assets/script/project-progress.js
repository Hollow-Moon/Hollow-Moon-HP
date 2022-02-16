const projectProgress = document.getElementById("project-progress");

if (projectProgress) {
    console.assert(
        projectProgressStats,
        'No progress info defined in the "projectProgressStats" variable as expected.'
    );

    const createProgressBar = (percent, extraClass = null) => {
        const progressBar = document.createElement("DIV");
        progressBar.classList.add("progress-bar");

        const progressBarInner = document.createElement("DIV");
        progressBarInner.classList.add("progress-bar__inner");
        if (extraClass) progressBarInner.classList.add(extraClass);
        progressBar.appendChild(progressBarInner);

        progressBarInner.style.width = `${percent}%`;

        return progressBar;
    };

    for (const chapter in projectProgressStats) {
        const totalChapterPages = projectProgressStats[chapter]["totalPages"];
        const chapterProgressStats = projectProgressStats[chapter]["progress"];

        const chapterProgress = document.createElement("DIV");
        chapterProgress.classList.add("chapter-progress");

        const chapterTitle = document.createElement("p");
        chapterTitle.appendChild(document.createTextNode(chapter));
        chapterProgress.appendChild(chapterTitle);

        const chapterProgressBars = document.createElement("DIV");
        chapterProgressBars.classList.add("chapter-progress-bars");

        for (const stage in chapterProgressStats) {
            const div = document.createElement("DIV");
            div.classList.add("progress-bar-wrapper");

            const extraClass = stage.toLowerCase().replace("(", "").replace(")", "").replace(" ", "-");

            const percent = Math.round((chapterProgressStats[stage] / totalChapterPages) * 100);
            div.appendChild(createProgressBar(percent, extraClass));

            const percentIndicator = document.createElement("span");
            percentIndicator.appendChild(document.createTextNode(`${percent}%`));
            div.appendChild(percentIndicator);

            chapterProgressBars.appendChild(div);
        }

        chapterProgress.appendChild(chapterProgressBars);
        projectProgress.appendChild(chapterProgress);
    }
}
