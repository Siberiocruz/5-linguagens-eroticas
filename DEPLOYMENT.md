# 🚀 Guia de Deployment - 5 Linguagens Eróticas

## 📋 Índice
1. [Configuração Google Sheets](#configuração-google-sheets)
2. [Deploy no Netlify](#deploy-no-netlify)
3. [Apontar Domínio](#apontar-domínio)
4. [Testes](#testes)

---

## 🔧 Configuração Google Sheets

### Passo 1: Criar Planilha Google
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha chamada **"5 Linguagens Eróticas - Leads"**
3. Renomeie a primeira aba para **"Leads"**
4. Na primeira linha, adicione os cabeçalhos:
   - A1: `Data/Hora`
   - B1: `Nome Completo`
   - C1: `WhatsApp`
   - D1: `Email`
   - E1: `Perfil`

### Passo 2: Gerar Credenciais Google
1. Acesse [Google Cloud Console](https://console.cloud.google.com)
2. Crie um novo projeto chamado **"5 Linguagens Eróticas"**
3. Ative a **Google Sheets API**:
   - Vá para "APIs e Serviços"
   - Clique em "Ativar APIs e Serviços"
   - Procure por "Google Sheets API"
   - Clique em "Ativar"

4. Crie uma chave de API:
   - Vá para "Credenciais"
   - Clique em "Criar Credenciais"
   - Selecione "Chave de API"
   - Copie a chave

5. Compartilhe a planilha com a conta de serviço:
   - Copie o ID da planilha da URL
   - Compartilhe a planilha com o email da conta de serviço

### Passo 3: Variáveis de Ambiente
1. Copie o arquivo `.env.example` para `.env`
2. Preencha com suas credenciais:
   ```
   GOOGLE_SHEET_ID=seu_id_da_planilha
   GOOGLE_API_KEY=sua_chave_de_api
   DOMAIN=tantraemcasa.com.br
   ```

---

## 🚀 Deploy no Netlify

### Passo 1: Preparar Repositório Git
```bash
cd /home/ubuntu/as-5-linguagens-eroticas

# Inicializar Git
git init
git add .
git commit -m "Initial commit: 5 Linguagens Eróticas"

# Criar repositório no GitHub
# 1. Acesse github.com
# 2. Crie um novo repositório
# 3. Siga as instruções para fazer push
```

### Passo 2: Deploy no Netlify
1. Acesse [Netlify](https://netlify.com)
2. Faça login com sua conta Google
3. Clique em "New site from Git"
4. Selecione seu repositório GitHub
5. Configure:
   - **Build command**: `npm install`
   - **Publish directory**: `.`
6. Clique em "Deploy site"

### Passo 3: Adicionar Variáveis de Ambiente no Netlify
1. Vá para "Site settings"
2. Clique em "Build & deploy"
3. Clique em "Environment"
4. Adicione as variáveis:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_API_KEY`

---

## 🌐 Apontar Domínio

### Opção 1: Se o Domínio Está em Outro Registrador

1. **No Netlify:**
   - Vá para "Site settings"
   - Clique em "Domain management"
   - Clique em "Add custom domain"
   - Digite: `tantraemcasa.com.br`

2. **No Seu Registrador (ex: Registro.br):**
   - Acesse o painel de controle
   - Vá para "DNS"
   - Adicione os registros DNS do Netlify:
     ```
     CNAME: www.tantraemcasa.com.br → seu-site.netlify.app
     A: tantraemcasa.com.br → IP do Netlify
     ```

### Opção 2: Se Usar Netlify DNS
1. No Netlify, clique em "Change nameservers"
2. Copie os nameservers do Netlify
3. No seu registrador, atualize os nameservers para os do Netlify

---

## 📁 Estrutura de URLs

Após o deployment, você terá:

```
https://tantraemcasa.com.br/
├── / (página principal do quiz)
├── /dashboard (dashboard de leads)
├── /api/save-lead (endpoint para salvar leads)
└── /api/leads (endpoint para obter leads)

Ou com subdiretório:
https://tantraemcasa.com.br/5linguagenseroticas/
├── / (página principal do quiz)
├── /dashboard (dashboard de leads)
└── /api/* (endpoints)
```

---

## ✅ Testes

### Teste 1: Página Principal
```
Acesse: https://tantraemcasa.com.br
Esperado: Página com hero, educação sobre linguagens, formulário
```

### Teste 2: Formulário de Captura
```
1. Preencha o formulário com dados de teste
2. Clique em "Começar o Teste"
3. Esperado: Formulário desaparece e quiz aparece
```

### Teste 3: Quiz
```
1. Responda todas as 33 perguntas
2. Clique em "Ver Meu Resultado"
3. Esperado: Resultado aparece com feedback personalizado
```

### Teste 4: Integração Google Sheets
```
1. Complete o quiz
2. Acesse: https://tantraemcasa.com.br/dashboard
3. Esperado: Lead aparece na tabela e na planilha Google
```

### Teste 5: WhatsApp
```
1. No resultado, clique em "Agendar Sessão no WhatsApp"
2. Esperado: Abre WhatsApp com mensagem pré-preenchida
```

---

## 🔐 Segurança

### Variáveis de Ambiente
- ✅ Nunca commit `.env` no Git
- ✅ Use `.env.example` como template
- ✅ Adicione `.env` ao `.gitignore`

### API Keys
- ✅ Restrinja a chave de API do Google apenas para Sheets API
- ✅ Use IP whitelist se possível
- ✅ Rotacione as chaves regularmente

---

## 🆘 Troubleshooting

### Erro: "GOOGLE_SHEET_ID não definido"
- Verifique se as variáveis de ambiente estão configuradas no Netlify
- Reinicie o site após adicionar variáveis

### Erro: "Acesso negado ao Google Sheets"
- Verifique se a planilha foi compartilhada com a conta de serviço
- Verifique se a chave de API está correta

### Leads não aparecem no dashboard
- Verifique se o formulário foi enviado com sucesso
- Abra o console (F12) para ver erros
- Verifique os logs do Netlify

---

## 📞 Suporte

Para problemas:
1. Verifique os logs do Netlify (Analytics > Logs)
2. Abra o console do navegador (F12)
3. Verifique se as variáveis de ambiente estão corretas

---

## 🎉 Pronto!

Seu site está ao vivo em: **https://tantraemcasa.com.br**

Acesse o dashboard em: **https://tantraemcasa.com.br/dashboard**
