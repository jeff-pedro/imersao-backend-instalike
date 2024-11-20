import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Foto de um gatinho fofo",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 2,
    descricao: "Paisagem deslumbrante de um pôr do sol",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 3,
    descricao: "Cachorro fazendo uma careta engraçada",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 4,
    descricao: "Comida deliciosa e colorida",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 5,
    descricao: "Cidade vibrante à noite",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 6,
    descricao: "Natureza exuberante com uma cachoeira",
    imagem: "https://placecats.com/millie/300/150"
  }
];

const app = express();
app.use(express.json());

function buscaPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

app.get('/posts/:id', (req, res) => {
    const index = buscaPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

