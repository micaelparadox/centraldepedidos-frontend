<template>
  <div id="nav">
    <router-link to="/autores">Autores</router-link> |
    <router-link to="/livros">Livros</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#nav {
  padding: 30px;
  background-color: #f8f9fa;
}

#nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
}
</style>
