```markdown
# Frontend Vue.js - README

Este é um projeto de frontend Vue.js que utiliza Docker para facilitar a execução do ambiente de desenvolvimento. O projeto inclui duas telas: "Autores" e "Livros".

## Pré-requisitos

Certifique-se de ter instalado os seguintes softwares em sua máquina:

- Docker (https://www.docker.com/)
- Docker Compose (https://docs.docker.com/compose/)

## Executando o projeto com Docker

1. Clone o repositório do projeto:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Navegue até o diretório raiz do projeto:

```bash
cd nome-do-repositorio
```

3. Crie uma imagem Docker do frontend:

```bash
docker build -t frontend-vue .
```

4. Execute o container Docker:

```bash
docker run -it -p 8080:8080 --rm frontend-vue
```

5. Abra o navegador e acesse http://localhost:8080 para visualizar o frontend Vue.js.

## Telas do Frontend

### Tela de Autores

![Tela de Autores](https://prnt.sc/yVhGg5q2qxbX)

### Tela de Livros

![Tela de Livros](https://prnt.sc/0fsPbjQcEluG)

```
