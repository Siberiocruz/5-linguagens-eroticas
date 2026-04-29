const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Configuração Google Sheets
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const sheets = google.sheets({
    version: 'v4',
    auth: GOOGLE_API_KEY
});

// Rota para salvar lead
app.post('/api/save-lead', async (req, res) => {
    try {
        const { fullName, whatsapp, email, quizResult } = req.body;
        const timestamp = new Date().toLocaleString('pt-BR');

        // Dados a serem salvos
        const values = [
            [timestamp, fullName, whatsapp, email, quizResult]
        ];

        // Salvar na planilha Google
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Leads!A:E',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: values
            }
        });

        console.log('Lead salvo:', response.data);

        res.json({
            success: true,
            message: 'Lead salvo com sucesso',
            data: response.data
        });
    } catch (error) {
        console.error('Erro ao salvar lead:', error);
        res.status(500).json({
            success: false,
            message: 'Erro ao salvar lead',
            error: error.message
        });
    }
});

// Rota para obter todos os leads
app.get('/api/leads', async (req, res) => {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Leads!A:E'
        });

        const rows = response.data.values || [];
        
        // Converter para array de objetos
        const leads = rows.slice(1).map(row => ({
            timestamp: row[0] || '',
            fullName: row[1] || '',
            whatsapp: row[2] || '',
            email: row[3] || '',
            quizResult: row[4] || ''
        }));

        res.json({
            success: true,
            leads: leads,
            total: leads.length
        });
    } catch (error) {
        console.error('Erro ao obter leads:', error);
        res.status(500).json({
            success: false,
            message: 'Erro ao obter leads',
            error: error.message
        });
    }
});

// Rota para dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// Rota para página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
