<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>|
        <RouterLink to="/about">About</RouterLink>|
        <RouterLink to="/counter">Counter</RouterLink>|
        <RouterLink to="/usuarios">Usuarios</RouterLink>|
        <RouterLink to="/search-pokemon">Pokemon</RouterLink>|
        <RouterLink to="/todo">Todos</RouterLink>|
        <RouterLink to="/slot">Slot</RouterLink>|
        
      </nav>
    </div>
  </header>

  <router-view v-slot="{ Component }" >
       <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
