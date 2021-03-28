const express = require ('express');
const bodyParser = require('body-parser');
const cors = require ('cors')
const app = express();

app.use (express.json ());
app.use (bodyParser.urlencoded({extended: true}));
app.use (cors());

const port = 5000
app.listen(port,()=>{
    console.log("http://localhost:" + port)
});

module.exports= app 