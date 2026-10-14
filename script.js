/* =========================================================
   WORDS
========================================================= */

const words = [

  ["house","uy"],
  ["room","xona"],
  ["door","eshik"],
  ["window","deraza"],
  ["table","stol"],
  ["chair","stul"],
  ["bed","karavot"],
  ["kitchen","oshxona"],
  ["bathroom","hammom"],
  ["garden","bog‘"],

  ["family","oila"],
  ["mother","ona"],
  ["father","ota"],
  ["brother","aka/uka"],
  ["sister","opa/singil"],
  ["child","bola"],
  ["friend","do‘st"],
  ["person","inson"],
  ["man","erkak"],
  ["woman","ayol"],

  ["food","ovqat"],
  ["bread","non"],
  ["water","suv"],
  ["milk","sut"],
  ["apple","olma"],
  ["banana","banan"],
  ["orange","apelsin"],
  ["meat","go‘sht"],
  ["rice","guruch"],
  ["egg","tuxum"],

  ["car","avtomobil"],
  ["wheel","g‘ildirak"],
  ["engine","dvigatel"],
  ["road","yo‘l"],
  ["bus","avtobus"],
  ["train","poyezd"],
  ["plane","samolyot"],
  ["bicycle","velosiped"],
  ["driver","haydovchi"],
  ["ticket","chipta"],

  ["school","maktab"],
  ["teacher","o‘qituvchi"],
  ["student","o‘quvchi"],
  ["lesson","dars"],
  ["book","kitob"],
  ["pen","ruchka"],
  ["pencil","qalam"],
  ["question","savol"],
  ["answer","javob"],
  ["exam","imtihon"],

  ["computer","kompyuter"],
  ["phone","telefon"],
  ["keyboard","klaviatura"],
  ["screen","ekran"],
  ["file","fayl"],
  ["folder","papka"],
  ["project","loyiha"],
  ["code","kod"],
  ["website","veb-sayt"],
  ["browser","brauzer"],

  ["tree","daraxt"],
  ["flower","gul"],
  ["river","daryo"],
  ["mountain","tog‘"],
  ["forest","o‘rmon"],
  ["rain","yomg‘ir"],
  ["snow","qor"],
  ["wind","shamol"],
  ["sun","quyosh"],
  ["moon","oy"],

  ["shirt","ko‘ylak"],
  ["pants","shim"],
  ["shoes","poyabzal"],
  ["jacket","kurtka"],
  ["hat","shapka"],
  ["dress","libos"],
  ["sock","paypoq"],
  ["coat","palto"],
  ["bag","sumka"],
  ["watch","qo‘l soati"],

  ["happy","xursand"],
  ["sad","xafa"],
  ["angry","jahldor"],
  ["tired","charchagan"],
  ["hungry","och"],
  ["thirsty","chanqagan"],
  ["afraid","qo‘rqayotgan"],
  ["excited","hayajonlangan"],
  ["busy","band"],
  ["ready","tayyor"],

  ["run","yugurmoq"],
  ["walk","yurmoq"],
  ["jump","sakramoq"],
  ["sit","o‘tirmoq"],
  ["stand","turmoq"],
  ["sleep","uxlamoq"],
  ["eat","yemoq"],
  ["drink","ichmoq"],
  ["cook","ovqat pishirmoq"],
  ["dance","raqs tushmoq"],

  ["sport","sport"],
  ["football","futbol"],
  ["basketball","basketbol"],
  ["player","o‘yinchi"],
  ["ball","to‘p"],
  ["team","jamoa"],
  ["match","musobaqa"],
  ["win","yutmoq"],
  ["lose","yutqazmoq"],
  ["score","hisob"],

  ["travel","sayohat qilmoq"],
  ["airport","aeroport"],
  ["hotel","mehmonxona"],
  ["station","bekat"],
  ["map","xarita"],
  ["city","shahar"],
  ["country","mamlakat"],
  ["beach","sohil"],
  ["visit","tashrif buyurmoq"],
  ["holiday","ta’til"],

  ["today","bugun"],
  ["tomorrow","ertaga"],
  ["yesterday","kecha"],
  ["morning","ertalab"],
  ["afternoon","tushdan keyin"],
  ["evening","kechqurun"],
  ["night","tun"],
  ["week","hafta"],
  ["month","oy"],
  ["year","yil"],

  ["create","yaratmoq"],
  ["delete","o‘chirmoq"],
  ["save","saqlamoq"],
  ["open","ochmoq"],
  ["close","yopmoq"],
  ["read","o‘qimoq"],
  ["write","yozmoq"],
  ["learn","o‘rganmoq"],
  ["study","o‘qimoq"],
  ["work","ishlamoq"],

  ["start","boshlamoq"],
  ["finish","tugatmoq"],
  ["build","qurmoq"],
  ["change","o‘zgartirmoq"],
  ["add","qo‘shmoq"],
  ["remove","olib tashlamoq"],
  ["find","topmoq"],
  ["search","qidirmoq"],
  ["help","yordam bermoq"],
  ["understand","tushunmoq"]

];


