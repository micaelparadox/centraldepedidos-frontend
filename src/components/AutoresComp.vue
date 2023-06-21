<template>
  <div class="autores">
    <h1 class="titulo">Autores</h1>
    <div class="formulario">
      <h2 class="subtitulo">Cadastrar Autor</h2>
      <form @submit.prevent="criarAutor" class="form">
        <div class="form-group">
          <label for="nome" class="label">Nome:</label>
          <input type="text" id="nome" v-model="novoAutor.nome" required class="input">
        </div>
        <div class="form-group">
          <label for="dataNascimento" class="label">Data de Nascimento:</label>
          <input type="date" id="dataNascimento" v-model="novoAutor.data_nascimento" required class="input">
        </div>
        <div class="form-group">
          <label for="nacionalidade" class="label">Nacionalidade:</label>
          <input type="text" id="nacionalidade" v-model="novoAutor.nacionalidade" required class="input">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-submit">Cadastrar</button>
        </div>
      </form>
    </div>
    <div class="lista">
      <h2 class="subtitulo">Lista de Autores</h2>
      <ul>
        <li v-for="autor in autores" :key="autor.id" class="autor-item">
          <div class="autor-info">
            <h3 class="autor-nome">{{ autor.nome }}</h3>
            <p>Data de Nascimento: {{ autor.data_nascimento }}</p>
            <p>Nacionalidade: {{ autor.nacionalidade }}</p>
          </div>
          <div class="autor-actions">
            <button @click="editarAutor(autor.id)" class="btn btn-edit">Editar</button>
            <button @click="confirmarDeletarAutor(autor.id)" class="btn btn-delete">Deletar</button>
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
      autores: [],
      novoAutor: {
        nome: '',
        data_nascimento: '',
        nacionalidade: ''
      }
    };
  },
  mounted() {
    this.carregarAutores();
  },
  methods: {
    carregarAutores() {
      axios.get('http://laravel.test/api/autores')
        .then(response => {
          this.autores = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    criarAutor() {
      axios.post('http://laravel.test/api/autores', this.novoAutor)
        .then(response => {
          this.autores.push(response.data.autor);
          this.novoAutor = {
            nome: '',
            data_nascimento: '',
            nacionalidade: ''
          };
        })
        .catch(error => {
          console.error(error);
        });
    },
    editarAutor(id) {
      axios.get(`http://laravel.test/api/autores/${id}`)
        .then(response => {
          this.novoAutor = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    confirmarDeletarAutor(id) {
      if (confirm('Tem certeza que deseja deletar este autor?')) {
        this.deletarAutor(id);
      }
    },
    deletarAutor(id) {
      axios.delete(`http://laravel.test/api/autores/${id}`)
        .then(() => {
          this.carregarAutores();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
.autores {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
}

.titulo {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.subtitulo {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.formulario {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.label {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input {
  width: 100%;
  padding: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
}

.lista {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.autor-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.autor-info {
  flex: 1;
}

.autor-nome {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.autor-actions {
  display: flex;
}

.btn {
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
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
  background-color: #555555;
  color: white;
}
</style>
