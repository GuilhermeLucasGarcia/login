const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/users', (req, res) => {
    const { email, senha } = req.body;

    const query = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';
    connection.query(query, [email, senha], (error, results) => {
        if (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ error: 'Erro ao criar usuário' });
        } else {
            const newUser = { id: results.insertId, email, senha };
            res.json(newUser);
        }
    });
});

const PORT =process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}')
})

// Banco de dados

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'GuilherGarcia',
    password: '@Tulipa123',
    database: 'db_login'
})