/* =========================================================
   SENTENCES
========================================================= */

const sentenceQuestions = [

  { sentence:"Faylni ___ uchun Ctrl + S tugmalarini bosing.", answer:"save" },
  { sentence:"Yangi loyiha ___ uchun shu tugmani bosing.", answer:"create" },
  { sentence:"Faylni ___ uchun Open tugmasini bosing.", answer:"open" },
  { sentence:"Keraksiz faylni ___ uchun Delete tugmasini bosing.", answer:"delete" },
  { sentence:"Yangi so‘zlarni ___ juda foydali.", answer:"learn" },
  { sentence:"Kompyuterda ___ yozish mumkin.", answer:"code" },
  { sentence:"Internetda ma’lumot ___ mumkin.", answer:"search" },
  { sentence:"Savolga to‘g‘ri ___ bering.", answer:"answer" },
  { sentence:"Kitobni ___ kerak.", answer:"read" },
  { sentence:"Ustozni diqqat bilan ___ kerak.", answer:"listen" }

];


/* =========================================================
   HELPERS
========================================================= */

const $ = id => document.getElementById(id);

const shuffle = array => {

  const arr = [...array];

  for(let i = arr.length - 1; i > 0; i--){

    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];

  }

  return arr;

};

const random = array => {

  return array[Math.floor(Math.random() * array.length)];

};


/* =========================================================
   SCREENS
========================================================= */

const menu = $("menu");
const modeScreen = $("modeScreen");
const gameScreen = $("gameScreen");
const resultScreen = $("resultScreen");
const wordsScreen = $("wordsScreen");
const highScreen = $("highScreen");
const dailyScreen = $("dailyScreen");

function hideAll(){

  [
    menu,
    modeScreen,
    gameScreen,
    resultScreen,
    wordsScreen,
    highScreen,
    dailyScreen
  ].forEach(screen => {

    screen.classList.add("hidden");

  });

}


/* =========================================================
   STORAGE
========================================================= */

let highScore =
  Number(localStorage.getItem("vocabularyHighScore")) || 0;

let learned =
  JSON.parse(localStorage.getItem("learnedVocabulary") || "[]");

function today(){

  const d = new Date();

  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );

}

function dailyData(){

  const saved =
    JSON.parse(localStorage.getItem("dailyData") || "null");

  if(!saved || saved.date !== today()){

    return {
      date: today(),
      progress: 0,
      best: 0
    };

  }

  return saved;

}


/* =========================================================
   MENU STATS
========================================================= */

function updateMenuStats(){

  $("menuHighScore").textContent = highScore;

  $("menuLearned").textContent = learned.length;

  const d = dailyData();

  $("menuDaily").textContent = d.progress + "/10";

}


/* =========================================================
   DAILY UI
========================================================= */

