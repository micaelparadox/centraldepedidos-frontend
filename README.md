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

![image](https://github.com/micaelparadox/centraldepedidos-frontend/assets/69440479/13e4e844-d6bf-47be-9d8c-a0c2cabc853f)


### Tela de Livros

![image](https://github.com/micaelparadox/centraldepedidos-frontend/assets/69440479/f2dfa037-7a6c-4493-8bf9-cd34bde75ba3)


```
