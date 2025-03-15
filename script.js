
document.getElementById("holi-info-button").addEventListener("click", () => {
    document.getElementById("holi-info-container").style.display = "block";
});

document.getElementById("holi-quiz-button").addEventListener("click", () => {
    document.getElementById("holi-quiz-container").style.display = "block";
    let quizQuestions = [
        {
            question: "What is Holi?",
            options: ["A Hindu festival", "A Muslim festival", "A Christian festival", "A Sikh festival"],
            answer: 0
        },
        {
            question: "Where is Holi celebrated?",
            options: ["India and Nepal", "Pakistan and Bangladesh", "Sri Lanka and Maldives", "Bhutan and Tibet"],
            answer: 0
        },
        {
            question: "What is the significance of colors in Holi?",
            options: ["To represent the colors of the rainbow", "To symbolize the arrival of spring", "To represent the colors of the Indian flag", "To symbolize the victory of good over evil"],
            answer: 3
        },
        {
            question: "How many days is Holi celebrated?",
            options: ["1 day", "2 days", "3 days", "4 days"],
            answer: 1
        },
        {
            question: "What is the name of the Hindu god associated with Holi?",
            options: ["Lord Krishna", "Lord Rama", "Lord Shiva", "Lord Ganesha"],
            answer: 0
        },
        {
            question: "What is the name of the festival of colors celebrated in India?",
            options: ["Holi", "Diwali", "Navratri", "Dussehra"],
            answer: 0
        },
        {
            question: "Holi kyu maani jaati hai?",
            options: ["Haranyakashyap ke vadh ka jashn", "Bhagwan Vishnu ki pooja ke liye", "Rangon ka tyoha mana ne ke liye", "phladkad ki rsha k larne keie"],
            answer: 0
        },
        {
            question: "What is the name of the sweet dish traditionally served during Holi?",
            options: ["Gujjiya", "Jalebi", "Barfi", "Laddu"],
            answer: 0
        },
        {
            question: "What is the significance of the colors used in Holi?",
            options: ["To represent the colors of the rainbow", "To symbolize the arrival of spring", "To represent the colors of the Indian flag", "To symbolize the victory of good over evil"],
            answer: 3
        }
    ];
    let quizHtml = "";
    for (let i = 0; i < quizQuestions.length; i++) {
        quizHtml += `<div class="quiz-question">
            <h2>${quizQuestions[i].question}</h2>
            <ul>
                ${quizQuestions[i].options.map((option, index) => `<li><input type="radio" name="question-${i}" value="${index}">${option}</li>`).join("")}
            </ul>
        </div>`;
    }
    document.getElementById("quiz-questions").innerHTML = quizHtml;
    document.getElementById("submit-quiz-button").addEventListener("click", () => {
        let score = 0;
        for (let i = 0; i < quizQuestions.length; i++) {
            let answer = document.querySelector(`input[name="question-${i}"]:checked`).value;
            if (answer == quizQuestions[i].answer) {
                score++;
            }
        }
        document.getElementById("quiz-score").innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
    });
});
