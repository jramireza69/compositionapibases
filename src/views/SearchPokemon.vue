<template>
<div>
<h1>buscar pokemon: {{ pokemonId}} </h1>  
<form 
@submit.prevent="onSubmitPokemon"
action="">
<input type="number"
placeholder="number pokemon"
v-model="pokemonId"
ref="txtSearchId" 
>
</form>

</div>

</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'
// import {  } from "module";
export default {

    
    setup (){
        const router = useRouter()

        const pokemonId = ref(5)
        const txtSearchId = ref()

        onActivated(()=> {
            // txtSearchId.value.focus()
            txtSearchId.value.select()
        })

       


        return {
            pokemonId,
            txtSearchId,
            onSubmitPokemon: () => {
                // console.log('buscando pokemon', pokemonId.value);
                router.push({name: 'pokemon-id' , params: {id: pokemonId.value}})
            }
        }
    }

}
</script>

<style>

</style>