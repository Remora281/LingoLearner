const hasSpeechSynthesis = "speechSynthesis" in window;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const categorySeeds = [
  {
    id: "sports",
    name: "Sports Spanish",
    short: "Words, commands, game talk",
    color: "#2f8df7",
    icon: "M12 3a9 9 0 1 0 9 9h-4a5 5 0 0 1-5 5v4A9 9 0 0 0 12 3Zm0 0v4a5 5 0 0 1 5 5h4a9 9 0 0 0-9-9Zm0 4v10a5 5 0 0 1 0-10Z",
    coachTitle: "Hear it, say it, type it",
    coachCopy: "Tap the speaker, read the pronunciation, then try saying the word out loud.",
    words: [
      w("ball", "la pelota", "lah peh-LOH-tah"),
      w("player", "el jugador", "ehl hoo-gah-DOR"),
      w("team", "el equipo", "ehl eh-KEE-poh"),
      w("game", "el partido", "ehl par-TEE-doh"),
      w("defense", "la defensa", "lah deh-FEN-sah"),
      w("score", "el marcador", "ehl mar-kah-DOR"),
      w("foul", "la falta", "lah FAHL-tah"),
      w("coach", "el entrenador", "ehl en-treh-nah-DOR"),
      w("goal", "el gol", "ehl gohl"),
      w("field", "el campo", "ehl KAHM-poh"),
      w("to pass", "pasar", "pah-SAR"),
      w("to shoot", "tirar", "tee-RAR"),
      w("to run", "correr", "koh-RER"),
      w("to help", "ayudar", "ah-yoo-DAR"),
      w("to mark", "marcar", "mar-KAR"),
      w("left", "izquierda", "ees-KYEHR-dah"),
      w("right", "derecha", "deh-REH-chah"),
      w("fast", "r\u00e1pido", "RAH-pee-doh"),
      w("open", "libre", "LEE-breh"),
      w("timeout", "el tiempo fuera", "ehl TYEHM-poh FWEH-rah")
    ],
    phrases: [
      p("Pass the ball.", "Pasa la pelota.", "PAH-sah lah peh-LOH-tah"),
      p("Shoot now!", "\u00a1Tira ahora!", "TEE-rah ah-OH-rah"),
      p("I am open.", "Estoy libre.", "eh-STOY LEE-breh"),
      p("Good defense.", "Buena defensa.", "BWEH-nah deh-FEN-sah"),
      p("What is the score?", "\u00bfCu\u00e1l es el marcador?", "kwahl es ehl mar-kah-DOR"),
      p("That was a foul.", "Eso fue una falta.", "EH-soh fweh OO-nah FAHL-tah"),
      p("Cover your player.", "Marca a tu jugador.", "MAR-kah ah too hoo-gah-DOR"),
      p("Move quickly to the left.", "Mu\u00e9vete r\u00e1pido a la izquierda.", "MWEH-veh-teh RAH-pee-doh ah lah ees-KYEHR-dah"),
      p("We won the match.", "Ganamos el partido.", "gah-NAH-mohs ehl par-TEE-doh")
    ]
  },
  {
    id: "street",
    name: "Street Spanish",
    short: "Greetings, directions, help",
    color: "#ff6b6b",
    icon: "M4 20V8l8-4 8 4v12h-5v-6H9v6H4Zm5-8h6V9H9v3Z",
    coachTitle: "Sound natural outside",
    coachCopy: "Start with polite words, then directions, then real street conversations.",
    words: [
      w("hello", "hola", "OH-lah"),
      w("thanks", "gracias", "GRAH-syahs"),
      w("please", "por favor", "por fah-VOR"),
      w("good", "bien", "byen"),
      w("friend", "amigo", "ah-MEE-goh"),
      w("street", "la calle", "lah KAH-yeh"),
      w("train", "el tren", "ehl tren"),
      w("bus", "el autob\u00fas", "ehl ow-toh-BOOS"),
      w("left", "la izquierda", "lah ees-KYEHR-dah"),
      w("right", "la derecha", "lah deh-REH-chah"),
      w("far", "lejos", "LEH-hohs"),
      w("near", "cerca", "SEHR-kah"),
      w("where", "d\u00f3nde", "DON-deh"),
      w("here", "aqu\u00ed", "ah-KEE"),
      w("there", "all\u00ed", "ah-YEE"),
      w("help", "ayuda", "ah-YOO-dah"),
      w("phone", "el tel\u00e9fono", "ehl teh-LEH-foh-noh"),
      w("slowly", "despacio", "deh-SPAH-syoh"),
      w("to understand", "entender", "en-ten-DER"),
      w("lost", "perdido", "pehr-DEE-doh")
    ],
    phrases: [
      p("What's up?", "\u00bfQu\u00e9 tal?", "keh tahl"),
      p("All good.", "Todo bien.", "TOH-doh byen"),
      p("See you later.", "Nos vemos luego.", "nohs VEH-mohs LWEH-goh"),
      p("Have a good day.", "Que tengas buen d\u00eda.", "keh TEN-gahs bwen DEE-ah"),
      p("Where is the train?", "\u00bfD\u00f3nde est\u00e1 el tren?", "DON-deh eh-STAH ehl tren"),
      p("I am looking for this street.", "Busco esta calle.", "BOOS-koh EH-stah KAH-yeh"),
      p("Is it far?", "\u00bfEst\u00e1 lejos?", "eh-STAH LEH-hohs"),
      p("Can you help me?", "\u00bfMe puedes ayudar?", "meh PWEH-dehs ah-yoo-DAR"),
      p("Please speak slower.", "Habla m\u00e1s despacio, por favor.", "AH-blah mahs deh-SPAH-syoh por fah-VOR")
    ]
  },
  {
    id: "business",
    name: "Business Spanish",
    short: "Office words to meetings",
    color: "#8d6cf6",
    icon: "M4 8h16v11H4V8Zm4 0V5h8v3h-2V7h-4v1H8Zm-4 4h16v2H4v-2Z",
    coachTitle: "Practice professional Spanish",
    coachCopy: "Learn office vocabulary, then build meeting and client-call fluency.",
    words: [
      w("meeting", "la reuni\u00f3n", "lah reh-oo-NYON"),
      w("question", "la pregunta", "lah preh-GOON-tah"),
      w("report", "el informe", "ehl een-FOR-meh"),
      w("client", "el cliente", "ehl klee-EN-teh"),
      w("time", "el tiempo", "ehl TYEHM-poh"),
      w("proposal", "la propuesta", "lah proh-PWEH-stah"),
      w("deadline", "la fecha l\u00edmite", "lah FEH-chah LEE-mee-teh"),
      w("information", "la informaci\u00f3n", "lah een-for-mah-SYON"),
      w("email", "el correo", "ehl koh-REH-oh"),
      w("office", "la oficina", "lah oh-fee-SEE-nah"),
      w("to begin", "empezar", "em-peh-SAR"),
      w("to repeat", "repetir", "reh-peh-TEER"),
      w("to send", "enviar", "en-BYAR"),
      w("to schedule", "programar", "proh-grah-MAR"),
      w("ready", "listo", "LEES-toh"),
      w("urgent", "urgente", "oor-HEN-teh"),
      w("important", "importante", "eem-por-TAHN-teh"),
      w("formal", "formal", "for-MAHL"),
      w("project", "el proyecto", "ehl proh-YEK-toh"),
      w("budget", "el presupuesto", "ehl preh-soo-PWEH-stoh")
    ],
    phrases: [
      p("Let's begin.", "Empecemos.", "em-peh-SEH-mohs"),
      p("Can you repeat that?", "\u00bfPuede repetir eso?", "PWEH-deh reh-peh-TEER EH-soh"),
      p("I have a question.", "Tengo una pregunta.", "TEN-goh OO-nah preh-GOON-tah"),
      p("That sounds good.", "Eso suena bien.", "EH-soh SWEH-nah byen"),
      p("Thank you for your time.", "Gracias por su tiempo.", "GRAH-syahs por soo TYEHM-poh"),
      p("I will send the proposal.", "Enviar\u00e9 la propuesta.", "en-bya-REH lah proh-PWEH-stah"),
      p("When is the deadline?", "\u00bfCu\u00e1ndo es la fecha l\u00edmite?", "KWAN-doh es lah FEH-chah LEE-mee-teh"),
      p("This is urgent.", "Esto es urgente.", "EH-stoh es oor-HEN-teh"),
      p("Let's schedule a meeting.", "Programemos una reuni\u00f3n.", "proh-grah-MEH-mohs OO-nah reh-oo-NYON")
    ]
  },
  {
    id: "food",
    name: "Food Spanish",
    short: "Cafe, meals, markets",
    color: "#ffc83d",
    icon: "M7 3h2v8H7V3Zm4 0h2v8h-2V3Zm4 0h2v18h-2v-8h-2V3h2ZM7 13h6v8H7v-8Z",
    coachTitle: "Order out loud",
    coachCopy: "Use speaker and mic practice to get comfortable ordering food.",
    words: [
      w("water", "el agua", "ehl AH-gwah"),
      w("coffee", "el caf\u00e9", "ehl kah-FEH"),
      w("milk", "la leche", "lah LEH-cheh"),
      w("bread", "el pan", "ehl pahn"),
      w("bill", "la cuenta", "lah KWEN-tah"),
      w("delicious", "delicioso", "deh-lee-SYOH-soh"),
      w("fresh", "fresco", "FREHS-koh"),
      w("without", "sin", "seen"),
      w("with", "con", "kohn"),
      w("onion", "la cebolla", "lah seh-BOH-yah"),
      w("menu", "el men\u00fa", "ehl meh-NOO"),
      w("table", "la mesa", "lah MEH-sah"),
      w("fork", "el tenedor", "ehl teh-neh-DOR"),
      w("allergic", "al\u00e9rgico", "ah-LEHR-hee-koh"),
      w("nuts", "las nueces", "lahs NWEH-sehs"),
      w("how much", "cu\u00e1nto", "KWAN-toh"),
      w("kilo", "el kilo", "ehl KEE-loh"),
      w("two", "dos", "dohs"),
      w("to recommend", "recomendar", "reh-koh-men-DAR"),
      w("market", "el mercado", "ehl mehr-KAH-doh")
    ],
    phrases: [
      p("I would like a coffee.", "Quisiera un caf\u00e9.", "kee-SYEH-rah oon kah-FEH"),
      p("With milk, please.", "Con leche, por favor.", "kohn LEH-cheh por fah-VOR"),
      p("The bill, please.", "La cuenta, por favor.", "lah KWEN-tah por fah-VOR"),
      p("Do you have water?", "\u00bfTiene agua?", "TYEH-neh AH-gwah"),
      p("What do you recommend?", "\u00bfQu\u00e9 recomienda?", "keh reh-koh-MYEN-dah"),
      p("I am allergic to nuts.", "Soy al\u00e9rgico a las nueces.", "soy ah-LEHR-hee-koh ah lahs NWEH-sehs"),
      p("No onions, please.", "Sin cebolla, por favor.", "seen seh-BOH-yah por fah-VOR"),
      p("How much does it cost?", "\u00bfCu\u00e1nto cuesta?", "KWAN-toh KWEH-stah"),
      p("I will take two.", "Me llevo dos.", "meh YEH-voh dohs")
    ]
  }
];

