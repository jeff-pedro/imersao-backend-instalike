# Instabytes - Imersão Dev Back-End (Alura)

## Sobre
API RESTful desenvolvida em Node.js para a plataforma de rede social fictícia **Instabytes**. O projeto utiliza a IA Google Gemini para oferecer funcionalidades avançadas, como geração de legendas personalizadas. A imersão tem como objetivo trazer um aprendizado imersivo em desenvolvimento de software do lado servidor, utilzando como linguagem e plataforma JavaScrip/Node.js, como outros objetivos explorar as possibilidades da IA no desenvolvimento de backends modernos e escaláveis.

## Links
- [API](https://imersao-dev-backend-instabytes-396738216589.southamerica-east1.run.app/posts/)
- [Site: Instabytes](https://instabytes.onrender.com/)
- [Repositório do Instabytes: front-end](https://github.com/jeff-pedro/instabytes)

## Rotas
### `GET /posts`
**Formato de saída:**
```
[
    {
        _id: string,
        descricao: string,
        imgUrl: string,
        alt: string,
    }
]
```
---

### `GET /posts/{id}` 
**Formato de saída:**
```
{
    _id: string,
    descricao: string,
    imgUrl: string,
    alt: string,
}
```
---

### `POST /posts/{id}`
**Formato de saída:**
```
{
    descricao: string,
    imgUrl: string,
    alt: string,
}
```
**Exemplo do corpo da requisição:**
```
{
    descricao: "uma imagem",
    imgUrl: "http://imagem.com/cats/1,
    alt: "uma imagem",
}
```
---

### `PUT /posts/{id}`
**Formato de saída:**
```
{
    message: "Post atualizado com sucesso!"
}
```
**Exemplo do corpo da requisição:**
```
{
    descricao: "atualizando a descrição da imagem"
}
```
---

### `DELETE /posts/{id}`
**Formato de saída:**
```
{
    message: "Post excluído com sucesso!"
}
```
