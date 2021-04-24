class Artigo {
  /**
   *
   * @param {import('../data/conexao').default} conexao instancia de conexao do banco de dados
   */
  constructor(conexao) {
    this.conexao = conexao;
  }

  async criarArtigo(autor, titulo, texto) {
    return this.conexao.inserir('Artigos', {
      title: titulo,
      autor,
      article: texto,
      date: new Date().toUTCString(),
    });
  }

  async obterArtigo(id) {
    const result = await this.conexao.obter('Artigos', { _id: id });
    return result[0];
  }

  async listarArtigos() {
    return this.conexao.obter('Artigos', {});
  }

  async editarArtigo(titulo, texto, id) {
    const dados = {
      titulo,
      texto,
      dataAlteracao: new Date().toUTCString(),
    };
    return this.conexao.atualizar(
      'Artigos', dados, id,
    );
  }

  async deletarArtigo(id) {
    return this.conexao.deletar('Artigos', id);
  }
}

export default Artigo;