const categories = categorySeeds.map((seed) => ({ ...seed, lessons: buildLessons(seed) }));

const state = {
  categoryId: "sports",
  xp: Number(localStorage.getItem("lingualanes-xp") || 0),
  hearts: Number(localStorage.getItem("lingualanes-hearts") || 5),
  streak: Number(localStorage.getItem("lingualanes-streak") || 1),
  completed: JSON.parse(localStorage.getItem("lingualanes-completed") || "{}"),
  missed: JSON.parse(localStorage.getItem("lingualanes-missed") || "[]"),
  typingMode:
    localStorage.getItem("lingualanes-typing") === null
      ? true
      : localStorage.getItem("lingualanes-typing") === "true",
  micMode: localStorage.getItem("lingualanes-mic") === "true",
  session: null
};

const nodes = {
  navItems: document.querySelectorAll(".nav-item"),
  views: document.querySelectorAll(".view"),
  categoryStrip: document.querySelector("#category-strip"),
  lessonPath: document.querySelector("#lesson-path"),
  currentTopicLabel: document.querySelector("#current-topic-label"),
  currentTopicTitle: document.querySelector("#current-topic-title"),
  coachTitle: document.querySelector("#coach-title"),
  coachCopy: document.querySelector("#coach-copy"),
  startNext: document.querySelector("#start-next"),
  resetProgress: document.querySelector("#reset-progress"),
  goalCount: document.querySelector("#goal-count"),
  goalFill: document.querySelector("#goal-fill"),
  xp: document.querySelector("#xp"),
  hearts: document.querySelector("#hearts"),
  streak: document.querySelector("#streak"),
  phraseList: document.querySelector("#phrase-list"),
  phraseSearch: document.querySelector("#phrase-search"),
  reviewMissed: document.querySelector("#review-missed"),
  speedRound: document.querySelector("#speed-round"),
  typingDrill: document.querySelector("#typing-drill"),
  lessonDialog: document.querySelector("#lesson-dialog"),
  closeLesson: document.querySelector("#close-lesson"),
  lessonCategory: document.querySelector("#lesson-category"),
  lessonTitle: document.querySelector("#lesson-title"),
  lessonProgressFill: document.querySelector("#lesson-progress-fill"),
  typingToggle: document.querySelector("#typing-toggle"),
  micToggle: document.querySelector("#mic-toggle"),
  promptKind: document.querySelector("#prompt-kind"),
  promptText: document.querySelector("#prompt-text"),
  promptHint: document.querySelector("#prompt-hint"),
  answerZone: document.querySelector("#answer-zone"),
  feedback: document.querySelector("#feedback"),
  skipQuestion: document.querySelector("#skip-question"),
  checkAnswer: document.querySelector("#check-answer")
};

