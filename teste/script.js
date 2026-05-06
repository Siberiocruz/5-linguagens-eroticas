// ============================================
// CONFIGURAÇÃO DO SUPABASE
// ============================================
const SUPABASE_URL = 'https://fpfyhykxsrlhpvutytcf.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_RdOfCy-olXjgErba0Iqheg_bInPWzfH';

// Lógica do Quiz
let currentQuestionIndex = 0;
let answers = {};
let userData = {};

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando...');
    initCaptureForm();
});

// Inicializar formulário de captura
function initCaptureForm() {
    const captureForm = document.getElementById('capture-form-element');
    if (captureForm) {
        captureForm.addEventListener('submit', handleCaptureSubmit);
        console.log('Formulário de captura inicializado');
    }
}

// ============================================
// FUNÇÃO PARA ENVIAR DADOS PARA SUPABASE
// ============================================
async function enviarParaSupabase(nome, whatsapp, email, resultado = '') {
    try {
        console.log('📤 Enviando dados para Supabase...');
        
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/formularios`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({
                    nome: nome,
                    whatsapp: whatsapp,
                    email: email,
                    resultado: resultado
                })
            }
        );

        if (response.ok) {
            console.log('✅ Dados salvos com sucesso no Supabase!');
            return { sucesso: true, mensagem: 'Dados salvos com sucesso!' };
        } else {
            const erro = await response.text();
            console.error('❌ Erro ao salvar:', erro);
            return { sucesso: false, mensagem: 'Erro ao salvar dados' };
        }
    } catch (error) {
        console.error('❌ Erro de conexão:', error);
        return { sucesso: false, mensagem: 'Erro de conexão com servidor' };
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
        email: document.getElementById('email').value,
        resultado: document.getElementById('result-field').value || ''
    };

    console.log('Dados capturados:', userData);
    
    // Enviar para Supabase
    enviarParaSupabase(userData.fullName, userData.whatsapp, userData.email, userData.resultado)
        .then(resultado => {
            if (resultado.sucesso) {
                console.log('✅ Dados salvos no Supabase!');
            } else {
                console.warn('⚠️ Dados não foram salvos no Supabase, mas continuando...');
            }
        });

    // Métodos de backup (opcional)
    // Enviar para backend local que salva na planilha
    const backendData = {
        full_name: userData.fullName,
        whatsapp: userData.whatsapp,
        email: userData.email
    };

    fetch('http://localhost:5000/api/capture', {
        method: 'POST',
        body: JSON.stringify(backendData),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }).then(response => {
        console.log('Dados enviados para backend:', response.status);
    }).catch(error => {
        console.error('Erro ao enviar para backend:', error);
    });

    // Enviar para Formspree (email) - opcional
    const formData = new FormData();
    formData.append('full_name', userData.fullName);
    formData.append('whatsapp', userData.whatsapp);
    formData.append('email', userData.email);

    fetch('https://formspree.io/f/xyzgwpwk', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        console.log('Dados enviados para Formspree:', response.status);
    }).catch(error => {
        console.error('Erro ao enviar para Formspree:', error);
    });

    // Abrir quiz imediatamente
    showQuiz();
}

function showQuiz() {
    // Esconder seção de captura
    const captureSection = document.querySelector('.capture-section');
    if (captureSection) {
        captureSection.style.display = 'none';
    }

    // Mostrar main
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.display = 'block';
    }

    // Mostrar quiz
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        quizContainer.style.display = 'block';
    }

    // Inicializar quiz
    initQuiz();

    // Scroll para quiz
    setTimeout(() => {
        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
            quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
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
                        id="q${q.id}_${option.letter}" 
                        name="question_${q.id}" 
                        value="${option.letter}"
                        required
                    >
                    <label for="q${q.id}_${option.letter}">${option.text}</label>
                </div>
            `;
        });
        optionsHTML += '</div>';

        questionGroup.innerHTML = `
            <div>
                <span class="question-number">${index + 1}</span>
                <p class="question-text">${q.question}</p>
            </div>
            ${optionsHTML}
        `;

        container.appendChild(questionGroup);

        // Adicionar event listener para atualizar progresso
        const radios = questionGroup.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', () => updateProgress());
        });
    });
    
    console.log('Perguntas renderizadas com sucesso!');
}

