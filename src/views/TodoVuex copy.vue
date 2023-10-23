<template>
  <h1>todo vuex {{ all }}</h1>
  <!-- <h1>task activas {{ completed.length }}</h1> -->
  <!-- <h1>todo todas las tareas  {{ pending.length }}</h1> -->

  <br>
  <div>

  <button 
  :class="{ 'active': currenTab === 'all'}"
  @click="currenTab = 'all'"
  >
  todos
  </button>
  <button 
  :class="{ 'active': currenTab === 'pending'}"
  @click="currenTab = 'pending'"
  >
  pendiente
  </button>
  <button 
  :class="{ 'active': currenTab === 'completed'}"
  @click="currenTab = 'completed'"
  >
  completados
  </button>
  </div>
  

  <div>

    <ul>
      <li v-for="{ id, text, completed } in getTodosByTab" :key="id"
           :class="{ 'completed': completed }"
           @dblclick="toggleTodo(id)"
      >
            {{text}}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {

     setup(){
           const store = useStore()
           const currenTab = ref('all')


           return {
             currenTab,

            all: computed(() => store.getters['all']),
            pending: computed(() => store.getters['allTodos']),
            completed: computed(() => store.getters['todoCompleted']),
            getTodosByTab: computed(() => store.getters['getTodosByTab'](currenTab.value) ),
            //  Methods
             toggleTodo: ( id ) => store.commit('toggleTodo', id)

           }
     }  

}
</script>

<style  scoped>
div{
  display: flex;
  justify-content: center;
  text-align: center;
}
ul{
  width: 300px;
  text-align: left;
}
li{
  cursor: pointer;
}
.active {
  background-color: #2c3e50;
  color: white;
}
.completed{
  text-decoration: line-through;
}
</style>