function updateDailyUI(){

  const d = dailyData();

  $("dailyDate").textContent = d.date;

  $("dailyProgress").textContent = d.progress + "/10";

  $("dailyBest").textContent = d.best;

  $("dailyMenuText").textContent =
    d.progress >= 10
      ? "✅ Bugungi topshiriq bajarildi!"
      : "Bugungi 10 ta maxsus savolga javob bering!";

  const fill = $("dailyProgressFill");

  if(fill){

    fill.style.width = (d.progress / 10 * 100) + "%";

  }

  updateMenuStats();

}


/* =========================================================
   LEARNED WORDS
========================================================= */

function addLearned(word){

  if(word && !learned.includes(word)){

    learned.push(word);

    localStorage.setItem(
      "learnedVocabulary",
      JSON.stringify(learned)
    );

    updateMenuStats();

  }

}


/* =========================================================
   GAME VARIABLES
========================================================= */

let currentMode = "english";
let currentWord = null;
let currentSentence = null;
let correctAnswer = "";
let score = 0;
let lives = 3;
let mistakes = 0;
let combo = 0;
let bestCombo = 0;
let correctAnswers = 0;
let level = 1;
let timer = 15;
let maxTime = 15;
let timerInterval = null;
let answered = false;
let hintUsed = false;
let hintLevel = 0;
let challenge = 0;
let usedWords = [];


/* =========================================================
   DAILY VARIABLES
========================================================= */

let isDaily = false;
let dailyIndex = 0;
let dailyScore = 0;
let dailyCorrect = 0;
let dailyCombo = 0;
let dailyBestCombo = 0;


/* =========================================================
   STATS
========================================================= */

function updateStats(){

  $("score").textContent = score;

  $("lives").textContent = lives;

  $("mistakes").textContent = mistakes;

  $("combo").textContent = combo;

}


/* =========================================================
   START GAME
========================================================= */

function startGame(){

  isDaily = false;

  score = 0;
  lives = 3;
  mistakes = 0;
  combo = 0;
  bestCombo = 0;
  correctAnswers = 0;
  level = 1;
  challenge = 0;
  usedWords = [];

  updateStats();

  $("challengeCount").textContent = 0;

  $("challengeBox").classList.add("hidden");

  hideAll();

  gameScreen.classList.remove("hidden");

  showQuestion();

}


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion(){

  clearInterval(timerInterval);

  answered = false;
  hintUsed = false;
  hintLevel = 0;

  $("hintBtn").disabled = false;

  $("hintBtn").textContent = "💡 Hint";

  $("result").textContent = "";

  $("result").className = "result";

  $("comboText").textContent = "";

  $("hintBox").classList.add("hidden");

  $("answers").innerHTML = "";

  $("lettersBox").classList.add("hidden");

  $("blankBox").classList.add("hidden");

  const available =
    words.filter(word => !usedWords.includes(word[0]));

  if(available.length === 0){

    usedWords = [];

  }

  currentWord =
    random(words.filter(word => !usedWords.includes(word[0])));

  usedWords.push(currentWord[0]);

  if(usedWords.length > words.length - 5){

    usedWords = [];

  }

  level = Math.floor(correctAnswers / 5) + 1;

  $("level").textContent = level;

  startTimer();

  switch(currentMode){

    case "english":
      showEnglish();
      break;

    case "uzbek":
      showUzbek();
      break;

    case "letters":
      showLetters();
      break;

    case "match":
      showMatch();
      break;

    case "blank":
      showBlank();
      break;

    case "sentence":
      showSentence();
      break;

  }

}


/* =========================================================
   TIMER
========================================================= */

