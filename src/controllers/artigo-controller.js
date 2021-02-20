import Artigo from '../app/artigo';

class ArtigoController {
  constructor(conexao, parserId) {
    this.instancia = new Artigo(conexao);
    this.parserId = parserId;
  }

  obterArtigo(id) {
    if (!id) {
      throw new Error('Informe o ID do artigo!');
    }
    return this.instancia.obterArtigo(this.parserId(id));
  }

  listarArtigos() {
    return this.instancia.listarArtigos();
  }

  criarArtigo(autor, titulo, texto) {
    if (!autor) {
      throw new Error('Informe o autor!');
    }
    if (!titulo) {
      throw new Error('Informe o título!');
    }
    if (!texto) {
      throw new Error('Informe o texto!');
    }
    return this.instancia.criarArtigo(autor, titulo, texto);
  }

  deletarArtigo(id) {
    if (!id) {
      throw new Error('Informe o ID do artigo!');
    }
    return this.instancia.deletarArtigo(this.parserId(id));
  }

  editarArtigo(titulo, texto, id) {
    if (!titulo) {
      throw new Error('Informe o título!');
    }
    if (!texto) {
      throw new Error('Informe o texto!');
    }
    if (!id) {
      throw new Error('Informe o ID do artigo!');
    }
    return this.instancia.editarArtigo(titulo, texto, this.parserId(id));
  }
}

export default ArtigoController;
