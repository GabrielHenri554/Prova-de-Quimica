
const elements = [


  { symbol: "K", name: "Potássio", atomicNumber: 19, elementGroup: "1A", interestingFact: "O ________ é um metal altamente reativo que é essencial para o bom funcionamento do corpo humano." },
  { symbol: "Mg", name: "Magnésio", atomicNumber: 12, elementGroup: "2A", interestingFact: "O ________ é um elemento utilizado em ligas metálicas e é importante para o metabolismo do corpo humano." },
  { symbol: "Ar", name: "Argônio", atomicNumber: 18, elementGroup: "18A", interestingFact: "O ________ é um gás nobre incolor e inodoro, amplamente utilizado em lâmpadas incandescentes." },
  { symbol: "F", name: "Flúor", atomicNumber: 9, elementGroup: "17A", interestingFact: "O ________ é um elemento usado para prevenir cáries dentárias e fortalecer o esmalte dos dentes." },
  { symbol: "Zn", name: "Zinco", atomicNumber: 30, elementGroup: "2B", interestingFact: "O ________ é um metal que é usado em ligas, pilhas e é essencial para o sistema imunológico." },
  { symbol: "He", name: "Hélio", atomicNumber: 2, elementGroup: "18A", interestingFact: "O ________ é um gás nobre usado para preencher balões e dirigíveis." },
  { symbol: "Si", name: "Silício", atomicNumber: 14, elementGroup: "14A", interestingFact: "O ________ é o segundo elemento mais abundante na crosta terrestre e é usado em circuitos eletrônicos." },
  { symbol: "Ag", name: "Prata", atomicNumber: 47, elementGroup: "1B", interestingFact: "A ________ é um metal conhecido por sua alta condutividade elétrica e é usado em joias e moedas." },
  { symbol: "Br", name: "Bromo", atomicNumber: 35, elementGroup: "17A", interestingFact: "O ________ é um líquido vermelho volátil usado como um desinfetante eficaz." },
  { symbol: "Al", name: "Alumínio", atomicNumber: 13, elementGroup: "13A", interestingFact: "O ________ é o metal mais abundante na crosta terrestre e é usado em várias aplicações industriais." },
];


function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  shuffleQuestions(elements);
  
  const elementImage = document.getElementById("elementImage");
  const atomicNumberElement = document.getElementById("atomicNumber");
  const elementGroupElement = document.getElementById("elementGroup");
  const interestingFactElement = document.getElementById("interestingFact");
  const guessInput = document.getElementById("guessInput");
  const checkButton = document.getElementById("checkButton");
  const resultMessageElement = document.getElementById("resultMessage");
  const nextButton = document.getElementById("nextButton");
  const scoreList = document.getElementById("scoreList");
  
  let currentElementIndex = -1;
  let correctAnswer = "";
  let score = 0;
  let totalRounds = 0;
  
  function getRandomElement() {
    return elements[Math.floor(Math.random() * elements.length)];
  }
  
  function displayElement(element) {
    elementImage.textContent = element.symbol;
    atomicNumberElement.textContent = `Número Atômico: ${element.atomicNumber}`;
    elementGroupElement.textContent = `Grupo: ${element.elementGroup}`;
    interestingFactElement.textContent = `Fato Interessante: ${element.interestingFact}`;
  }
  
  function startGame() {
    score = 0;
    totalRounds = 0;
    updateScoreList();
    nextRound();
  }
  
  function nextRound() {
    currentElementIndex++;
    if (currentElementIndex < elements.length) {
      const currentElement = elements[currentElementIndex];
      displayElement(currentElement);
      correctAnswer = currentElement.name.toLowerCase();
      guessInput.value = "";
      guessInput.disabled = false;
      checkButton.disabled = false;
      nextButton.style.display = "none";
      resultMessageElement.textContent = "";
      totalRounds++;
    } else {

      elementImage.textContent = "Fim";
      atomicNumberElement.textContent = "";
      elementGroupElement.textContent = "";
      interestingFactElement.textContent = "";
      guessInput.value = "";
      guessInput.disabled = true;
      checkButton.disabled = true;
      resultMessageElement.textContent = `Parabéns! Você concluiu o jogo com ${score} pontos de ${totalRounds}.`;
      nextButton.style.display = "none";
    }
  }
  
  function checkAnswer() {
    const userAnswer = guessInput.value.trim().toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
  
    resultMessageElement.textContent = isCorrect ? "Resposta correta!" : `Resposta incorreta. A resposta correta é ${correctAnswer}.`;
  
    if (isCorrect) {
      score++;
      scoreList.innerHTML += `<li class="correct"><span>${elements[currentElementIndex].name}</span> (+1 ponto)</li>`;
    } else {
      scoreList.innerHTML += `<li class="incorrect"><span>${elements[currentElementIndex].name}</span> (0 pontos)</li>`;
    }
  
    guessInput.disabled = true;
    checkButton.disabled = true;
    nextButton.style.display = "block";
    updateScoreList();
  }
  
  function updateScoreList() {
    scoreList.innerHTML = `
      <li><span>Elemento Químico</span><span>Pontuação</span></li>
      <li><span>Total</span><span>${score} de ${totalRounds}</span></li>
    `;
  }
  
  checkButton.addEventListener("click", checkAnswer);
  nextButton.addEventListener("click", nextRound);
  
  startGame();
  