function startTimer(){

  clearInterval(timerInterval);

  if(currentMode === "letters"){

    maxTime = Math.max(20, 30 - level + 1);

  }else{

    maxTime = Math.max(8, 15 - level + 1);

  }

  if(challenge > 0){

    maxTime = Math.max(5, maxTime - challenge * 2);

  }

  timer = maxTime;

  $("timer").textContent = timer;

  $("progressBar").style.width = "100%";

  timerInterval = setInterval(() => {

    timer--;

    $("timer").textContent = timer;

    $("progressBar").style.width = (timer / maxTime * 100) + "%";

    if(timer <= 0){

      timeOut();

    }

  }, 1000);

}


/* =========================================================
   TIME OUT
========================================================= */

function timeOut(){

  if(answered) return;

  answered = true;

  clearInterval(timerInterval);

  lives--;

  mistakes++;

  combo = 0;

  challenge = Math.min(5, challenge + 1);

  $("challengeCount").textContent = challenge;

  $("challengeBox").classList.remove("hidden");

  $("result").textContent = "⏰ Vaqt tugadi! Javob: " + correctAnswer;

  $("result").className = "result wrong";

  updateStats();

  checkGameOver();

}


/* =========================================================
   ENGLISH
========================================================= */

function showEnglish(){

  $("modeTitle").textContent = "🇬🇧 English → 🇺🇿 O‘zbekcha";

  $("question").textContent = currentWord[0];

  correctAnswer = currentWord[1];

  createButtons(getOptions(1, correctAnswer));

}


/* =========================================================
   UZBEK
========================================================= */

function showUzbek(){

  $("modeTitle").textContent = "🇺🇿 O‘zbekcha → 🇬🇧 English";

  $("question").textContent = currentWord[1];

  correctAnswer = currentWord[0];

  createButtons(getOptions(0, correctAnswer));

}


/* =========================================================
   LETTERS
========================================================= */

function showLetters(){

  $("modeTitle").textContent = "🔤 Harflardan so‘z";

  $("question").textContent = "Harflarni to‘g‘ri joylashtiring";

  correctAnswer = currentWord[0];

  $("lettersBox").classList.remove("hidden");

  $("mixedLetters").textContent =
    shuffle(currentWord[0].split("")).join(" ");

}


/* =========================================================
   MATCH
========================================================= */

function showMatch(){

  $("modeTitle").textContent = "🔗 Juftini topish";

  $("question").textContent = currentWord[0];

  correctAnswer = currentWord[1];

  createButtons(getOptions(1, correctAnswer));

}


/* =========================================================
   BLANK
========================================================= */

function showBlank(){

  const sentences = {

    save: "Faylni ___ uchun Ctrl + S tugmasini bosing.",
    create: "Yangi loyiha ___ uchun tugmani bosing.",
    delete: "Keraksiz faylni ___ uchun Delete tugmasini bosing.",
    open: "Faylni ___ uchun Open tugmasini bosing.",
    read: "Kitobni ___ kerak.",
    learn: "Yangi so‘zlarni ___ kerak.",
    write: "Kod ___ uchun editor kerak.",
    search: "Internetdan ma’lumot ___ mumkin.",
    start: "O‘yinni ___ uchun tugmani bosing.",
    finish: "Ishni ___ kerak."

  };

  $("modeTitle").textContent = "✍️ Bo‘sh joyni to‘ldirish";

  correctAnswer = currentWord[0];

  $("question").textContent =
    sentences[currentWord[0]] ||
    "Bu so‘zni gapda ishlating: ___";

  $("blankBox").classList.remove("hidden");

}


/* =========================================================
   SENTENCE
========================================================= */

function showSentence(){

  currentSentence = random(sentenceQuestions);

  $("modeTitle").textContent = "💬 Gapdan so‘zni topish";

  $("question").innerHTML =
    '<div class="sentence">' +
    currentSentence.sentence +
    "</div>";

  correctAnswer = currentSentence.answer;

  createButtons(getOptions(0, correctAnswer));

}


/* =========================================================
   OPTIONS
========================================================= */

function getOptions(type, correct){

  const all = words.map(word => word[type]);

  let options = shuffle(all).slice(0, 4);

  if(!options.includes(correct)){

    options[0] = correct;

    options = shuffle(options);

  }

  return options;

}


