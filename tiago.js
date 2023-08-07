
const elements = [


  { symbol: "Mn", name: "Manganês", atomicNumber: 25, elementGroup: "7B", interestingFact: "O ________ é um metal usado em ligas, como aço inoxidável e pilhas alcalinas." },
  { symbol: "Co", name: "Cobalto", atomicNumber: 27, elementGroup: "8B", interestingFact: "O ________ é um metal ferromagnético usado em ligas e ímãs." },
  { symbol: "Ni", name: "Níquel", atomicNumber: 28, elementGroup: "8B", interestingFact: "O ________ é um metal resistente à corrosão e é usado em moedas e jóias." },
  { symbol: "Zr", name: "Zircônio", atomicNumber: 40, elementGroup: "4B", interestingFact: "O ________ é um metal usado em reatores nucleares e joias sintéticas." },
  { symbol: "Ag", name: "Prata", atomicNumber: 47, elementGroup: "1B", interestingFact: "A ________ é um metal conhecido por sua alta condutividade elétrica e é usado em joias e moedas." },
  { symbol: "Sn", name: "Estanho", atomicNumber: 50, elementGroup: "4A", interestingFact: "O ________ é um metal usado para fazer latas de alimentos e é um componente de ligas de bronze e solda." },
  { symbol: "Pt", name: "Platina", atomicNumber: 78, elementGroup: "8B", interestingFact: "A ________ é um metal raro e valioso, usado em joias e equipamentos médicos." },
  { symbol: "Hg", name: "Mercúrio", atomicNumber: 80, elementGroup: "12B", interestingFact: "O ________ é o único metal líquido à temperatura ambiente e é tóxico para os seres humanos." },
  { symbol: "Pb", name: "Chumbo", atomicNumber: 82, elementGroup: "14B", interestingFact: "O ________ é um metal tóxico usado em baterias e revestimentos de cabos elétricos." },
  { symbol: "U", name: "Urânio", atomicNumber: 92, elementGroup: "3B", interestingFact: "O ________ é um metal radioativo usado como combustível em reatores nucleares." },
  { symbol: "Am", name: "Amerício", atomicNumber: 95, elementGroup: "3B", interestingFact: "O ________ é um elemento radioativo usado em detectores de fumaça." },
  { symbol: "Np", name: "Neptúnio", atomicNumber: 93, elementGroup: "3B", interestingFact: "O ________ é um elemento radioativo produzido em reatores nucleares e é usado para fins de pesquisa." },
  { symbol: "Cm", name: "Cúrio", atomicNumber: 96, elementGroup: "3B", interestingFact: "O ________ é um elemento radioativo e foi nomeado em homenagem aos Curie, famosos pesquisadores em radioatividade." },
  { symbol: "Es", name: "Einstênio", atomicNumber: 99, elementGroup: "3B", interestingFact: "O ________ é um elemento radioativo e foi nomeado em homenagem a Albert Einstein." },
  { symbol: "Fm", name: "Férmio", atomicNumber: 100, elementGroup: "3B", interestingFact: "O ________ é um elemento radioativo e foi nomeado em homenagem a Enrico Fermi, um físico italiano." },
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
      correctAnswer = currentElement.name.toUpperCase();
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
  