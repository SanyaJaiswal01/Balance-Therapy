  document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let total = 0;
    let count = 10;

    for (let i = 1; i <= count; i++) {
      let selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) {
        alert("Please answer all questions!");
        return;
      }
      total += Number(selected.value);
    }

    let avg = total / count;
    let resultBox = document.getElementById("result");
    let nextBtn = document.getElementById("nextBtn");

    resultBox.style.display = "block";
    nextBtn.style.display = "block";

    resultBox.className = "";

    let redirectUrl = "";

    if (avg >= 2.2) {
      resultBox.classList.add("blue");
      resultBox.innerText = `🔵 Status: CLEAR\nAverage Score: ${avg.toFixed(2)}`;
      redirectUrl = "blue.html";
    } 
    else if (avg >= 1.2) {
      resultBox.classList.add("yellow");
      resultBox.innerText = `🟡 Status: MEDITATION SUGGESTED\nAverage Score: ${avg.toFixed(2)}`;
      redirectUrl = "yellow.html";
    } 
    else {
      resultBox.classList.add("red");
      resultBox.innerText = `🔴 Status: DOCTOR CONSULT SUGGESTED\nAverage Score: ${avg.toFixed(2)}`;
      redirectUrl = "red.html";
    }

    nextBtn.onclick = function () {
      window.location.href = redirectUrl;
    };
  });

  