/* =========================================================
   BUTTONS
========================================================= */

function createButtons(options){

  $("answers").innerHTML = "";

  options.forEach(option => {

    const button = document.createElement("button");

    button.className = "answer-btn";

    button.textContent = option;

    button.onclick = () => {

      checkAnswer(option);

    };

    $("answers").appendChild(button);

  });

}


/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer(userAnswer){

  if(answered) return;

  answered = true;

  clearInterval(timerInterval);

  const ok =
    String(userAnswer).trim().toLowerCase() ===
    String(correctAnswer).trim().toLowerCase();

  if(ok){

    if(isDaily){

      dailyCorrect++;

      dailyCombo++;

      dailyBestCombo = Math.max(dailyBestCombo, dailyCombo);

      const bonus = 10 + (dailyCombo >= 2 ? 5 : 0);

      dailyScore += bonus;

      addLearned(correctAnswer);

      $("result").textContent = "✅ To‘g‘ri! +" + bonus + " ⭐";

      $("result").className = "result correct";

    }else{

      let bonus = 10 + (combo >= 2 ? combo * 2 : 0);

      score += bonus;

      correctAnswers++;

      combo++;

      bestCombo = Math.max(bestCombo, combo);

      addLearned(currentWord[0]);

      $("result").textContent = "✅ To‘g‘ri! +" + bonus + " ball";

      $("result").className = "result correct";

      $("comboText").textContent =
        combo >= 2 ? "🔥 Combo x" + combo : "";

      if(combo >= 2){

        $("comboText").classList.remove("pop");

        void $("comboText").offsetWidth;

        $("comboText").classList.add("pop");

      }

    }

  }else{

    lives--;

    mistakes++;

    combo = 0;

    if(isDaily){

      dailyCombo = 0;

    }

    challenge = Math.min(5, challenge + 1);

    $("challengeCount").textContent = challenge;

    $("challengeBox").classList.remove("hidden");

    $("result").textContent =
      "❌ Noto‘g‘ri! To‘g‘ri javob: " + correctAnswer;

    $("result").className = "result wrong";

    $("comboText").textContent = "";

  }

  updateStats();

  if(isDaily){

    if(dailyIndex >= 10){

      setTimeout(finishDaily, 1200);

    }else{

      setTimeout(showDailyQuestion, 1200);

    }

    return;

  }

  if(lives <= 0){

    setTimeout(showFinalResult, 1200);

  }else{

    setTimeout(showQuestion, 1000);

  }

}


/* =========================================================
   GAME OVER
========================================================= */

function checkGameOver(){

  if(isDaily){

    if(dailyIndex >= 10){

      setTimeout(finishDaily, 1200);

    }else{

      setTimeout(showDailyQuestion, 1200);

    }

    return;

  }

  if(lives <= 0){

    setTimeout(showFinalResult, 1200);

  }else{

    setTimeout(showQuestion, 1000);

  }

}


/* =========================================================
   FINAL RESULT
========================================================= */

function showFinalResult(){

  clearInterval(timerInterval);

  hideAll();

  resultScreen.classList.remove("hidden");

  $("finalScore").textContent = score;

  $("finalLevel").textContent = level;

  $("finalCorrect").textContent = correctAnswers;

  $("finalMistakes").textContent = mistakes;

  $("finalCombo").textContent = bestCombo;

  if(score > highScore){

    highScore = score;

    localStorage.setItem("vocabularyHighScore", highScore);

  }

  $("finalHighScore").textContent = highScore;

  updateMenuStats();

}


/* =========================================================
   DAILY START
========================================================= */

