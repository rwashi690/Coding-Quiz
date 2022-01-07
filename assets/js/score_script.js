var scoreContainerElement = document.getElementById('ScoreContainer')

var initialInfo = JSON.parse(localStorage.getItem("is"));
if ("is" in localStorage) {
    // Sort from highest to lowest
    initialInfo.sort((a,b)=>{
        return b.totalScore-a.totalScore;
    });
    let maxScore = {initials:'', totalScore:0};
    for (var i = 0; initialInfo.length; i++) {
        const trElement = document.createElement("tr");
        const tdInitialEl = document.createElement("td");
        const tdScoreEl = document.createElement("td");
        tdInitialEl.textContent = initialInfo[i].initials;
        tdScoreEl.textContent = initialInfo[i].totalScore;
        trElement.appendChild(tdInitialEl)
        trElement.appendChild(tdScoreEl)
        scoreContainerElement.appendChild(trElement)
    }
}