// Atualizar barra de progresso
function updateProgress() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const answeredCount = formData.getAll('question_1').length > 0 ? Array.from(formData.keys()).length : 0;
    const totalQuestions = quizData.length;
    const percentage = (answeredCount / totalQuestions) * 100;
    
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
    
    if (progressText) {
        progressText.textContent = `Pergunta ${answeredCount} de ${totalQuestions}`;
    }
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
    showResult(result);
}

// Calcular resultado
function calculateResult(answers) {
    const letterCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };

    Object.values(answers).forEach(letter => {
        if (letterCounts.hasOwnProperty(letter)) {
            letterCounts[letter]++;
        }
    });

    console.log('Contagem de letras:', letterCounts);

    // Calcular total de respostas
    const total = Object.values(letterCounts).reduce((a, b) => a + b, 0);
    
    // Calcular percentuais
    const percentages = {};
    for (const letter in letterCounts) {
        percentages[letter] = Math.round((letterCounts[letter] / total) * 100);
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

    // Retornar objeto com resultado e percentuais
    return {
        letter: resultLetter,
        percentages: percentages,
        counts: letterCounts
    };
}

// Mostrar resultado
function showResult(resultData) {
    const resultLetter = resultData.letter;
    const percentages = resultData.percentages;
    console.log('Mostrando resultado para:', resultLetter);
    console.log('Percentuais:', percentages);
    
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

    if (!results || !results[resultLetter]) {
        console.error('Resultado não encontrado para:', resultLetter);
        return;
    }

    const resultInfo = results[resultLetter];
    
    // Preencher o campo hidden com o resultado
    const resultField = document.getElementById('result-field');
    if (resultField) {
        resultField.value = resultInfo.name || resultLetter;
        console.log('Resultado preenchido:', resultField.value);
    }

    const resultHeader = document.getElementById('result-header');
    if (resultHeader) {
        resultHeader.innerHTML = resultInfo.description;
    }
    
    // Renderizar lista de percentuais PRIMEIRO
    const percentagesContainer = document.getElementById('result-percentages');
    if (percentagesContainer && percentages) {
        const profileNames = {
            'A': '⚡ Presença',
            'B': '🌸 Sensorial',
            'C': '🔴 Instintiva',
            'D': '🟣 Proibida',
            'E': '🌈 Êxtase'
        };
        
        // Ordenar percentuais em ordem decrescente
        const sortedPercentages = Object.entries(percentages)
            .sort((a, b) => b[1] - a[1])
            .map(([letter, percent]) => ({
                letter,
                percent,
                name: profileNames[letter]
            }));
        
        let html = '<h3>Sua Distribuição de Linguagens Eróticas</h3>';
        html += '<ul class="percentage-list">';
        
        for (const profile of sortedPercentages) {
            html += `
                <li class="percentage-item">
                    <span class="percentage-name">${profile.name}</span>
                    <div class="percentage-bar">
                        <div class="percentage-fill" style="width: ${profile.percent}%"></div>
                    </div>
                    <span class="percentage-value">${profile.percent}%</span>
                </li>
            `;
        }
        
         html += '</ul>';
        html += '<p style="margin-top: 20px; text-align: center; font-size: 14px; color: #666;">Quer entender melhor cada linguagem e como integrar todas elas? <strong>Confira o e-book completo</strong> com exercícios práticos e transformações reais.</p>';
        percentagesContainer.innerHTML = html;
    }
    
    // Preencher conteúdo do resultado DEPOIS
    const resultContent = document.getElementById('result-content');
    if (resultContent && resultInfo.explanation) {
        resultContent.innerHTML = resultInfo.explanation;
    }
    
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

// ============================================
// FUNÇÃO PARA CRIAR GRÁFICO SVG SIMPLES
// ============================================