function w(english, spanish, pronunciation) {
  return { type: "word", english, spanish, pronunciation };
}

function p(english, spanish, pronunciation) {
  return { type: "phrase", english, spanish, pronunciation };
}

function buildLessons(seed) {
  const groups = [
    { label: "Beginner", count: 25, base: "Word foundation", size: 4, phraseCount: 0 },
    { label: "Medium", count: 25, base: "Phrase builder", size: 5, phraseCount: 2 },
    { label: "Advanced", count: 25, base: "Real conversation", size: 6, phraseCount: 4 },
    { label: "Mixed", count: 25, base: "Review challenge", size: 7, phraseCount: 3 }
  ];

  const lessons = [];
  groups.forEach((group) => {
    for (let index = 0; index < group.count; index += 1) {
      const levelNumber = lessons.length + 1;
      const wordOffset = index * 2 + (group.label === "Mixed" ? levelNumber : 0);
      const phraseOffset = index + (group.label === "Advanced" ? 3 : 0);
      const words = pickRotating(seed.words, wordOffset, group.size);
      const phrases = pickRotating(seed.phrases, phraseOffset, group.phraseCount);
      lessons.push({
        title: `Level ${levelNumber}: ${group.base}`,
        level: group.label,
        description: lessonDescription(group.label, index),
        words,
        phrases
      });
    }
  });
  return lessons;
}

function lessonDescription(level, index) {
  if (level === "Beginner") return `Learn and pronounce core words ${index + 1}`;
  if (level === "Medium") return `Build short phrases with known words ${index + 1}`;
  if (level === "Advanced") return `Use longer real-world sentences ${index + 1}`;
  return `Mixed review with words, phrases, typing, and speech ${index + 1}`;
}

function pickRotating(items, start, count) {
  const picked = [];
  for (let index = 0; index < count; index += 1) {
    picked.push(items[(start + index) % items.length]);
  }
  return picked;
}

function getCategory(id = state.categoryId) {
  return categories.find((category) => category.id === id) || categories[0];
}

function lessonKey(categoryId, lessonIndex) {
  return `${categoryId}:${lessonIndex}`;
}

