class Artigo {
  /**
   *
   * @param {import('../data/conexao').default} conexao instancia de conexao do banco de dados
   */
  constructor(conexao) {
    this.conexao = conexao;
  }

  criarArtigo(autor, titulo, texto) {
    this.conexao.inserir('Artigos', {
      titulo,
      autor,
      texto,
      data: new Date().toUTCString(),
    });
  }
}

export default Artigo;
