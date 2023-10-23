<template>
     <div class="flotada">
     <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <ul>
            <li v-for="{ first_name, last_name, email, id } in users" :key="id">
                <h4>{{ first_name }} {{ last_name }}</h4>
                <h6>{{ email }}</h6>
            </li>
        </ul>
    </div>
    <div>

    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span> Página: {{ currentPage }}</span>
    </div>

     </div>
</template>

<script>

import useUsers from '../composables/useUsers'
export default {
setup(){
    const { 
            currentPage,
            errorMessage,
            isLoading,
            nextPage,
            prevPage,
            users,
         } = useUsers()


         return {
            isLoading,
            errorMessage,
            users,
            prevPage,
            nextPage,
            currentPage,
        }
}
}
</script>

<style>
h2 {
    text-align: center;
    width: 100%;
}

/* div {
    display: flex;
    justify-content: center;
    text-align: center;
} */

ul {
    width: 250px;
}
.flotada{
    
    display: block;
    width: 250px;
    height: 450px;
    background-color: lightblue;
    text-align: center;
    border: 1px solid rebeccapurple;
    margin-top: 20px;
    margin-left: 120px;
    padding: 20px;
    float: left;
}
div button{
    margin-top: 20px;
    color: rgb(232, 21, 21);
}
</style>