function saveState() {
  localStorage.setItem("lingualanes-xp", String(state.xp));
  localStorage.setItem("lingualanes-hearts", String(state.hearts));
  localStorage.setItem("lingualanes-streak", String(state.streak));
  localStorage.setItem("lingualanes-completed", JSON.stringify(state.completed));
  localStorage.setItem("lingualanes-missed", JSON.stringify(state.missed));
  localStorage.setItem("lingualanes-typing", String(state.typingMode));
  localStorage.setItem("lingualanes-mic", String(state.micMode));
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\b(el|la|los|las|un|una)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function lessonItems(category, lesson, lessonIndex) {
  const addMeta = (item) => ({
    ...item,
    category: category.name,
    categoryId: category.id,
    lesson: lesson.title,
    lessonIndex,
    level: lesson.level
  });
  return [...lesson.words.map(addMeta), ...lesson.phrases.map(addMeta)];
}

function allLearningItems() {
  return categories.flatMap((category) =>
    category.lessons.flatMap((lesson, lessonIndex) => lessonItems(category, lesson, lessonIndex))
  );
}

function categoryProgress(category) {
  const complete = category.lessons.filter((_, index) => state.completed[lessonKey(category.id, index)]).length;
  return { complete, total: category.lessons.length };
}

function renderStats() {
  const daily = Math.min(5, Math.floor(state.xp / 10));
  nodes.goalCount.textContent = daily;
  nodes.goalFill.style.width = `${(daily / 5) * 100}%`;
  nodes.xp.textContent = `${state.xp} XP`;
  nodes.hearts.textContent = state.hearts;
  nodes.streak.textContent = state.streak;
}

function renderCategories() {
  nodes.categoryStrip.innerHTML = "";
  categories.forEach((category) => {
    const progress = categoryProgress(category);
    const button = document.createElement("button");
    button.className = `category-button ${category.id === state.categoryId ? "active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="category-icon" style="background:${category.color}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${category.icon}"></path></svg>
      </span>
      <span>
        <strong>${category.name}</strong>
        <span>${progress.complete}/${progress.total} levels done</span>
      </span>
    `;
    button.addEventListener("click", () => {
      state.categoryId = category.id;
      renderApp();
    });
    nodes.categoryStrip.appendChild(button);
  });
}

function renderLessonPath() {
  const category = getCategory();
  let firstIncomplete = category.lessons.findIndex((_, index) => !state.completed[lessonKey(category.id, index)]);
  if (firstIncomplete === -1) firstIncomplete = category.lessons.length - 1;
  nodes.currentTopicLabel.textContent = `${category.name} - ${firstIncomplete + 1}/100`;
  nodes.currentTopicTitle.textContent = category.lessons[firstIncomplete].title;
  nodes.coachTitle.textContent = category.coachTitle;
  nodes.coachCopy.textContent = category.coachCopy;
  nodes.lessonPath.innerHTML = "";

  let currentLevel = "";
  category.lessons.forEach((lesson, index) => {
    if (lesson.level !== currentLevel) {
      currentLevel = lesson.level;
      const divider = document.createElement("div");
      divider.className = "path-divider";
      divider.textContent = `${lesson.level} levels`;
      nodes.lessonPath.appendChild(divider);
    }

    const complete = Boolean(state.completed[lessonKey(category.id, index)]);
    const unlocked = index === 0 || Boolean(state.completed[lessonKey(category.id, index - 1)]);
    const current = index === firstIncomplete && unlocked && !complete;
    const node = document.createElement("article");
    node.className = "lesson-node";
    node.innerHTML = `
      <button class="node-button ${complete ? "complete" : ""} ${unlocked ? "unlocked" : ""} ${current ? "current" : ""}" type="button" ${unlocked ? "" : "disabled"} aria-label="${lesson.title}">
        <span>${index + 1}</span>
      </button>
      <div class="node-copy">
        <b class="level-tag">${lesson.level}</b>
        <strong>${lesson.title}</strong>
        <span>${lesson.description}</span>
      </div>
    `;
    node.querySelector("button").addEventListener("click", () => startLesson(category.id, index));
    nodes.lessonPath.appendChild(node);
  });
}

function renderPhrasebook() {
  const query = normalize(nodes.phraseSearch.value || "");
  const items = uniqueItems(allLearningItems()).filter((item) => {
    const text = normalize(`${item.english} ${item.spanish} ${item.pronunciation} ${item.category} ${item.level}`);
    return !query || text.includes(query);
  });
  nodes.phraseList.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("article");
    row.className = "phrase-row";
    row.innerHTML = `
      <strong>${item.spanish}<small>${item.pronunciation}</small></strong>
      <span>${item.english}</span>
      <button class="sound-button" type="button" title="Hear pronunciation" aria-label="Hear ${item.spanish}">Hear</button>
      <b class="tag">${item.type}</b>
    `;
    row.querySelector(".sound-button").addEventListener("click", () => speakText(item.spanish));
    nodes.phraseList.appendChild(row);
  });
}

function renderApp() {
  renderStats();
  renderCategories();
  renderLessonPath();
  renderPhrasebook();
}

function uniqueItems(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.type}:${item.spanish}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function wrongOptions(correct, field, type, categoryId) {
  const allCandidates = uniqueItems(allLearningItems()).filter(
    (item) => item[field] !== correct && (!type || item.type === type)
  );
  const categoryCandidates = allCandidates.filter((item) => item.categoryId === categoryId);
  const candidates = categoryCandidates.length >= 3 ? categoryCandidates : allCandidates;
  return shuffle(candidates).slice(0, 3).map((item) => item[field]);
}

function studyQuestion(item) {
  return {
    type: "study",
    kind: item.type === "word" ? "New word" : "New phrase",
    prompt: item.spanish,
    hint: item.english,
    correct: item.spanish,
    item
  };
}