function startDaily(){

  const d = dailyData();

  if(d.progress >= 10){

    alert("Bugungi Daily Challenge allaqachon bajarilgan!");

    return;

  }

  isDaily = true;

  dailyIndex = d.progress;

  dailyScore = 0;
  dailyCorrect = 0;
  dailyCombo = 0;
  dailyBestCombo = 0;
  mistakes = 0;
  challenge = 0;
  lives = 3;

  hideAll();

  gameScreen.classList.remove("hidden");

  showDailyQuestion();

}


/* =========================================================
   DAILY QUESTION
========================================================= */

function showDailyQuestion(){

  clearInterval(timerInterval);

  answered = false;
  hintUsed = false;
  hintLevel = 0;

  $("hintBtn").disabled = false;

  $("hintBtn").textContent = "💡 Hint";

  $("result").textContent = "";

  $("result").className = "result";

  $("comboText").textContent = "";

  $("answers").innerHTML = "";

  $("lettersBox").classList.add("hidden");

  $("blankBox").classList.add("hidden");

  $("hintBox").classList.add("hidden");

  dailyIndex++;

  const q =
    sentenceQuestions[(dailyIndex - 1) % sentenceQuestions.length];

  currentSentence = q;

  correctAnswer = q.answer;

  $("modeTitle").textContent = "🎯 DAILY " + dailyIndex + "/10";

  $("question").innerHTML =
    '<div class="sentence">' +
    q.sentence +
    "</div>";

  createButtons(getOptions(0, correctAnswer));

  startTimer();

}


/* =========================================================
   FINISH DAILY
========================================================= */

function finishDaily(){

  clearInterval(timerInterval);

  const bonus = dailyCorrect === 10 ? 50 : 0;

  const total = dailyScore + bonus;

  const old = dailyData();

  const best = Math.max(old.best, total);

  localStorage.setItem(
    "dailyData",
    JSON.stringify({
      date: today(),
      progress: 10,
      best: best
    })
  );

  if(total > highScore){

    highScore = total;

    localStorage.setItem("vocabularyHighScore", highScore);

  }

  hideAll();

  resultScreen.classList.remove("hidden");

  $("finalScore").textContent = total;

  $("finalLevel").textContent = "Daily";

  $("finalCorrect").textContent = dailyCorrect + "/10";

  $("finalMistakes").textContent = mistakes;

  $("finalCombo").textContent = dailyBestCombo;

  $("finalHighScore").textContent = highScore;

  updateDailyUI();

}


/* =========================================================
   WORDS SCREEN
========================================================= */

function showWords(){

  hideAll();

  wordsScreen.classList.remove("hidden");

  $("learnedWords").innerHTML = "";

  if(!learned.length){

    $("learnedWords").innerHTML = `

      <div class="empty-state">

        <div class="empty-icon">
          📚
        </div>

        <strong>
          Hali hech qanday so‘z o‘rganilmagan.
        </strong>

        <p style="margin-top:6px">
          O‘yin o‘ynab yangi so‘zlarni to‘plang.
        </p>

      </div>

    `;

    return;

  }

  learned.forEach(word => {

    const data = words.find(item => item[0] === word);

    if(!data) return;

    const card = document.createElement("div");

    card.className = "word-card";

    card.innerHTML = `

      <div class="word-left">

        <div class="word-icon">
          📖
        </div>

        <div class="word-main">

          <strong>
            ${data[0]}
          </strong>

          <span>
            ${data[1]}
          </span>

        </div>

      </div>

      <button>
        🔊
      </button>

    `;

    card.querySelector("button").onclick = () => {

      const speech = new SpeechSynthesisUtterance(data[0]);

      speech.lang = "en-US";

      speech.rate = .8;

      speechSynthesis.speak(speech);

    };

    $("learnedWords").appendChild(card);

  });

}


/* =========================================================
   SPEAK
========================================================= */

function speak(){

  const word = currentWord ? currentWord[0] : correctAnswer;

  if("speechSynthesis" in window){

    const speech = new SpeechSynthesisUtterance(word);

    speech.lang = "en-US";

    speech.rate = .8;

    speechSynthesis.cancel();

    speechSynthesis.speak(speech);

  }

}


