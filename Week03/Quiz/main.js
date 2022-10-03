const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

function start(quiz) {
    let score = 0;

    // main game loop
    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }
    // end of main game loop

    gameOver();

    // function declarations
    function ask(question) {
        return prompt(question);
    }

    function check(response, answer) {
        if (response === answer) {
            alert('Correct!');
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver() {
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
};

function ask(){
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question, question);
    const response = prompt(question);
    this.check(response);
};
function check(response){
    const answer = this.question.realName;
    if (response === answer) {
        view.render(view.result, 'Correct!', { 'class': 'correct' });
        alert('Correct!');
        this.score++;
        view.render(view.score, this.score);
    } else {
        view.render(view.result, `Wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
        alert(`Wrong! The correct answer was ${answer}`);
    }
};

function gameOver(){
    view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
};