function choiceQuestion(item, reverse = false) {
  if (reverse) {
    return {
      type: "choice",
      kind: `${capitalize(item.type)} check`,
      prompt: `What is "${item.english}" in Spanish?`,
      hint: "Choose the Spanish answer.",
      correct: item.spanish,
      choices: shuffle([item.spanish, ...wrongOptions(item.spanish, "spanish", item.type, item.categoryId)]),
      item
    };
  }

  return {
    type: "choice",
    kind: `${capitalize(item.type)} check`,
    prompt: `What does "${item.spanish}" mean?`,
    hint: "Choose the English meaning.",
    correct: item.english,
    choices: shuffle([item.english, ...wrongOptions(item.english, "english", item.type, item.categoryId)]),
    item
  };
}

function typeQuestion(item) {
  return {
    type: "type",
    kind: `Type the ${item.type}`,
    prompt: item.english,
    hint: "Type the Spanish answer from memory.",
    correct: item.spanish,
    item
  };
}

function buildQuestion(item) {
  return {
    type: "build",
    kind: "Build the phrase",
    prompt: item.english,
    hint: "Tap the Spanish words in order.",
    correct: item.spanish,
    words: shuffle(item.spanish.replace(/[.!?\u00bf\u00a1]/g, "").split(" ")),
    item
  };
}

function sayQuestion(item) {
  return {
    type: "say",
    kind: "Say it out loud",
    prompt: item.spanish,
    hint: `Pronunciation: ${item.pronunciation}`,
    correct: item.spanish,
    item
  };
}

function buildQuestions(lesson, category, lessonIndex, options = {}) {
  const includeStudy = options.includeStudy !== false;
  const includeTyping = options.includeTyping ?? state.typingMode;
  const includeMic = options.includeMic ?? state.micMode;
  const items = options.items || lessonItems(category, lesson, lessonIndex);
  const questions = [];

  if (includeStudy) items.forEach((item) => questions.push(studyQuestion(item)));
  items.forEach((item, index) => {
    questions.push(choiceQuestion(item, index % 2 === 1));
    if (item.type === "phrase" && index % 2 === 0) questions.push(buildQuestion(item));
    if (includeTyping) questions.push(typeQuestion(item));
    if (includeMic) questions.push(sayQuestion(item));
  });

  return questions;
}

function startLesson(categoryId, lessonIndex, customItems = null, customTitle = null, lessonOptions = {}) {
  const category = getCategory(categoryId);
  const lesson = category.lessons[lessonIndex] || category.lessons[0];
  const custom = Boolean(customItems);
  const questions = buildQuestions(lesson, category, lessonIndex, {
    includeStudy: !custom,
    items: customItems || null,
    includeTyping: lessonOptions.includeTyping ?? state.typingMode,
    includeMic: lessonOptions.includeMic ?? state.micMode
  });
  state.session = {
    categoryId,
    lessonIndex,
    custom,
    title: customTitle || lesson.title,
    questions,
    index: 0,
    selected: null,
    built: [],
    checked: false,
    correctCount: 0,
    gradedTotal: questions.filter((question) => question.type !== "study").length,
    points: 0,
    listening: false,
    recognition: null,
    speechQuestion: null,
    speechStudyOnly: false,
    latestTranscript: "",
    finalTranscript: "",
    speechConfidence: 0,
    speechScored: false,
    transcript: ""
  };
  nodes.lessonCategory.textContent = category.name;
  nodes.lessonTitle.textContent = state.session.title;
  nodes.typingToggle.checked = state.typingMode;
  nodes.micToggle.checked = state.micMode;
  nodes.lessonDialog.showModal();
  renderQuestion();
}

function startNextLesson() {
  const category = getCategory();
  const nextIndex = category.lessons.findIndex((_, index) => !state.completed[lessonKey(category.id, index)]);
  startLesson(category.id, nextIndex === -1 ? category.lessons.length - 1 : nextIndex);
}

function renderQuestion() {
  const session = state.session;
  const question = session.questions[session.index];
  session.selected = null;
  session.built = [];
  session.checked = false;
  session.transcript = "";
  session.latestTranscript = "";
  session.finalTranscript = "";
  session.speechConfidence = 0;
  session.speechScored = false;
  session.speechQuestion = null;
  session.speechStudyOnly = false;
  nodes.feedback.className = "feedback";
  nodes.feedback.textContent = "";
  nodes.promptKind.textContent = question.kind;
  nodes.promptText.textContent = question.prompt;
  nodes.promptHint.textContent = question.hint;
  nodes.lessonProgressFill.style.width = `${(session.index / session.questions.length) * 100}%`;
  nodes.checkAnswer.textContent = question.type === "study" ? "Got it" : "Check";
  nodes.answerZone.innerHTML = "";

  if (question.item) {
    nodes.promptAreaSound?.remove?.();
  }

  if (question.type === "study") renderStudyQuestion(question);
  if (question.type === "choice") renderChoiceQuestion(question);
  if (question.type === "build") renderBuildQuestion(question);
  if (question.type === "type") renderTypeQuestion();
  if (question.type === "say") renderSayQuestion(question);
}

