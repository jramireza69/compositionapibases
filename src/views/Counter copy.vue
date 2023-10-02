<template>
  <h1>Counter principal</h1>
  <h3>{{counter}}</h3>

  <button @click="increase">+1</button>
  <button  @click="decrease">-1</button>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Counter',
    props: {},
    emits: [],

setup(){
const counter = ref(5)

// const increase = () => {
//     counter.value++
// }
const decrease = () => {
    counter.value--
}

return{
    counter,
    increase: ()=> counter.value++,
    decrease
}
}
}
</script>

<style>

</style>