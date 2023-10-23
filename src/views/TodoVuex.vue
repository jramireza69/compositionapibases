<template>


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
  </button>||||
    <button>Crear todo</button>
  </div>
  
      <modal v-if="isOpen" >
           <template v-slot:header>
  <h1>Cabeza</h1>

  </template>
  <template v-slot:body>
  <h5>Cuerpo</h5>
  <button @click="closeModal">cerrar modal</button>
  <label for="text">Detalle:</label>
 <input v-model="testimput" type="text" name="text"       
  >
  <button @click="closeAndSubmit(testimput)">crear y cerrar</button>

  </template>
  <template v-slot:footer>
  <span>footer</span>

  </template>
      </modal>

  <div>


    <ul>
      <li v-for="{ id, text, completed } in getTodosByTab" :key="id"
           :class="{ 'completed': completed }"
           @dblclick="toggleTodo(id)"
      >
            {{text}}
      </li>
    </ul>

    <!-- Modal -->
    <!-- formulario 
     -->
     <!-- submit.prevent
          create todo
      -->

  </div>
</template>

<script>
import UseTodos from '../composables/useTodos'
import Modal from '../components/Modal.vue'

export default {
       components: {Modal},
     setup(){

      const closeAndSubmit = (testo) => {
        createTodo(testo)
        isOpen.value = false

      }
            
       const  { currenTab,  pending,  getTodosByTab, toggleTodo, isOpen, testimput, createTodo}  = UseTodos()


           return {
             
             currenTab,  pending,  getTodosByTab, toggleTodo, isOpen, testimput, createTodo, closeAndSubmit

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