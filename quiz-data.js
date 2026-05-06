// Dados do Quiz - 33 Perguntas com Profundidade Emocional
const quizData = [
    // SEÇÃO 1 — COMO SEU CORPO APRENDEU A SENTIR
    {
        id: 1,
        section: "Como Seu Corpo Aprendeu a Sentir",
        question: "Quando você imagina um momento de prazer que realmente te tocaria profundamente… o que mais mexe com você?",
        options: [
            { text: "Aquele silêncio carregado antes do toque… o olhar que diz tudo sem dizer nada", letter: "A" },
            { text: "Um ambiente onde você se sente completamente segura(o), acolhida(o), sem precisar se defender", letter: "B" },
            { text: "A intensidade do encontro… o contato direto, sem filtros, sem rodeios", letter: "C" },
            { text: "A provocação… o jogo… a sensação de estar vivendo algo fora do comum", letter: "D" },
            { text: "A liberdade de poder sentir sem regras, sem precisar se encaixar em nada", letter: "E" }
        ]
    },
    {
        id: 2,
        section: "Como Seu Corpo Aprendeu a Sentir",
        question: "Quando alguém começa a se aproximar de você com intenção, o que acontece dentro do seu corpo?",
        options: [
            { text: "Você já começa a sentir algo antes mesmo de ser tocada(o)", letter: "A" },
            { text: "Seu corpo observa primeiro… como se precisasse ter certeza de que está seguro", letter: "B" },
            { text: "Você responde rápido, sente o calor subir", letter: "C" },
            { text: "Sua mente entra no jogo, começa a imaginar possibilidades", letter: "D" },
            { text: "Depende… cada momento desperta algo diferente", letter: "E" }
        ]
    },
    {
        id: 3,
        section: "Como Seu Corpo Aprendeu a Sentir",
        question: "Existem momentos em que seu corpo simplesmente 'desliga'… Se você olhar com honestidade, como isso acontece?",
        options: [
            { text: "Parece que tudo está indo rápido demais… e você perde o controle da situação", letter: "A" },
            { text: "Você percebe que não está confortável o suficiente para se soltar", letter: "B" },
            { text: "Falta algo mais intenso, mais real… como se estivesse 'morno demais'", letter: "C" },
            { text: "Sua mente se desconecta… porque nada te surpreende", letter: "D" },
            { text: "Você sente que já viveu aquilo antes… e perde o interesse", letter: "E" }
        ]
    },
    {
        id: 4,
        section: "Como Seu Corpo Aprendeu a Sentir",
        question: "Quando você já esteve realmente conectada(o) com o prazer… o que tinha naquele momento?",
        options: [
            { text: "Uma construção lenta… quase hipnótica", letter: "A" },
            { text: "Um cuidado com cada detalhe… como se tudo estivesse te acolhendo", letter: "B" },
            { text: "Um desejo claro, direto, impossível de ignorar", letter: "C" },
            { text: "Uma energia diferente… provocante, fora do padrão", letter: "D" },
            { text: "Uma sensação de liberdade… sem expectativa", letter: "E" }
        ]
    },
    {
        id: 5,
        section: "Como Seu Corpo Aprendeu a Sentir",
        question: "Se você for sincera(o), qual dessas frases descreve melhor seu padrão?",
        options: [
            { text: "Eu sinto muito… mas às vezes não consigo ir até o final disso", letter: "A" },
            { text: "Eu preciso me sentir segura(o)… senão meu corpo não responde", letter: "B" },
            { text: "Eu sinto… mas às vezes parece superficial", letter: "C" },
            { text: "Eu preciso de algo a mais… o básico não me prende", letter: "D" },
            { text: "Eu sinto de várias formas… mas nada se aprofunda tanto", letter: "E" }
        ]
    },
    {
        id: 6,
        section: "Como Seu Corpo Aprendeu a Sentir",
        question: "Qual é a sua relação com o próprio corpo no dia a dia?",
        options: [
            { text: "Sinto uma presença constante… como se estivesse sempre conectada(o)", letter: "A" },
            { text: "Preciso de um espaço seguro para realmente habitar meu corpo", letter: "B" },
            { text: "Sinto meu corpo principalmente quando há intensidade", letter: "C" },
            { text: "Meu corpo é um espaço de exploração… sempre há algo novo", letter: "D" },
            { text: "Minha relação com o corpo varia bastante… depende do momento", letter: "E" }
        ]
    },
    {
        id: 7,
        section: "Como Seu Corpo Aprendeu a Sentir",
        question: "Quando você se toca… o que você sente?",
        options: [
            { text: "Uma conexão sutil… como se estivesse dialogando comigo mesma", letter: "A" },
            { text: "Preciso de um contexto seguro para isso… sozinha(o) fico tensa(o)", letter: "B" },
            { text: "Sinto desejo físico claro e direto", letter: "C" },
            { text: "Sinto curiosidade… vontade de explorar novas sensações", letter: "D" },
            { text: "Depende do dia… às vezes é relaxante, às vezes é exploratório", letter: "E" }
        ]
    },
    {
        id: 8,
        section: "Como Seu Corpo Aprendeu a Sentir",
        question: "Qual é a sua maior dificuldade quando você tenta se conectar com prazer?",
        options: [
            { text: "A mente fica acelerada… não consigo ficar presente", letter: "A" },
            { text: "O corpo fica tenso… como se não pudesse realmente relaxar", letter: "B" },
            { text: "Falta intensidade… sinto que não é o suficiente", letter: "C" },
            { text: "Sinto culpa ou julgamento sobre estar fazendo isso", letter: "D" },
            { text: "Fico entediada… como se faltasse algo para me prender", letter: "E" }
        ]
    },

    // SEÇÃO 2 — ONDE SEU CORPO APRENDEU A SE PROTEGER
    {
        id: 9,
        section: "Onde Seu Corpo Aprendeu a Se Proteger",
        question: "Quando você começou a ter contato com prazer ou Instintivaidade… qual foi a sensação predominante?",
        options: [
            { text: "Que precisava ter cuidado… como se houvesse algo perigoso ali", letter: "A" },
            { text: "Que não era totalmente seguro… havia algo de errado nisso", letter: "B" },
            { text: "Que era algo físico, mas pouco falado emocionalmente", letter: "C" },
            { text: "Que existia algo proibido… e isso era parte da atração", letter: "D" },
            { text: "Que não havia muita direção clara… era confuso", letter: "E" }
        ]
    },
    {
        id: 10,
        section: "Onde Seu Corpo Aprendeu a Se Proteger",
        question: "Quando você começa a sentir algo mais intenso no corpo… o que surge junto?",
        options: [
            { text: "Um leve medo de perder o controle… de não saber o que vai acontecer", letter: "A" },
            { text: "Uma tensão no corpo, como se ainda não pudesse relaxar", letter: "B" },
            { text: "Vontade de ir mais rápido, mais intenso… como se precisasse de mais", letter: "C" },
            { text: "Uma curiosidade misturada com alerta… é seguro?", letter: "D" },
            { text: "Uma tendência de mudar de estímulo… de não ficar em um só lugar", letter: "E" }
        ]
    },
    {
        id: 11,
        section: "Onde Seu Corpo Aprendeu a Se Proteger",
        question: "Se você observar com profundidade… qual é a sua maior dificuldade hoje?",
        options: [
            { text: "Se entregar completamente… deixar de controlar", letter: "A" },
            { text: "Relaxar de verdade… sair do estado de alerta", letter: "B" },
            { text: "Sustentar o prazer por mais tempo… manter a intensidade", letter: "C" },
            { text: "Se permitir sem julgamento… sem culpa", letter: "D" },
            { text: "Mergulhar em algo só… aprofundar em uma coisa", letter: "E" }
        ]
    },
    {
        id: 12,
        section: "Onde Seu Corpo Aprendeu a Se Proteger",
        question: "Existe algo que você evita sentir… mesmo sem perceber?",
        options: [
            { text: "A entrega total… a vulnerabilidade de estar completamente aberta", letter: "A" },
            { text: "A vulnerabilidade do corpo… estar exposta", letter: "B" },
            { text: "A lentidão… o ritmo que não é acelerado", letter: "C" },
            { text: "O silêncio interno… estar com você mesma sem distrações", letter: "D" },
            { text: "A profundidade contínua… ficar em um mesmo lugar", letter: "E" }
        ]
    },
    {
        id: 13,
        section: "Onde Seu Corpo Aprendeu a Se Proteger",
        question: "Como você se sente quando alguém quer se aproximar de você com intimidade?",
        options: [
            { text: "Sinto uma antecipação… mas também um pouco de ansiedade", letter: "A" },
            { text: "Preciso de tempo para me sentir segura(o)… não gosto de surpresas", letter: "B" },
            { text: "Sinto desejo físico, mas às vezes falta conexão emocional", letter: "C" },
            { text: "Sinto curiosidade… mas também uma certa resistência", letter: "D" },
            { text: "Depende… às vezes me abro, às vezes me fecho", letter: "E" }
        ]
    },
    {
        id: 14,
        section: "Onde Seu Corpo Aprendeu a Se Proteger",
        question: "Qual é a sua relação com a vulnerabilidade?",
        options: [
            { text: "Tenho medo de ser vulnerável… parece perigoso", letter: "A" },
            { text: "Preciso de muito tempo e segurança para ser vulnerável", letter: "B" },
            { text: "Sou vulnerável fisicamente, mas emocionalmente fico distante", letter: "C" },
            { text: "Tenho dificuldade em ser vulnerável… parece fraco", letter: "D" },
            { text: "Minha vulnerabilidade varia… às vezes consigo, às vezes não", letter: "E" }
        ]
    },
    {
        id: 15,
        section: "Onde Seu Corpo Aprendeu a Se Proteger",
        question: "Quando você está em um momento íntimo e algo não está certo… o que você faz?",
        options: [
            { text: "Fico tensa(o) e meu corpo desliga… fico observando de fora", letter: "A" },
            { text: "Meu corpo trava… fico rígida", letter: "B" },
            { text: "Continuo, mas sinto que falta algo… que não é o suficiente", letter: "C" },
            { text: "Fico julgando a situação… o que está acontecendo", letter: "D" },
            { text: "Mudo de estratégia… procuro algo diferente", letter: "E" }
        ]
    },

    // SEÇÃO 3 — O QUE VOCÊ DESEJA, MAS NÃO ACESSA
    {
        id: 16,
        section: "O Que Você Deseja, Mas Não Acessa",
        question: "Se não existisse medo, vergonha ou culpa… o que você mais gostaria de viver?",
        options: [
            { text: "Me entregar completamente sem pensar… sem controlar", letter: "A" },
            { text: "Relaxar profundamente sem travar… sem defesas", letter: "B" },
            { text: "Sentir algo muito mais intenso… muito mais real", letter: "C" },
            { text: "Explorar lados meus que nunca mostrei… ser mais Proibida", letter: "D" },
            { text: "Viver tudo isso com liberdade total… sem limites", letter: "E" }
        ]
    },
    {
        id: 17,
        section: "O Que Você Deseja, Mas Não Acessa",
        question: "O que você sente que está faltando hoje… mesmo que você não saiba explicar?",
        options: [
            { text: "Entrega… a capacidade de me deixar levar", letter: "A" },
            { text: "Relaxamento… profundo, real", letter: "B" },
            { text: "Profundidade… algo que realmente me toque", letter: "C" },
            { text: "Liberdade… de ser quem eu realmente sou", letter: "D" },
            { text: "Direção… saber para onde ir", letter: "E" }
        ]
    },
    {
        id: 18,
        section: "O Que Você Deseja, Mas Não Acessa",
        question: "Se você pudesse mudar uma coisa no seu corpo hoje… seria:",
        options: [
            { text: "Parar de segurar tanto… de controlar tudo", letter: "A" },
            { text: "Parar de travar… conseguir relaxar", letter: "B" },
            { text: "Sentir mais profundamente… mais intensamente", letter: "C" },
            { text: "Se permitir mais… sem culpa ou julgamento", letter: "D" },
            { text: "Conseguir se aprofundar… ficar em um lugar", letter: "E" }
        ]
    },
    {
        id: 19,
        section: "O Que Você Deseja, Mas Não Acessa",
        question: "Qual é o seu maior sonho quando se trata de prazer e Instintivaidade?",
        options: [
            { text: "Viver a antecipação… aquele estado de presença total", letter: "A" },
            { text: "Estar completamente segura(o) e acolhida(o)… sem defesas", letter: "B" },
            { text: "Sentir intensidade real… sem limites", letter: "C" },
            { text: "Ser completamente livre… explorar tudo que quero", letter: "D" },
            { text: "Viver tudo com autenticidade… sem máscaras", letter: "E" }
        ]
    },
    {
        id: 20,
        section: "O Que Você Deseja, Mas Não Acessa",
        question: "O que você imagina que poderia mudar se você tivesse acesso total ao seu prazer?",
        options: [
            { text: "Eu seria mais presente… mais conectada(o) comigo mesma", letter: "A" },
            { text: "Eu seria mais relaxada… menos tensa(o) no dia a dia", letter: "B" },
            { text: "Eu sentiria mais viva… mais real", letter: "C" },
            { text: "Eu seria mais autêntica… mais eu mesma", letter: "D" },
            { text: "Eu teria mais liberdade… menos limitações", letter: "E" }
        ]
    },
    {
        id: 21,
        section: "O Que Você Deseja, Mas Não Acessa",
        question: "Quando você pensa em sua Instintivaidade… qual é a primeira emoção que surge?",
        options: [
            { text: "Ansiedade… medo de não conseguir", letter: "A" },
            { text: "Insegurança… medo de não ser o suficiente", letter: "B" },
            { text: "Frustração… sinto que falta algo", letter: "C" },
            { text: "Culpa… como se não devesse querer tanto", letter: "D" },
            { text: "Confusão… não sei bem o que quero", letter: "E" }
        ]
    },
    {
        id: 22,
        section: "O Que Você Deseja, Mas Não Acessa",
        question: "Se você pudesse conversar com seu corpo… o que ele te diria?",
        options: [
            { text: "'Eu quero ser sentida… não controlada(o)'", letter: "A" },
            { text: "'Eu preciso de segurança… para realmente me abrir'", letter: "B" },
            { text: "'Eu quero mais… quero ser desejada'", letter: "C" },
            { text: "'Eu quero explorar… sem julgamento'", letter: "D" },
            { text: "'Eu quero liberdade… para ser eu mesma(o)'", letter: "E" }
        ]
    },

    // SEÇÃO 4 — INTEGRAÇÃO E TRANSFORMAÇÃO
    {
        id: 23,
        section: "Integração e Transformação",
        question: "Qual é o seu maior bloqueio emocional quando se trata de prazer?",
        options: [
            { text: "Medo de perder o controle… de não saber o que vai acontecer", letter: "A" },
            { text: "Medo de não ser seguro… de ser machucada", letter: "B" },
            { text: "Medo de não ser o suficiente… de decepcionar", letter: "C" },
            { text: "Medo de ser julgada(o)… de ser vista(o) como errada", letter: "D" },
            { text: "Medo de ficar presa(o)… de perder liberdade", letter: "E" }
        ]
    },
    {
        id: 24,
        section: "Integração e Transformação",
        question: "Como você gostaria de se sentir em relação ao seu corpo?",
        options: [
            { text: "Conectada… presente… viva", letter: "A" },
            { text: "Segura… protegida… confortável", letter: "B" },
            { text: "Desejada… intensa… poderosa", letter: "C" },
            { text: "Livre… autêntica… sem limites", letter: "D" },
            { text: "Exploratória… curiosa(o)… aventureira", letter: "E" }
        ]
    },
    {
        id: 25,
        section: "Integração e Transformação",
        question: "O que você acredita que poderia desbloquear seu prazer?",
        options: [
            { text: "Aprender a confiar… a me deixar levar", letter: "A" },
            { text: "Criar segurança… um espaço onde eu possa relaxar", letter: "B" },
            { text: "Intensidade… alguém que realmente me deseje", letter: "C" },
            { text: "Liberdade… permissão para ser quem eu sou", letter: "D" },
            { text: "Exploração… descobrir novos caminhos", letter: "E" }
        ]
    },
    {
        id: 26,
        section: "Integração e Transformação",
        question: "Qual é a sua relação com a entrega?",
        options: [
            { text: "Tenho medo… sinto que vou perder o controle", letter: "A" },
            { text: "Preciso de muito tempo para me sentir segura(o) o suficiente", letter: "B" },
            { text: "Sinto que não consigo me entregar completamente", letter: "C" },
            { text: "Tenho dificuldade em me entregar sem julgamento", letter: "D" },
            { text: "Minha entrega varia… depende da situação", letter: "E" }
        ]
    },
    {
        id: 27,
        section: "Integração e Transformação",
        question: "Quando você imagina uma transformação real em sua Instintivaidade… como seria?",
        options: [
            { text: "Eu seria mais presente… mais conectada(o)", letter: "A" },
            { text: "Eu seria mais relaxada… menos defensiva", letter: "B" },
            { text: "Eu sentiria mais profundamente… mais intensamente", letter: "C" },
            { text: "Eu seria mais livre… mais autêntica", letter: "D" },
            { text: "Eu exploraria mais… sem limites", letter: "E" }
        ]
    },
    {
        id: 28,
        section: "Integração e Transformação",
        question: "O que você está disposta a fazer para acessar seu verdadeiro prazer?",
        options: [
            { text: "Aprender a confiar… a me vulnerabilizar", letter: "A" },
            { text: "Criar um espaço seguro… para realmente relaxar", letter: "B" },
            { text: "Buscar intensidade… me permitir sentir mais", letter: "C" },
            { text: "Me libertar de culpas… de julgamentos", letter: "D" },
            { text: "Explorar… descobrir… experimentar", letter: "E" }
        ]
    },
    {
        id: 29,
        section: "Integração e Transformação",
        question: "Qual é a sua verdadeira necessidade emocional quando se trata de prazer?",
        options: [
            { text: "Ser vista… ser reconhecida", letter: "A" },
            { text: "Ser acolhida(o)… ser protegida", letter: "B" },
            { text: "Ser desejada… ser intensamente sentida", letter: "C" },
            { text: "Ser aceita… ser amada como sou", letter: "D" },
            { text: "Ser livre… ser autêntica(o)", letter: "E" }
        ]
    },
    {
        id: 30,
        section: "Integração e Transformação",
        question: "Se você pudesse receber ajuda profissional… qual seria sua maior esperança?",
        options: [
            { text: "Aprender a estar presente… a confiar", letter: "A" },
            { text: "Desbloquear meu corpo… conseguir relaxar", letter: "B" },
            { text: "Sentir prazer de verdade… profundamente", letter: "C" },
            { text: "Me libertar de culpas… de vergonha", letter: "D" },
            { text: "Explorar minha Instintivaidade… com segurança", letter: "E" }
        ]
    },
    {
        id: 31,
        section: "Integração e Transformação",
        question: "Qual é o seu maior desejo quando se trata de sua jornada Instintiva?",
        options: [
            { text: "Viver a presença… a conexão real", letter: "A" },
            { text: "Viver o relaxamento… a paz no corpo", letter: "B" },
            { text: "Viver a intensidade… o prazer profundo", letter: "C" },
            { text: "Viver a liberdade… a autenticidade", letter: "D" },
            { text: "Viver a exploração… a descoberta", letter: "E" }
        ]
    },
    {
        id: 32,
        section: "Integração e Transformação",
        question: "O que você acredita que merece quando se trata de prazer e Instintivaidade?",
        options: [
            { text: "Mereco ser sentida… ser vista(o)", letter: "A" },
            { text: "Mereco estar segura(o)… ser acolhida(o)", letter: "B" },
            { text: "Mereco sentir intensidade… ser desejada", letter: "C" },
            { text: "Mereco ser livre… ser autêntica(o)", letter: "D" },
            { text: "Mereco explorar… descobrir… experimentar", letter: "E" }
        ]
    },
    {
        id: 33,
        section: "Integração e Transformação",
        question: "Qual é o seu próximo passo nesta jornada de autoconhecimento?",
        options: [
            { text: "Aprender a confiar… a me deixar levar", letter: "A" },
            { text: "Criar segurança… para realmente relaxar", letter: "B" },
            { text: "Buscar profundidade… intensidade real", letter: "C" },
            { text: "Me libertar… viver sem culpa", letter: "D" },
            { text: "Explorar… descobrir quem eu realmente sou", letter: "E" }
        ]
    }
];

