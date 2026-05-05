// Script principal para o quiz das 5 Linguagens Eróticas
let currentQuestionIndex = 0;
let answers = {};
let userData = {};

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando...');
    initCaptureForm();
    
    // Adicionar Google Analytics
    addGoogleAnalytics();
});

// Adicionar Google Analytics
function addGoogleAnalytics() {
    // Será preenchido com o ID do Google Analytics
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(gaScript);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
}

// Inicializar formulário de captura
function initCaptureForm() {
    const captureForm = document.getElementById('capture-form-element');
    if (captureForm) {
        captureForm.addEventListener('submit', handleCaptureSubmit);
        console.log('Formulário de captura inicializado');
    }
}

// Lidar com envio do formulário de captura
function handleCaptureSubmit(e) {
    e.preventDefault();
    console.log('Formulário de captura enviado');

    // Coletar dados
    userData = {
        fullName: document.getElementById('full-name').value,
        whatsapp: document.getElementById('whatsapp').value,
        email: document.getElementById('email').value
    };

    console.log('Dados capturados:', userData);
    
    // Enviar dados para Zapier (será configurado)
    sendToZapier(userData);

    // Esconder seção de captura
    const captureSection = document.querySelector('.capture-section');
    if (captureSection) {
        captureSection.style.display = 'none';
    }

    // Mostrar quiz
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
        quizSection.style.display = 'block';
    }
    
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        quizContainer.style.display = 'block';
    }

    // Inicializar quiz
    initQuiz();

    // Scroll para quiz
    setTimeout(() => {
        quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Enviar dados para Zapier
function sendToZapier(data) {
    // Será preenchido com o webhook do Zapier
    const zapierWebhook = 'https://hooks.zapier.com/hooks/catch/XXXXXXXXX/XXXXXXXXX';
    
    fetch(zapierWebhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => console.log('Dados enviados para Zapier:', response))
    .catch(error => console.error('Erro ao enviar para Zapier:', error));
}

// Inicializar o quiz
function initQuiz() {
    console.log('Inicializando quiz...');
    renderQuestions();
    const form = document.getElementById('quiz-form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
        console.log('Event listener adicionado ao formulário');
    } else {
        console.error('Formulário não encontrado!');
    }
}

// Renderizar perguntas
function renderQuestions() {
    console.log('Renderizando perguntas...');
    const container = document.getElementById('questions-container');
    
    if (!container) {
        console.error('Container de perguntas não encontrado!');
        return;
    }
    
    container.innerHTML = '';

    if (!quizData || quizData.length === 0) {
        console.error('quizData não está definido ou está vazio!');
        return;
    }

    quizData.forEach((q, index) => {
        const questionGroup = document.createElement('div');
        questionGroup.className = 'question-group';

        let optionsHTML = '<div class="options">';
        q.options.forEach(option => {
            optionsHTML += `
                <div class="option">
                    <input 
                        type="radio" 
                        id="q${index}_${option.value}" 
                        name="q${index}" 
                        value="${option.value}" 
                        required
                    >
                    <label for="q${index}_${option.value}">${option.text}</label>
                </div>
            `;
        });
        optionsHTML += '</div>';

        questionGroup.innerHTML = `
            <div class="question">
                <h3>${index + 1}. ${q.question}</h3>
                ${optionsHTML}
            </div>
        `;

        container.appendChild(questionGroup);
    });
}

// Lidar com envio do formulário
function handleSubmit(e) {
    console.log('Formulário enviado');
    e.preventDefault();

    // Coletar respostas
    const formData = new FormData(document.getElementById('quiz-form'));
    const answers = {};
    
    formData.forEach((value, key) => {
        answers[key] = value;
    });

    console.log('Respostas coletadas:', answers);

    // Calcular resultado
    const result = calculateResult(answers);
    console.log('Resultado calculado:', result);
    
    // Mostrar resultado
    showResult(result, answers);
}

// Calcular resultado com percentuais
function calculateResult(answers) {
    const letterCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    const totalQuestions = Object.keys(answers).length;

    Object.values(answers).forEach(letter => {
        if (letterCounts.hasOwnProperty(letter)) {
            letterCounts[letter]++;
        }
    });

    console.log('Contagem de letras:', letterCounts);

    // Calcular percentuais
    const percentages = {};
    for (const letter in letterCounts) {
        percentages[letter] = Math.round((letterCounts[letter] / totalQuestions) * 100);
    }

    // Encontrar a letra com mais votos
    let maxCount = 0;
    let resultLetter = 'A';

    for (const [letter, count] of Object.entries(letterCounts)) {
        if (count > maxCount) {
            maxCount = count;
            resultLetter = letter;
        }
    }

    return { letter: resultLetter, percentages: percentages, counts: letterCounts };
}

// Mostrar resultado com gráfico
function showResult(result, answers) {
    console.log('Mostrando resultado para:', result.letter);
    
    // Esconder quiz
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
        quizSection.style.display = 'none';
    }

    // Mostrar resultado
    const resultSection = document.getElementById('result-section');
    if (!resultSection) {
        console.error('Seção de resultado não encontrada!');
        return;
    }

    if (!results || !results[result.letter]) {
        console.error('Resultado não encontrado para:', result.letter);
        return;
    }

    const resultData = results[result.letter];

    const resultHeader = document.getElementById('result-header');
    if (resultHeader) {
        resultHeader.innerHTML = resultData.description;
    }
    
    // Criar gráfico de pizza
    createPieChart(result.percentages);
    
    resultSection.style.display = 'block';
    
    // Mostrar testimonials
    const testimonialsSection = document.getElementById('testimonials-section');
    if (testimonialsSection) {
        testimonialsSection.style.display = 'block';
    }
    
    // Scroll para resultado
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    
    // Salvar resultado
    saveResultData(result, answers);
}

// Criar gráfico de pizza
function createPieChart(percentages) {
    const canvas = document.getElementById('result-pie-chart');
    if (!canvas) {
        console.error('Canvas para gráfico não encontrado!');
        return;
    }

    const ctx = canvas.getContext('2d');
    const languages = ['Presença', 'Sensorial', 'Instintiva', 'Proibida', 'Êxtase'];
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    const values = [percentages.A, percentages.B, percentages.C, percentages.D, percentages.E];

    // Limpar canvas
    canvas.width = 400;
    canvas.height = 400;

    // Desenhar gráfico de pizza
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;

    let currentAngle = 0;

    values.forEach((value, index) => {
        const sliceAngle = (value / 100) * 2 * Math.PI;

        // Desenhar slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[index];
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Desenhar label
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
        const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${value}%`, labelX, labelY);

        currentAngle += sliceAngle;
    });

    // Desenhar legenda
    const legendY = canvas.height + 20;
    languages.forEach((lang, index) => {
        ctx.fillStyle = colors[index];
        ctx.fillRect(10, legendY + (index * 25), 15, 15);
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${lang}: ${values[index]}%`, 30, legendY + (index * 25) + 12);
    });
}