function renderStudyQuestion(question) {
  const card = document.createElement("div");
  card.className = "study-card";
  card.innerHTML = `
    <span>Spanish ${question.item.type}</span>
    <strong>${question.item.spanish}</strong>
    <em>${question.item.pronunciation}</em>
    <p>${question.item.english}</p>
    <div class="audio-actions">
      <button class="secondary-button speak-now" type="button">Hear it</button>
      <button class="secondary-button say-now" type="button">Start saying</button>
    </div>
    <div class="speech-readout" aria-live="polite">
      <span>Live transcript</span>
      <strong class="speech-live">Waiting for microphone.</strong>
      <p class="speech-result">Final result will appear here.</p>
    </div>
  `;
  card.querySelector(".speak-now").addEventListener("click", () => speakText(question.item.spanish));
  card.querySelector(".say-now").addEventListener("click", () => listenForSpeech(question, true));
  nodes.answerZone.appendChild(card);
}

function renderChoiceQuestion(question) {
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = choice;
    button.addEventListener("click", () => {
      document.querySelectorAll(".choice-button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      state.session.selected = choice;
    });
    nodes.answerZone.appendChild(button);
  });
}

function renderBuildQuestion(question) {
  const sentence = document.createElement("div");
  sentence.className = "sentence-bank";
  sentence.setAttribute("aria-label", "Built sentence");
  const bank = document.createElement("div");
  bank.className = "word-bank";
  bank.setAttribute("aria-label", "Word bank");
  question.words.forEach((word) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "word-chip";
    chip.textContent = word;
    chip.addEventListener("click", () => {
      state.session.built.push(word);
      chip.disabled = true;
      const placed = document.createElement("button");
      placed.type = "button";
      placed.className = "word-chip";
      placed.textContent = word;
      placed.addEventListener("click", () => {
        const removeIndex = state.session.built.indexOf(word);
        if (removeIndex >= 0) state.session.built.splice(removeIndex, 1);
        chip.disabled = false;
        placed.remove();
      });
      sentence.appendChild(placed);
    });
    bank.appendChild(chip);
  });
  nodes.answerZone.append(sentence, bank);
}

function renderTypeQuestion() {
  const input = document.createElement("input");
  input.className = "text-answer";
  input.type = "text";
  input.placeholder = "Type the Spanish";
  input.autocomplete = "off";
  input.addEventListener("input", () => {
    state.session.selected = input.value;
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkAnswer();
  });
  nodes.answerZone.appendChild(input);
  setTimeout(() => input.focus(), 40);
}

function renderSayQuestion(question) {
  const panel = document.createElement("div");
  panel.className = "speech-panel";
  panel.innerHTML = `
    <button class="primary-button listen-now" type="button">Start talking</button>
    <button class="secondary-button speak-now" type="button">Hear it first</button>
    <div class="speech-readout" aria-live="polite">
      <span>Live transcript</span>
      <strong class="speech-live">Waiting for microphone.</strong>
      <p class="speech-result">Final result will appear here.</p>
    </div>
  `;
  panel.querySelector(".listen-now").addEventListener("click", () => listenForSpeech(question, false));
  panel.querySelector(".speak-now").addEventListener("click", () => speakText(question.item.spanish));
  nodes.answerZone.appendChild(panel);
}

function getAnswer() {
  const question = state.session.questions[state.session.index];
  if (question.type === "build") return state.session.built.join(" ");
  if (question.type === "say") return state.session.transcript || "";
  return state.session.selected || "";
}

function recordMiss(question) {
  if (!question.item) return;
  const existing = state.missed.some(
    (item) => item.english === question.item.english && item.spanish === question.item.spanish
  );
  if (!existing) state.missed.push(question.item);
}

function checkAnswer() {
  const session = state.session;
  if (!session) return;

  if (session.checked) {
    advanceQuestion();
    return;
  }

  const question = session.questions[session.index];

  if (question.type === "say" && session.listening) {
    stopSpeechCapture();
    nodes.feedback.className = "feedback";
    nodes.feedback.textContent = "Scoring what I heard...";
    return;
  }

  if (question.type === "study") {
    session.points += 2;
    advanceQuestion();
    return;
  }

  const answer = getAnswer();
  if (!answer) {
    nodes.feedback.className = "feedback bad";
    nodes.feedback.textContent =
      question.type === "say" ? "Use the mic button first, or skip this one." : "Pick or enter an answer first.";
    return;
  }

  const correct = answerMatches(answer, question.correct, question.type);
  session.checked = true;
  nodes.checkAnswer.textContent = session.index === session.questions.length - 1 ? "Finish" : "Continue";

  if (correct) {
    session.correctCount += 1;
    session.points += question.type === "say" ? 15 : 10;
    nodes.feedback.className = "feedback good";
    nodes.feedback.textContent = question.type === "say" ? "Nice pronunciation match." : "Correct. Nice work.";
    document.querySelectorAll(".choice-button").forEach((button) => {
      if (normalize(button.textContent) === normalize(question.correct)) button.classList.add("correct");
    });
  } else {
    state.hearts = Math.max(0, state.hearts - 1);
    recordMiss(question);
    nodes.feedback.className = "feedback bad";
    nodes.feedback.textContent = `Almost. Correct answer: ${question.correct}`;
    document.querySelectorAll(".choice-button").forEach((button) => {
      if (button.classList.contains("selected")) button.classList.add("wrong");
      if (normalize(button.textContent) === normalize(question.correct)) button.classList.add("correct");
    });
  }

  saveState();
  renderStats();
}

function answerMatches(answer, correct, type) {
  if (type === "say") {
    return speechMatchDetails(answer, correct).matched;
  }
  return normalize(answer) === normalize(correct);
}

