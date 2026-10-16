function createContributions() {
    const levels = [0, 0, 0, 3, 5, 10];
    const contributions = [];

    for (let i = 0; i < 52; i++) {
        const week = [];

        for (let i = 0; i < 7; i++) {
            week.push(levels[Math.floor(Math.random() * levels.length)]);
        }

        contributions.push(week);
    }

    return contributions;
}

function createGraph() {
    const graph = document.querySelector(".graph");
    const contributions = createContributions();

    for (let i = 0; i < 52; i++) {
        let graphWeek = document.createElement("ul");
        graphWeek.classList.add('week');

        contributions[i].forEach(level => {
            let squre = document.createElement("li");
            squre.classList.add('squre');
            squre.dataset.value = level;
            graphWeek.appendChild(squre);
        });

        graph.appendChild(graphWeek);
    }
}

createGraph();