// Resultados personalizados para cada linguagem erótica
const results = {
    A: {
        name: "Presença",
        emoji: "⚡",
        color: "#5b9bd5",
        description: `
            <div class="result-header">
                <div class="result-emoji">⚡</div>
                <h2 class="result-title">Seu Resultado: Perfil Presença</h2>
                <p class="result-subtitle">Você sente prazer de forma sutil… antes mesmo do toque.</p>
            </div>
            <div class="result-content">
                <p>Você sente no olhar. Na tensão. Na presença.</p>
                
                <p>Mas existe algo importante que você talvez nunca tenha percebido:</p>
                
                <p><strong>Muitas pessoas com esse perfil não estão totalmente livres… elas estão evitando o contato profundo sem saber.</strong></p>
                
                <p>Você sente tudo… mas, ao mesmo tempo, pode se retrair quando a experiência começa a ficar real demais.</p>
                
                <p>Como se o corpo dissesse: <em>"até aqui está seguro… mais que isso, eu não sei."</em></p>
                
                <p>E isso cria um padrão silencioso:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>Você se conecta… mas não se entrega completamente</li>
                    <li>Sente… mas não se abandona</li>
                    <li>Vive o "quase"… mas não o auge</li>
                </ul>
                
                <p><strong>E com o tempo, isso vira frustração.</strong></p>
                
                <div class="truth-section">
                    <strong>🔥 A VERDADE</strong>
                    <p>Seu corpo não está errado. Ele só aprendeu a se proteger através da sensibilidade.</p>
                </div>
                
                <div class="solution-section">
                    <strong>💠 A SOLUÇÃO</strong>
                    <p>Na sessão terapêutica, o trabalho não é forçar nada. É conduzir seu corpo com segurança para:</p>
                    <ul style="margin: 1rem 0; padding-left: 2rem;">
                        <li>Sair da antecipação</li>
                        <li>Entrar no sentir real</li>
                        <li>Confiar novamente na entrega</li>
                    </ul>
                </div>
            </div>
        `
    },
    B: {
        name: "Sensorial",
        emoji: "🌸",
        color: "#e8b4d4",
        description: `
            <div class="result-header">
                <div class="result-emoji">🌸</div>
                <h2 class="result-title">Seu Resultado: Perfil Sensorial</h2>
                <p class="result-subtitle">Você precisa de segurança, conforto e presença para sentir prazer.</p>
            </div>
            <div class="result-content">
                <p>Mas aqui está o ponto que quase ninguém te explica:</p>
                
                <p><strong>O seu padrão não é só preferência… pode ser um sinal de que seu corpo está em estado de tensão constante.</strong></p>
                
                <p>Você precisa de tudo certo para relaxar. Ambiente. Clima. Tempo.</p>
                
                <p>E mesmo assim… muitas vezes:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>Demora para sentir algo</li>
                    <li>Se desconecta com facilidade</li>
                    <li>Ou simplesmente não consegue ir mais fundo</li>
                </ul>
                
                <p><strong>E isso cansa.</strong></p>
                
                <div class="truth-section">
                    <strong>🔥 A VERDADE</strong>
                    <p>Não é falta de desejo. É um corpo que aprendeu a ficar em alerta ao invés de relaxar.</p>
                </div>
                
                <div class="solution-section">
                    <strong>💠 A SOLUÇÃO</strong>
                    <p>Na sessão, o foco é regulação do seu sistema nervoso. Seu corpo aprende a desacelerar, confiar e sair do controle.</p>
                </div>
            </div>
        `
    },
    C: {
        name: "Instintiva",
        emoji: "🔴",
        color: "#d94a38",
        description: `
            <div class="result-header">
                <div class="result-emoji">🔴</div>
                <h2 class="result-title">Seu Resultado: Perfil Instintiva</h2>
                <p class="result-subtitle">Seu corpo responde ao estímulo direto. Você tem facilidade de sentir… quando existe intensidade.</p>
            </div>
            <div class="result-content">
                <p>Mas aqui está o ponto que pode estar te limitando:</p>
                
                <p><strong>Você pode estar vivendo um prazer físico… mas desconectado do emocional profundo.</strong></p>
                
                <p>Você sente. Mas talvez:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>Não sustente por muito tempo</li>
                    <li>Precisa sempre de mais intensidade</li>
                    <li>Ou sente que falta algo… mesmo quando funciona</li>
                </ul>
                
                <div class="truth-section">
                    <strong>🔥 A VERDADE</strong>
                    <p>Seu corpo aprendeu a acessar o prazer… mas não necessariamente a se entregar a ele por completo.</p>
                </div>
                
                <div class="solution-section">
                    <strong>💠 A SOLUÇÃO</strong>
                    <p>Na sessão, você aprende a desacelerar sem perder intensidade, aprofundar a sensação e integrar corpo e emoção.</p>
                </div>
            </div>
        `
    },
    D: {
        name: "Proibido",
        emoji: "🟣",
        color: "#9b59b6",
        description: `
            <div class="result-header">
                <div class="result-emoji">🟣</div>
                <h2 class="result-title">Seu Resultado: Perfil Proibido</h2>
                <p class="result-subtitle">Você se ativa pelo diferente. Pelo proibido. Pelo que foge do padrão.</p>
            </div>
            <div class="result-content">
                <p>Mas aqui está o ponto que poucos têm coragem de dizer:</p>
                
                <p><strong>Muitas vezes, essa busca pelo novo é uma forma de manter o controle.</strong></p>
                
                <p>Você precisa de estímulo mental. De variação. De intensidade psicológica.</p>
                
                <p>Mas no fundo…</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>O simples não sustenta</li>
                    <li>O básico não satisfaz</li>
                    <li>E o silêncio do corpo pode incomodar</li>
                </ul>
                
                <div class="truth-section">
                    <strong>🔥 A VERDADE</strong>
                    <p>Não é sobre ousadia. Pode ser sobre dificuldade de permanecer no sentir puro.</p>
                </div>
                
                <div class="solution-section">
                    <strong>💠 A SOLUÇÃO</strong>
                    <p>Na sessão, você não perde intensidade. Você aprende a sentir sem precisar fugir, sustentar a experiência e acessar prazer sem depender de estímulos externos.</p>
                </div>
            </div>
        `
    },
    E: {
        name: "Êxtase",
        emoji: "🌈",
        color: "#2ecc71",
        description: `
            <div class="result-header">
                <div class="result-emoji">🌈</div>
                <h2 class="result-title">Seu Resultado: Perfil Êxtase</h2>
                <p class="result-subtitle">Você é aberto, curioso, adaptável. Gosta de variar. Experimentar. Descobrir.</p>
            </div>
            <div class="result-content">
                <p>Mas aqui está o ponto invisível:</p>
                
                <p><strong>Quando tudo funciona… nada se aprofunda.</strong></p>
                
                <p>Você sente de várias formas… Mas talvez:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>Não sustente intensidade</li>
                    <li>Não mergulhe totalmente</li>
                    <li>Ou nunca tenha ido até o limite real do seu corpo</li>
                </ul>
                
                <p>Fica sempre na superfície da experiência.</p>
                
                <div class="truth-section">
                    <strong>🔥 A VERDADE</strong>
                    <p>Você tem acesso a tudo… mas ainda não acessou o profundo.</p>
                </div>
                
                <div class="solution-section">
                    <strong>💠 A SOLUÇÃO</strong>
                    <p>Na sessão, o foco é sair da dispersão, entrar na profundidade e sustentar o sentir. É onde a verdadeira transformação acontece.</p>
                </div>
            </div>
        `
    }
};
