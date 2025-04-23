// Preguntas del juego - Updated with more challenging and nuanced questions
const questions = [
    {
        question: "¿Qué característica única destaca en la formación profesional inicial de Eva García Sáenz de Urturi?",
        options: [
            "Compatibilizó la Óptica con cursos de escritura creativa", 
            "Abandonó completamente la Óptica al publicar su primera novela", 
            "Nunca ejerció como óptica", 
            "La Óptica fue solo un trabajo temporal sin importancia"
        ],
        correctAnswer: 0,
        explanation: "Eva García Sáenz de Urturi se diplomó en Óptica y Optometría, trabajando varios años en este campo, pero simultáneamente participaba en cursos de escritura y ganaba premios de relatos cortos."
    },
    {
        question: "¿Cómo se puede interpretar el éxito literario de Eva García Sáenz de Urturi en términos de traducciones?",
        options: [
            "Sus obras solo se han traducido a 5 idiomas", 
            "Más de 20 idiomas han traducido sus novelas", 
            "No ha sido traducida internacionalmente", 
            "Solo se ha traducido a inglés y francés"
        ],
        correctAnswer: 1,
        explanation: "Sus obras han sido traducidas a más de 20 idiomas, lo que demuestra su gran popularidad nacional e internacional."
    },
    {
        question: "¿Qué evento cinematográfico marcó un punto de inflexión para una de sus novelas?",
        options: [
            "Aquitania fue adaptada en 2021", 
            "Los señores del tiempo se convirtió en serie", 
            "El silencio de la ciudad blanca se adaptó al cine en 2019", 
            "Ninguna de sus obras ha sido llevada al cine"
        ],
        correctAnswer: 2,
        explanation: "En 2019, 'El silencio de la ciudad blanca' fue adaptada al cine y se convirtió en una de las películas más vistas en Netflix en 2021."
    },
    {
        question: "¿Qué estrategia narrativa caracteriza la novela 'Aquitania'?",
        options: [
            "Solo narra eventos históricos lineales", 
            "Combina una trama medieval con una investigación contemporánea", 
            "Es una novela puramente histórica sin elementos de thriller", 
            "Se centra exclusivamente en Leonor de Aquitania"
        ],
        correctAnswer: 1,
        explanation: "Aquitania utiliza una estructura narrativa que alterna entre el pasado medieval de Leonor de Aquitania y una trama de investigación en el presente."
    },
    {
        question: "¿Qué elemento simbólico se destaca en el códice de 'Aquitania'?",
        options: [
            "Estaba escrito con tinta normal", 
            "Solo contenía texto en latín", 
            "Estaba escrito con tinta mezclada con sangre", 
            "Era completamente ilegible"
        ],
        correctAnswer: 2,
        explanation: "El códice está escrito con tinta mezclada con sangre, un detalle simbólico que recuerda los documentos reales medievales."
    },
    {
        question: "¿Cuál es la particularidad de la saga Los longevos?",
        options: [
            "Tiene solo dos novelas", 
            "Comenzó en 2020", 
            "Su primera entrega fue 'La vieja familia' en 2012", 
            "Se espera que termine en 2030"
        ],
        correctAnswer: 2,
        explanation: "La saga Los longevos debutó en 2012 con 'La vieja familia' y se espera que finalice en 2025."
    },
    {
        question: "¿Qué aspecto define la representación de Leonor de Aquitania en 'Aquitania'?",
        options: [
            "La muestra como una reina pasiva", 
            "La presenta como una figura completamente perfecta", 
            "La retrata como una mujer compleja, ambiciosa y rebelde", 
            "Ignora completamente su personalidad"
        ],
        correctAnswer: 2,
        explanation: "En la novela, Leonor es representada como una figura compleja, ambiciosa y rebelde que desafía las convenciones de su época."
    },
    {
        question: "¿Qué elemento añade profundidad dramática a la trama de 'Aquitania'?",
        options: [
            "Un romance convencional", 
            "Una relación prohibida con su tío Raimundo de Poitiers", 
            "Un matrimonio completamente feliz", 
            "Ningún elemento romántico"
        ],
        correctAnswer: 1,
        explanation: "La novela describe una relación prohibida entre Leonor y su tío Raimundo de Poitiers durante la Segunda Cruzada, que resulta en el nacimiento de una hija bastarda."
    },
    {
        question: "¿Cómo se relaciona la arqueóloga Alma con la trama histórica?",
        options: [
            "No tiene ninguna conexión", 
            "Es descendiente directa de Aelith", 
            "Trabaja en un museo medieval", 
            "Es hermana de Leonor"
        ],
        correctAnswer: 1,
        explanation: "Alma descubre su conexión con Aelith, la hija bastarda de Leonor, a través de flashbacks de su infancia en un orfanato francés."
    },
    {
        question: "¿Qué caracteriza la recepción crítica de 'Aquitania'?",
        options: [
            "Fue completamente unánime y positiva", 
            "Generó opiniones polarizadas con éxito comercial", 
            "Fue un fracaso crítico y comercial", 
            "No recibió ninguna atención mediática"
        ],
        correctAnswer: 1,
        explanation: "La novela generó opiniones críticas diversas, con fortalezas como su narrativa adictiva, pero también algunos cuestionamientos sobre licencias históricas."
    }
];