// Salvar dados do resultado
function saveResultData(result, answers) {
    const resultData = {
        name: userData.fullName,
        whatsapp: userData.whatsapp,
        email: userData.email,
        primaryLanguage: result.letter,
        percentages: result.percentages,
        timestamp: new Date().toISOString()
    };

    console.log('Dados do resultado:', resultData);
    
    // Salvar no localStorage
    localStorage.setItem('quizResult', JSON.stringify(resultData));
    
    // Enviar para Zapier
    sendResultToZapier(resultData);
}

// Enviar resultado para Zapier
function sendResultToZapier(resultData) {
    const zapierWebhook = 'https://hooks.zapier.com/hooks/catch/XXXXXXXXX/XXXXXXXXX';
    
    fetch(zapierWebhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(resultData)
    })
    .then(response => console.log('Resultado enviado para Zapier:', response))
    .catch(error => console.error('Erro ao enviar resultado para Zapier:', error));
}

// Resetar quiz
function resetQuiz() {
    console.log('Resetando quiz');
    const quizSection = document.getElementById('quiz-section');
    const resultSection = document.getElementById('result-section');
    const form = document.getElementById('quiz-form');
    const captureSection = document.querySelector('.capture-section');
    
    if (quizSection) quizSection.style.display = 'block';
    if (resultSection) resultSection.style.display = 'none';
    if (form) form.reset();
    if (captureSection) captureSection.style.display = 'block';
    
    // Reset progress
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = '0%';
    }
    
    // Scroll para topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
