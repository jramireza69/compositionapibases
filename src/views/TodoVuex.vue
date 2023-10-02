<template>
  <h1>todo vuex {{ tareasactivas }}</h1>
  <h1>task activas {{ completedtodos.length }}</h1>
  <h1>todo todas las tareas  {{ alltodos.length }}</h1>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {

     setup(){
           const store = useStore()


           return {

            tareasactivas: computed(() => store.getters['todoPendiente']),
            alltodos: computed(() => store.getters['alltodos']),
            completedtodos: computed(() => store.getters['completedtodos'])
           }
     }  

}
</script>

<style>

</style>