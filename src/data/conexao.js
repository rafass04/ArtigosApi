import { MongoClient } from 'mongodb';

class Conexao {
  // #region Métodos públicos
  /**
   * insere um registro no banco de dados
   * @param {string} colecao nome da colecao no banco de dados
   * @param {object} dados registro a ser inserido
   */
  async inserir(colecao, dados) {
    const coll = this.db.collection(colecao);
    await coll.insertOne(dados);
    return dados;
  }

  async obter(colecao, filtro) {
    const coll = this.db.collection(colecao);
    return coll.find(filtro).toArray();
  }

  async atualizar(colecao, dados, id) {
    const coll = this.db.collection(colecao);
    await coll.updateOne({ _id: id }, dados);
    return dados;
  }

  async deletar(colecao, id) {
    const coll = this.db.collection(colecao);
    await coll.deleteOne({ _id: id });
  }
  // #endregion Métodos públicos

  // #region Métodos Privados
  async conectar(dbName) {
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    this.db = client.db(dbName);
  }
  // #endregion Métodos Privados
}

export default Conexao;
