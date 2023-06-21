<template>
  <div class="livros p-8">
    <h1 class="titulo">Livros</h1>
    <div class="formulario">
      <h2 class="subtitulo">Cadastrar Livro</h2>
      <form @submit.prevent="criarLivro" class="form">
        <div class="form-group">
          <label for="titulo" class="label">Título:</label>
          <input type="text" id="titulo" v-model="novoLivro.titulo" required class="input">
        </div>
        <div class="form-group">
          <label for="anoPublicacao" class="label">Ano de Publicação:</label>
          <input type="number" id="anoPublicacao" v-model="novoLivro.ano_publicacao" required class="input">
        </div>
        <div class="form-group">
          <label for="autorId" class="label">Autor:</label>
          <select id="autorId" v-model="novoLivro.autor_id" class="input">
            <option v-for="autor in autores" :key="autor.id" :value="autor.id">
              {{ autor.nome }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-submit">Cadastrar</button>
        </div>
      </form>
    </div>
    <div class="lista mt-8">
      <h2 class="subtitulo">Lista de Livros</h2>
      <ul>
        <li v-for="livro in livros" :key="livro.id" class="livro-item">
          <div class="livro-info">
            <h3 class="livro-titulo">{{ livro.titulo }}</h3>
            <p>Ano de Publicação: {{ livro.ano_publicacao }}</p>
            <p>Autor: {{ getAutorName(livro.autor_id) }}</p>
          </div>
          <div class="livro-actions">
            <button @click="editarLivro(livro.id)" class="btn btn-edit">Editar</button>
            <button @click="confirmarDeletarLivro(livro.id)" class="btn btn-delete">Deletar</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      livros: [],
      autores: [],
      novoLivro: {
        titulo: '',
        ano_publicacao: 0,
        autor_id: null
      }
    };
  },
  mounted() {
    this.carregarLivros();
    this.carregarAutores();
  },
  methods: {
    carregarLivros() {
      axios.get('http://laravel.test/api/livros')
        .then(response => {
          this.livros = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    carregarAutores() {
      axios.get('http://laravel.test/api/autores')
        .then(response => {
          this.autores = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    criarLivro() {
      axios.post('http://laravel.test/api/livros', this.novoLivro)
        .then(response => {
          this.livros.push(response.data.livro);
          this.novoLivro = {
            titulo: '',
            ano_publicacao: 0,
            autor_id: null
          };
        })
        .catch(error => {
          console.error(error);
        });
    },
    editarLivro(id) {
      axios.get(`http://laravel.test/api/livros/${id}`)
        .then(response => {
          this.novoLivro = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    confirmarDeletarLivro(id) {
      if (confirm('Tem certeza que deseja deletar este livro?')) {
        this.deletarLivro(id);
      }
    },
    deletarLivro(id) {
      axios.delete(`http://laravel.test/api/livros/${id}`)
        .then(() => {
          this.carregarLivros();
        })
        .catch(error => {
          console.error(error);
        });
    },
    getAutorName(id) {
      const autor = this.autores.find(autor => autor.id === id);
      return autor ? autor.nome : '';
    }
  }
};
</script>

<style scoped>
.livros {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.titulo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.subtitulo {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.form {
  width: 100%;
  max-width: 300px;
}

.form-group {
  margin-bottom: 15px;
}

.label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}

.input {
  width: 100%;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.lista {
  margin-top: 16px;
}

.livro-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
}

.livro-titulo {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.livro-actions {
  display: flex;
}

.btn {
  padding: 6px 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}

.btn-submit {
  background-color: #4CAF50;
  color: white;
}

.btn-edit {
  background-color: #FFC107;
  color: black;
}

.btn-delete {
  background-color: #F44336;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}
</style>