/* =========================================================
   HINT SYSTEM (2 ta hint)
========================================================= */

$("hintBtn").onclick = () => {

  if(answered || !correctAnswer){

    return;

  }

  hintLevel++;

  if(hintLevel === 1){

    const word = correctAnswer.trim();

    if(word.length === 1){

      $("hintBox").textContent = "💡 1-Hint: " + word.toUpperCase();

    }else{

      const first = word[0].toUpperCase();

      const last = word[word.length - 1].toLowerCase();

      const middle = ".".repeat(Math.max(0, word.length - 2));

      $("hintBox").textContent = "💡 1-Hint: " + first + middle + last;

    }

    $("hintBox").classList.remove("hidden");

    $("hintBtn").textContent = "💡 2-Hint";

    return;

  }

  if(hintLevel === 2){

    $("hintBox").textContent =
      "💡 2-Hint: " + correctAnswer.trim().length + " harf";

    $("hintBtn").disabled = true;

    $("hintBtn").textContent = "💡 Hintlar tugadi";

    return;

  }

};


/* =========================================================
   INPUTS
========================================================= */

$("wordSubmit").onclick = () => {

  checkAnswer($("wordInput").value);

  $("wordInput").value = "";

};

$("blankSubmit").onclick = () => {

  checkAnswer($("blankInput").value);

  $("blankInput").value = "";

};

$("wordInput").onkeydown = e => {

  if(e.key === "Enter"){

    checkAnswer(e.target.value);

    e.target.value = "";

  }

};

$("blankInput").onkeydown = e => {

  if(e.key === "Enter"){

    checkAnswer(e.target.value);

    e.target.value = "";

  }

};


/* =========================================================
   BUTTONS
========================================================= */

$("startBtn").onclick = () => {

  hideAll();

  modeScreen.classList.remove("hidden");

};

$("backModeBtn").onclick = () => {

  hideAll();

  menu.classList.remove("hidden");

};

document.querySelectorAll(".mode-btn").forEach(button => {

  button.onclick = () => {

    currentMode = button.dataset.mode;

    startGame();

  };

});

$("dailyBtn").onclick = () => {

  hideAll();

  dailyScreen.classList.remove("hidden");

  updateDailyUI();

};

$("dailyStartBtn").onclick = startDaily;

$("dailyBackBtn").onclick = () => {

  hideAll();

  menu.classList.remove("hidden");

};

$("wordsBtn").onclick = showWords;

$("highBtn").onclick = () => {

  hideAll();

  highScreen.classList.remove("hidden");

  $("highScoreValue").textContent = highScore;

};

$("themeBtn").onclick = () => {

  document.body.classList.toggle("dark");

  const dark = document.body.classList.contains("dark");

  $("themeBtn").textContent = dark ? "☀️" : "🌙";

  localStorage.setItem("vocabularyTheme", dark ? "dark" : "light");

};

$("speakBtn").onclick = speak;

$("resultMenuBtn").onclick = () => {

  clearInterval(timerInterval);

  hideAll();

  menu.classList.remove("hidden");

  updateMenuStats();

};

$("restartBtn").onclick = () => {

  hideAll();

  modeScreen.classList.remove("hidden");

};

$("wordsBackBtn").onclick = () => {

  hideAll();

  menu.classList.remove("hidden");

};

$("highBackBtn").onclick = () => {

  hideAll();

  menu.classList.remove("hidden");

};

$("quitBtn").onclick = () => {

  clearInterval(timerInterval);

  hideAll();

  menu.classList.remove("hidden");

  updateMenuStats();

};


/* =========================================================
   THEME LOAD
========================================================= */

const savedTheme = localStorage.getItem("vocabularyTheme");

if(savedTheme === "dark"){

  document.body.classList.add("dark");

  $("themeBtn").textContent = "☀️";

}


/* =========================================================
   STARTUP
========================================================= */

