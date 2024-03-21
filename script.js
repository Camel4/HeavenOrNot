document.addEventListener("DOMContentLoaded", function() {
    var storedResult = localStorage.getItem("heavenOrNotResult");
    if (storedResult) {
        displayResult(storedResult);
    }

    document.getElementById("checkButton").addEventListener("click", function() {

        var num = Math.round(Math.random() * 1000) / 1000
        var result = num < 0.5 ? "Yes" : "No";
        if (num == 0.690) {
            result = "Absolutely"
        }
        if (num == 0.666) {
            result = "GOD HATES YOU"
        }

        localStorage.setItem("heavenOrNotResult", result);

        displayResult(result);
    });
});

function displayResult(result) {
    document.getElementById("checkButton").style.display = "none";

    var resultText = document.getElementById("resultText");
    resultText.style.display = "block";
    resultText.textContent = result;

    if (result === "Yes") {
        resultText.style.color = "green";
    } else if (result === "No") {
        resultText.style.color = "red";
    } else if (result === "GOD HATES YOU") {
        resultText.style.color = "black";
    } else {
        resultText.style.color = "gold"
    }

}
