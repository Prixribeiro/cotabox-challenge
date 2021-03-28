const app = require('./connection/server');
const connection = require('./connection/config');
const participationModel = require('./models/participationModel');

// select - dados
app.get('/dados', async (req, res) => {
  res.json(await participationModel.find({}));
});

// insert - dados
const dados = [];
app.post('/dados', async (req, res) => {
  console.log("Cadastro recebido!");
    //salva no banco de dados
    dados.push({
        name: req.body.name, 
        lastName: req.body.lastName,
        participation: parseInt(req.body.participation), 
        
    });
    res.json({message: "Tudo ok por aqui!", dados: dados});
});
  


