import express from 'express';
import { ObjectID } from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';
import { artigos } from './routes';
import Conexao from './data/conexao';

const parser = bodyParser.json();
const app = express();
app.use(cors());
const db = new Conexao();

async function main() {
  function idParser(id) {
    return new ObjectID(id);
  }
  await artigos(app, db, parser, idParser);
}

main();

app.listen(3000);
