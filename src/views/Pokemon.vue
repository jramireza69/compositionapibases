<template>
<h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
        <template v-else>

        <h3>{{pokemon.name}}</h3>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <br>
        <router-link
         :to="{ name: 'search-pokemon' }"
            >Regresar
        </router-link>
        
        </template>  
</template>
     
    
  

<script>
import {watch} from 'vue'
import { useRoute } from 'vue-router'
import usePokemon from '../composables/usePokemon'

export default {
 setup(){
  const route = useRoute()
  // console.log(route.params);

  const  { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(route.params.id)

  watch(
    
    () => route.params.id,
    // (valorActual, valorAnterior) => {
    // () => {
      // console.log(valorActual, valorAnterior);
    // } 
    () => searchPokemon(route.params.id)
   )

  return {
    errorMessage, isLoading, pokemon

  }
 }  
}
</script>

