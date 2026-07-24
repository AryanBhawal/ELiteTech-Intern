const allQuestions = {
  html: [
    { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "Home Tool Markup", "Hyperlink Text Language", "HighText Machine Language"], ans: 0 },
    { q: "Which HTML tag inserts a line break?", opts: ["<hr>", "<br>", "<break>", "<lb>"], ans: 1 },
    { q: "Which attribute adds a link in <a> tag?", opts: ["src", "href", "link", "rel"], ans: 1 },
    { q: "Which tag is used for a paragraph?", opts: ["<p>", "<para>", "<text>", "<div>"], ans: 0 },
    { q: "How do you apply an internal CSS style?", opts: ["<style>", "<css>", "<script>", "<link>"], ans: 0 },
    { q: "CSS property to change font size?", opts: ["text-size", "font-size", "size", "font"], ans: 1 },
    { q: "Which CSS selector targets all paragraphs?", opts: ["*", "p", "para", "."], ans: 1 },
    { q: "To make text bold, you use?", opts: ["<strong>", "<b>", "Both A and B", "<bold>"], ans: 2 },
    { q: "How do you comment in CSS?", opts: ["// comment", "/* comment */", "<!-- comment -->", "## comment"], ans: 1 },
    { q: "Which tag creates an ordered list?", opts: ["<ol>", "<ul>", "<li>", "<list>"], ans: 0 }
  ],
  js: [
    { q: "Which keyword declares a variable in JavaScript?", opts: ["var", "int", "let", "Both var and let"], ans: 3 },
    { q: "What symbol ends a JavaScript statement?", opts: [";", ":", ".", ","], ans: 0 },
    { q: "How do you write a comment in JavaScript?", opts: ["/* */", "<!-- -->", "//", "#"], ans: 2 },
    { q: "What is 'typeof []' in JavaScript?", opts: ["object", "array", "list", "undefined"], ans: 0 },
    { q: "Which method converts a string to lowercase?", opts: ["toUpperCase()", "lowerCase()", "toLowerCase()", "changeCase()"], ans: 2 },
    { q: "What does NaN stand for?", opts: ["Not a Number", "New and Null", "No assigned Name", "Name and Number"], ans: 0 },
    { q: "How do you define a function?", opts: ["def myFunc()", "function myFunc()", "func myFunc()", "define myFunc()"], ans: 1 },
    { q: "What is the result of '2' + 2?", opts: ["22", "4", "NaN", "Error"], ans: 0 },
    { q: "Which array method removes the last item?", opts: ["pop()", "shift()", "remove()", "splice()"], ans: 0 },
    { q: "Which value is falsy in JavaScript?", opts: ["0", "false", "null", "All of the above"], ans: 3 }
  ]
};

let questions = [];
let curIndex = 0, score = 0, time = 10, timerId;
let userName = '';
let Qcount = 0;

const quesEl = document.getElementById('question');
const optsEl = document.getElementById('options');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const finalScore = document.getElementById('final-score');
const ringFill = document.querySelector('.timer-ring-fill');
const fullDash = 2 * Math.PI * 45;
const message = document.getElementById('message');

function startQuiz() {
  const nameInput = document.getElementById('user-name').value.trim();
  const selectedCategory = document.getElementById('category').value;

  if (!nameInput || !selectedCategory) {
    alert("Please enter your name and select a quiz category.");
    return;
  }

  userName = nameInput;
  questions = allQuestions[selectedCategory];
  Qcount = questions.length;

  curIndex = 0;
  score = 0;
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'flex';
  loadQ();
}

function loadQ() {
  feedback.textContent = '';
  nextBtn.disabled = true;
  document.getElementById('progress-text').textContent = `Question ${curIndex + 1} of ${Qcount}`;
  document.getElementById('progress-fill').style.width = ((curIndex) / Qcount * 100) + '%';

  const curr = questions[curIndex];
  quesEl.textContent = curr.q;
  optsEl.innerHTML = '';
  curr.opts.forEach((o, i) => {
    const li = document.createElement('li');
    li.textContent = o;
    li.onclick = () => selectOpt(i);
    optsEl.appendChild(li);
  });

  startTimer();
}

function startTimer() {
  time = 10;
  ringFill.style.strokeDasharray = fullDash;
  ringFill.style.strokeDashoffset = 0;
  clearInterval(timerId);
  timerId = setInterval(() => {
    time--;
    const offset = fullDash * (time / 10);
    ringFill.style.strokeDashoffset = fullDash - offset;
    if (time <= 0) {
      clearInterval(timerId);
      skipQuestion();
    }
  }, 1000);
}

function selectOpt(idx) {
  clearInterval(timerId);
  const correct = questions[curIndex].ans;
  Array.from(optsEl.children).forEach((li, i) => {
    li.classList.add(i === correct ? 'correct' : 'wrong');
    li.style.pointerEvents = 'none';
  });
  feedback.textContent = idx === correct ? "✔ Correct!" : "✖ Wrong!";
  nextBtn.disabled = false;
  if (idx === correct) score++;
}

function skipQuestion() {
  feedback.textContent = "⏰ Time's up!";
  const correct = questions[curIndex].ans;
  Array.from(optsEl.children).forEach((li, i) => {
    li.classList.add(i === correct ? 'correct' : 'wrong');
    li.style.pointerEvents = 'none';
  });
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  curIndex++;
  if (curIndex < Qcount) loadQ();
  else showScore();
};

function showScore() {
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('score-container').style.display = 'flex';
  document.getElementById('progress-fill').style.width = "100%";
  finalScore.textContent = `${userName}, your score: ${score} / ${Qcount}`;
  message.textContent = score >= 7
    ? "🎉 Great job! You really know your stuff!"
    : "💪 Keep practicing! You can do better next time!";
}

function restartQuiz() {
  document.getElementById('score-container').style.display = 'none';
  document.getElementById('start-screen').style.display = 'flex';
}