// Variables del juego
let currentQuestion = 0;
let score = 0;
let progressBarWidth = 0;

// Elementos del DOM
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const startButton = document.getElementById('start-button');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const nextButton = document.getElementById('next-button');
const progressBar = document.querySelector('.progress-bar');
const scoreText = document.getElementById('score-text');
const scoreCircle = document.getElementById('score-circle');
const scoreMessage = document.getElementById('score-message');
const restartButton = document.getElementById('restart-button');
const medalContainer = document.getElementById('medal-container');

// Event listeners
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', restartGame);

// Función para iniciar el juego
function startGame() {
    welcomeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    showQuestion(currentQuestion);
    updateProgressBar();
}

// Función para mostrar una pregunta
function showQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.textContent = option;
        button.dataset.index = i;
        button.addEventListener('click', checkAnswer);
        optionsContainer.appendChild(button);
    });
}

// Función para verificar la respuesta
function checkAnswer(e) {
    const selectedOption = parseInt(e.target.dataset.index);
    const currentQuestionData = questions[currentQuestion];
    const isCorrect = selectedOption === currentQuestionData.correctAnswer;
    
    // Desactivar todos los botones de opciones
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.disabled = true;
        if (parseInt(button.dataset.index) === currentQuestionData.correctAnswer) {
            button.classList.add('correct');
        } else if (parseInt(button.dataset.index) === selectedOption && !isCorrect) {
            button.classList.add('incorrect');
        }
    });
    
    // Mostrar feedback
    feedbackTitle.textContent = isCorrect ? '¡Correcto!' : '¡Incorrecto!';
    feedbackTitle.className = isCorrect ? 'correct' : 'incorrect';
    feedbackText.textContent = currentQuestionData.explanation;
    feedbackContainer.classList.remove('hidden');
    
    // Actualizar puntuación
    if (isCorrect) {
        score++;
    }
}

// Función para mostrar la siguiente pregunta
function showNextQuestion() {
    feedbackContainer.classList.add('hidden');
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
        updateProgressBar();
    } else {
        showResults();
    }
}

// Función para actualizar la barra de progreso
function updateProgressBar() {
    progressBarWidth = (currentQuestion / questions.length) * 100;
    progressBar.style.width = `${progressBarWidth}%`;
}

// Función para mostrar los resultados
function showResults() {
    gameScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    const percentage = Math.round((score / questions.length) * 100);
    scoreText.textContent = `${percentage}%`;
    
    // Animar el círculo de puntuación
    const circumference = 2 * Math.PI * 45; // 2πr donde r es el radio del círculo
    const offset = circumference - (percentage / 100) * circumference;
    scoreCircle.style.strokeDasharray = `${circumference - offset} ${offset}`;
    
    // Cambia el color del texto de la puntuación si es menor al 50%
    scoreText.style.fill = percentage < 50 ? '#DC143C' : '#2E8B57';
    
    // Mensaje personalizado según la puntuación
    if (percentage >= 90) {
        scoreMessage.textContent = "¡Impresionante! Has atendido a la presentación.";
        celebrateWin();
    } else if (percentage >= 70) {
        scoreMessage.textContent = "¡Muy bien! Has demostrado un buen conocimiento.";
    } else if (percentage >= 50) {
        scoreMessage.textContent = "¡Buen trabajo! Puedes seguir mejorando.";
    } else {
        scoreMessage.textContent = "Gracias por participar. ¡Sigue practicando!";
        scoreMessage.style.color = '#DC143C'; // Texto en rojo para puntuaciones bajas
    }
}

// Enhanced confetti function with more dynamic effects
function celebrateWin() {
    const colors = ['#8B4513', '#D2B48C', '#CD853F', '#2E8B57'];
    
    // Multiple confetti bursts
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 100 + i * 50,
                spread: 70 + i * 20,
                origin: { y: 0.6 },
                colors: colors,
                scalar: 1 + i * 0.2
            });
        }, i * 300);
    }
}

// Función para reiniciar el juego
function restartGame() {
    currentQuestion = 0;
    score = 0;
    progressBarWidth = 0;
    progressBar.style.width = '0%';
    
    resultsScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
}