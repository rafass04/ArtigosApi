import { ArtigoController } from '../controllers';

async function makeRoutes(app, conexao, bodyParser, idParser) {
  // Sucesso
  // { ok: true, data: ... }
  // Erro
  // { ok: false, error: ... }

  await conexao.conectar('Artigo');
  const controller = new ArtigoController(conexao, idParser);

  app.get('/:id', async (req, res) => {
    try {
      const artigo = await controller.obterArtigo(req.params.id);
      res.send({ ok: true, data: artigo });
    } catch (error) {
      res.send({ ok: false, error: error.message });
    }
  });

  app.get('/', async (req, res) => {
    try {
      const lista = await controller.listarArtigos();
      res.send({ ok: true, data: lista });
    } catch (error) {
      res.send({ ok: false, error: error.message });
    }
  });

  app.post('/', bodyParser, async (req, res) => {
    try {
      const { body, params } = req;
      await controller.criarArtigo(body.autor, body.titulo, body.texto, params.id);
      res.send({ ok: true });
    } catch (error) {
      res.send({ ok: false, error: error.message });
    }
  });

  app.delete('/:id', async (req, res) => {
    try {
      await controller.deletarArtigo(req.params.id);
      res.send({ ok: true });
    } catch (error) {
      res.send({ ok: false, error: error.message });
    }
  });

  app.put('/:id', bodyParser, async (req, res) => {
    try {
      const { body, params } = req;
      await controller.editarArtigo(body.titulo, body.texto, params.id);
      res.send({ ok: true });
    } catch (error) {
      res.send({ ok: false, error: error.message });
    }
  });
}

export default makeRoutes;