updateDailyUI();

updateMenuStats();


/* =========================================================
   EMOJI → SVG IKONLAR
========================================================= */

(() => {

  const icons = {
    "🎮": "i-game",
    "🧩": "i-layers",
    "🏆": "i-trophy",
    "📚": "i-book",
    "📖": "i-book",
    "🎯": "i-target",
    "⭐": "i-sparkles",
    "✨": "i-sparkles",
    "💡": "i-lightbulb",
    "🔊": "i-volume",
    "🌙": "i-moon",
    "☀️": "i-sun",
    "☀": "i-sun",
    "❤️": "i-heart",
    "❤": "i-heart",
    "❌": "i-close",
    "✖️": "i-close",
    "✓": "i-check",
    "✅": "i-check",
    "🔄": "i-refresh",
    "🔗": "i-link",
    "✍️": "i-edit",
    "💬": "i-message",
    "🔤": "i-keyboard",
    "⏱️": "i-clock",
    "⏰": "i-clock",
    "🚪": "i-arrow",
    "🏁": "i-flag",
    "📈": "i-target",
    "📅": "i-clock",
    "🎁": "i-sparkles",
    "🚀": "i-game",
    "⚡": "i-sparkles",
    "🇬🇧": "i-book",
    "🇺🇿": "i-book",
    "🔥": "i-sparkles"
  };

  const pattern = new RegExp(
    Object.keys(icons)
      .sort((a, b) => b.length - a.length)
      .map(s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    "gu"
  );

  const sprite = document.querySelector("body > svg");

  if(sprite && !sprite.querySelector("#i-close")){

    sprite.insertAdjacentHTML("beforeend", `
      <symbol id="i-close" viewBox="0 0 24 24">
        <path d="m6 6 12 12M18 6 6 18"/>
      </symbol>
    `);

  }

  function convertTextNode(node){

    if(
      !node.parentElement ||
      node.parentElement.closest("script,style,svg,.svg-emoji")
    ){
      return;
    }

    const text = node.nodeValue;

    pattern.lastIndex = 0;

    if(!pattern.test(text)) return;

    pattern.lastIndex = 0;

    const fragment = document.createDocumentFragment();

    let last = 0;

    for(const match of text.matchAll(pattern)){

      const emoji = match[0];

      const index = match.index;

      fragment.appendChild(
        document.createTextNode(text.slice(last, index))
      );

      const wrapper = document.createElement("span");

      wrapper.className = "svg-emoji";

      wrapper.setAttribute("aria-hidden", "true");

      const svg = document.createElementNS(
        "http://www.w3.org/2000/svg", "svg"
      );

      svg.setAttribute("class", "icon-svg");

      svg.setAttribute("viewBox", "0 0 24 24");

      svg.setAttribute("focusable", "false");

      const use = document.createElementNS(
        "http://www.w3.org/2000/svg", "use"
      );

      use.setAttribute("href", "#" + icons[emoji]);

      svg.appendChild(use);

      wrapper.appendChild(svg);

      fragment.appendChild(wrapper);

      last = index + emoji.length;

    }

    fragment.appendChild(
      document.createTextNode(text.slice(last))
    );

    node.replaceWith(fragment);

  }

  function scan(root){

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];

    while(walker.nextNode()){

      nodes.push(walker.currentNode);

    }

    nodes.forEach(convertTextNode);

  }

  scan(document.body);

  const observer = new MutationObserver(records => {

    for(const record of records){

      if(record.type === "characterData"){

        convertTextNode(record.target);

      }

      record.addedNodes.forEach(node => {

        if(node.nodeType === Node.TEXT_NODE){

          convertTextNode(node);

        }else if(
          node.nodeType === Node.ELEMENT_NODE &&
          !node.matches("script,style,svg")
        ){

          scan(node);

        }

      });

    }

  });

  observer.observe(document.body, {
    childList: true,
    characterData: true,
    subtree: true
  });

})();
