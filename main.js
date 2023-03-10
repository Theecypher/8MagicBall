const questionBtn = document.getElementById("questionButton");
let answer = document.getElementById("answer");
answer.style.display = "none";

const answers = ['yes', 'no', 'I dont think so...', "of course", "in your dreams", "Indubitably", ];

function askQuestion () {
    const img = document.getElementById("8ball");

    let question = prompt("Ask A YES/NO QUESTION!");
    if (question) {
        img.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png";
        let randomNum = Math.floor(Math.random() * answers.length + 1);
        let randomAnswer = answers[randomNum];
        answer.innerText = randomAnswer;
        answer.style.display = "block";
        img.classList.add("shake")
    }
    else {
        alert("please ask your question!")
    }
}

questionBtn.addEventListener("click", askQuestion);