function normalizeSpeech(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function speechMatchDetails(answer, correct) {
  const spoken = normalizeSpeech(answer);
  const target = normalizeSpeech(correct);
  const spokenTokens = spoken.split(" ").filter(Boolean);
  const targetTokens = target.split(" ").filter(Boolean);

  if (!spoken || !target) return { matched: false, score: 0, spoken, target };
  if (spoken === target) return { matched: true, score: 1, spoken, target };

  const similarity = stringSimilarity(spoken, target);
  const tokenMatches = targetTokens.filter((token, index) => spokenTokens[index] === token).length;
  const tokenScore = targetTokens.length ? tokenMatches / targetTokens.length : 0;
  const lengthClose = Math.abs(spokenTokens.length - targetTokens.length) <= (targetTokens.length >= 5 ? 1 : 0);
  const threshold = targetTokens.length <= 2 ? 0.94 : targetTokens.length <= 5 ? 0.9 : 0.87;
  const matched = lengthClose && similarity >= threshold && tokenScore >= 0.75;

  return {
    matched,
    score: Math.max(similarity, tokenScore),
    spoken,
    target
  };
}

function stringSimilarity(a, b) {
  const maxLength = Math.max(a.length, b.length);
  if (maxLength === 0) return 1;
  return 1 - levenshteinDistance(a, b) / maxLength;
}

function levenshteinDistance(a, b) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  const current = Array.from({ length: b.length + 1 }, () => 0);

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(current[j - 1] + 1, previous[j] + 1, previous[j - 1] + cost);
    }
    for (let j = 0; j <= b.length; j += 1) previous[j] = current[j];
  }

  return previous[b.length];
}

function advanceQuestion() {
  const session = state.session;
  session.index += 1;
  if (session.index >= session.questions.length) {
    finishLesson();
    return;
  }
  renderQuestion();
}

function finishLesson() {
  const session = state.session;
  const gained = session.points + 5;
  state.xp += gained;
  state.hearts = Math.min(5, state.hearts + 1);
  if (!session.custom) state.completed[lessonKey(session.categoryId, session.lessonIndex)] = true;
  saveState();

  nodes.lessonProgressFill.style.width = "100%";
  nodes.feedback.className = "feedback good";
  nodes.feedback.textContent = `Lesson complete. You earned ${gained} XP.`;
  nodes.answerZone.innerHTML = "";
  nodes.promptKind.textContent = "Complete";
  nodes.promptText.textContent = `${session.correctCount}/${session.gradedTotal} checks correct`;
  nodes.promptHint.textContent = "Progress saved. The next level gets a little harder.";
  nodes.checkAnswer.textContent = "Done";
  state.session = null;
  renderApp();
}

function speakText(text) {
  if (!hasSpeechSynthesis) {
    nodes.feedback.className = "feedback bad";
    nodes.feedback.textContent = "Speech playback is not available in this browser.";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.78;
  window.speechSynthesis.speak(utterance);
}

function listenForSpeech(question, studyOnly) {
  if (!SpeechRecognition) {
    nodes.feedback.className = "feedback bad";
    nodes.feedback.textContent = "Mic pronunciation checks are not available in this browser.";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "es-ES";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  nodes.feedback.className = "feedback";
  nodes.feedback.textContent = "Listening...";
  const live = document.querySelector(".speech-live");
  const result = document.querySelector(".speech-result");
  if (live) live.textContent = "Listening now...";
  if (result) result.textContent = `Target: ${question.correct}`;

  recognition.onresult = (event) => {
    let interimTranscript = "";
    let finalTranscript = "";
    let confidence = 0;

    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript.trim();
      if (event.results[index].isFinal) {
        finalTranscript += transcript;
        confidence = event.results[index][0].confidence || 0;
      } else {
        interimTranscript += transcript;
      }
    }

    if (interimTranscript && live) {
      live.textContent = interimTranscript;
      if (result) result.textContent = "Keep speaking...";
    }

    if (!finalTranscript) return;

    if (state.session) state.session.transcript = finalTranscript;
    if (live) live.textContent = finalTranscript;

    const details = speechMatchDetails(finalTranscript, question.correct);
    const score = Math.round(details.score * 100);
    if (result) {
      result.textContent = `Heard: ${finalTranscript} • Match: ${score}% • Confidence: ${Math.round(confidence * 100)}%`;
    }

    nodes.feedback.className = details.matched ? "feedback good" : "feedback bad";
    nodes.feedback.textContent = details.matched
      ? "Pronunciation match accepted."
      : `Not quite. Try for exactly: ${question.correct}`;

    if (studyOnly && details.matched) nodes.feedback.textContent = "Nice. You can move on when ready.";
  };

  recognition.onerror = () => {
    nodes.feedback.className = "feedback bad";
    nodes.feedback.textContent = "Mic check could not start. Your browser may need microphone permission.";
  };

  recognition.start();
}

function closeLesson() {
  if (state.session?.listening) stopSpeechCapture();
  state.session = null;
  nodes.lessonDialog.close();
  renderApp();
}

function showView(viewName) {
  nodes.navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === viewName));
  nodes.views.forEach((view) => view.classList.toggle("active", view.id === `${viewName}-view`));
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function listenForSpeech(question, studyOnly) {
  if (!SpeechRecognition) {
    nodes.feedback.className = "feedback bad";
    nodes.feedback.textContent = "Mic pronunciation checks are not available in this browser.";
    return;
  }

  const session = state.session;
  if (!session) return;

  if (session.listening) {
    stopSpeechCapture();
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "es-ES";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  recognition.continuous = true;

  session.recognition = recognition;
  session.speechQuestion = question;
  session.speechStudyOnly = studyOnly;
  session.latestTranscript = "";
  session.finalTranscript = "";
  session.speechConfidence = 0;
  session.speechScored = false;
  session.transcript = "";
  session.listening = true;
  updateSpeechButtons(true);

  nodes.feedback.className = "feedback";
  nodes.feedback.textContent = "Listening... tap Done talking when you finish.";
  const live = document.querySelector(".speech-live");
  const result = document.querySelector(".speech-result");
  if (live) live.textContent = "Listening now...";
  if (result) result.textContent = `Target: ${question.correct}`;

  recognition.onresult = (event) => {
    let interimTranscript = "";
    let finalTranscript = "";
    let confidence = 0;

    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript.trim();
      if (event.results[index].isFinal) {
        finalTranscript += transcript;
        confidence = event.results[index][0].confidence || 0;
      } else {
        interimTranscript += transcript;
      }
    }

    const heardText = finalTranscript || interimTranscript;
    if (!heardText) return;

    session.latestTranscript = heardText;
    if (finalTranscript) {
      session.finalTranscript = finalTranscript;
      session.speechConfidence = confidence;
    }

    if (live) live.textContent = heardText;
    if (interimTranscript && result) result.textContent = "Keep speaking...";
  };

  recognition.onerror = () => {
    session.listening = false;
    session.recognition = null;
    updateSpeechButtons(false);
    nodes.feedback.className = "feedback bad";
    nodes.feedback.textContent = "Mic check could not start. Your browser may need microphone permission.";
  };

  recognition.onend = () => {
    scoreSpeechCapture();
  };

  recognition.start();
}

