<template>

  <button @click="openModal">abrir modal</button>
<modal 
v-if="isOpen"
@eventclose="closeModal"


>
  
  <template v-slot:header>
  <h1>Cabeza</h1>

  </template>
  <template v-slot:body>
  <h5>Cuerpo</h5>
  <button @click="closeModal">cerrar modal</button>
  <button @click="btnEsc">cerrar modal con esc</button>

  </template>
  <template v-slot:footer>
  <span>footer</span>

  </template>

</modal>

</template>

<script>
import { ref, onMounted } from 'vue';
import Modal  from "../components/Modal.vue";
export default {
      components: { Modal },
       setup(){

    
            onMounted(() => {
            window.addEventListener(
           "keydown",
           (event) => {
            const keyName = event.key
            if (keyName == "Escape") {
              isOpen.value = false
            }else{
              return
            }
           
            })
    })
         let isOpen = ref(false)

          return{
            isOpen,
            openModal: ()=> isOpen.value = true,
            closeModal: ()=> isOpen.value = false,
             btnEsc: ()=> console.log('funcion llamada'),
            onMounted
            
          }
       }  
}
</script>

<style scoped>

</style>