import express from 'express';
import bodyParser from 'body-parser';

const parser = bodyParser.json();
const app = express();

app.get('/', (req, res) => {
    res.send({ok: true});
});
app.post('/', parser, (req, res) => {
    res.send({dados: req.body});
});

app.listen(3000);