function stopSpeechCapture() {
  const session = state.session;
  if (!session || !session.listening) return;

  session.listening = false;
  updateSpeechButtons(false);

  try {
    session.recognition?.stop();
  } catch {
    scoreSpeechCapture();
  }

  window.setTimeout(scoreSpeechCapture, 250);
}

function scoreSpeechCapture() {
  const session = state.session;
  if (!session || !session.speechQuestion || session.speechScored) return;

  const question = session.speechQuestion;
  const heard = session.finalTranscript || session.latestTranscript;
  const live = document.querySelector(".speech-live");
  const result = document.querySelector(".speech-result");

  session.speechScored = true;
  session.listening = false;
  session.recognition = null;
  updateSpeechButtons(false);

  if (!heard) {
    nodes.feedback.className = "feedback bad";
    nodes.feedback.textContent = "I did not hear enough to score. Try again and tap Done talking.";
    if (live) live.textContent = "No speech captured.";
    if (result) result.textContent = `Target: ${question.correct}`;
    return;
  }

  session.transcript = heard;
  if (live) live.textContent = heard;

  const details = speechMatchDetails(heard, question.correct);
  const score = Math.round(details.score * 100);
  if (result) {
    result.textContent = `Heard: ${heard} | Match: ${score}% | Confidence: ${Math.round(session.speechConfidence * 100)}%`;
  }

  nodes.feedback.className = details.matched ? "feedback good" : "feedback bad";
  nodes.feedback.textContent = details.matched
    ? "Pronunciation match accepted."
    : `Not quite. Try for exactly: ${question.correct}`;

  if (session.speechStudyOnly && details.matched) {
    nodes.feedback.textContent = "Nice. You can move on when ready.";
  }
}

function updateSpeechButtons(listening) {
  document.querySelectorAll(".listen-now, .say-now").forEach((button) => {
    button.classList.toggle("recording", listening);
    if (listening) {
      button.textContent = "Done talking";
      return;
    }
    button.textContent = button.classList.contains("listen-now") ? "Start talking" : "Start saying";
  });
}

nodes.navItems.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

nodes.startNext.addEventListener("click", startNextLesson);
nodes.resetProgress.addEventListener("click", () => {
  state.xp = 0;
  state.hearts = 5;
  state.streak = 1;
  state.completed = {};
  state.missed = [];
  saveState();
  renderApp();
});
nodes.closeLesson.addEventListener("click", closeLesson);
nodes.lessonDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeLesson();
});
nodes.skipQuestion.addEventListener("click", () => {
  if (!state.session) return closeLesson();
  recordMiss(state.session.questions[state.session.index]);
  advanceQuestion();
});
nodes.checkAnswer.addEventListener("click", () => {
  if (!state.session) {
    nodes.lessonDialog.close();
    return;
  }
  checkAnswer();
});
nodes.typingToggle.addEventListener("change", () => {
  state.typingMode = nodes.typingToggle.checked;
  saveState();
});
nodes.micToggle.addEventListener("change", () => {
  state.micMode = nodes.micToggle.checked;
  saveState();
});
nodes.phraseSearch.addEventListener("input", renderPhrasebook);
nodes.speedRound.addEventListener("click", () => {
  const items = shuffle(uniqueItems(allLearningItems()).filter((item) => item.type === "word")).slice(0, 5);
  startLesson("sports", 0, items, "Five quick words", { includeTyping: false, includeMic: false });
});
nodes.reviewMissed.addEventListener("click", () => {
  const items = state.missed.length ? state.missed.slice(0, 6) : shuffle(uniqueItems(allLearningItems())).slice(0, 5);
  startLesson("sports", 0, items, state.missed.length ? "Review missed" : "Starter review");
});
nodes.typingDrill.addEventListener("click", () => {
  const items = shuffle(uniqueItems(allLearningItems())).slice(0, 8);
  startLesson("sports", 0, items, "Typing drill", { includeTyping: true, includeMic: false });
});

nodes.typingToggle.checked = state.typingMode;
nodes.micToggle.checked = state.micMode;
renderApp();
