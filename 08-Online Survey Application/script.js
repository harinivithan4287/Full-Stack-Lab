function logout() {
    window.location.href = "Login.html";
  }
  const form = document.getElementById('surveyForm');
const questionsContainer = document.getElementById('questionsContainer');
const answersContainer = document.getElementById('answersContainer');
function renderQuestions() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<label>
                                        <input type="checkbox" name="selectedQuestions" value="${index}" />
                                        ${question}
                                    </label>`;
        questionsContainer.appendChild(questionElement);
    });
}function submitSurvey() {
    const selectedQuestions = document.getElementsByName('selectedQuestions');
    const selectedQuestionIndices = Array.from(selectedQuestions)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => parseInt(checkbox.value, 10));

    if (selectedQuestionIndices.length < 5) {
        alert('Please select at least 5 questions.');
        return;
    }
    const selectedQuestionsArray = selectedQuestionIndices.map((index) => questions[index]);
    answersContainer.innerHTML = '';
    selectedQuestionsArray.forEach((question, index) => {
        const answerElement = document.createElement('div');
        answerElement.innerHTML = `<label>${question}</label>
                                   <input type="text" name="answer${index + 1}" required>`;
        answersContainer.appendChild(answerElement);
    });
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Answers';
    submitButton.addEventListener('click', () => displayAnswers(selectedQuestionsArray));
    answersContainer.appendChild(submitButton);
}
function displayAnswers(selectedQuestionsArray) {
    const answers = [];
    selectedQuestionsArray.forEach((_, index) => {
        const answer = document.getElementsByName(`answer${index + 1}`)[0].value;
        answers.push(answer);
    });
    answersContainer.innerHTML = '<h2>Your Answers</h2>';
    selectedQuestionsArray.forEach((question, index) => {
        const answerElement = document.createElement('p');
        answerElement.textContent = `Q${index + 1}: ${question} - ${answers[index]}`;
        answersContainer.appendChild(answerElement);
    });
}
window.onload = renderQuestions;
